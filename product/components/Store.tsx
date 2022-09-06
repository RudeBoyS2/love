import * as React from "react";
import {Button, Flex, Grid, Stack, Text, useColorMode} from "@chakra-ui/react";
import {BsCart4} from "react-icons/bs";

import type {Product} from "../types";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../../cart/components/CartDrawer/CartDrawer";
import {useCart} from "../../cart/context";

interface Props {
  products: Product[];
}

const StoreScreen: React.FC<Props> = ({products}) => {
  const [{total, quantity}, {addItem}] = useCart();
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);
  const {colorMode, toggleColorMode} = useColorMode();

  React.useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, []);

  return (
    <>
      <Stack spacing={6}>
        {products?.length ? (
          <Grid
            gridGap={8}
            templateColumns={{
              base: "repeat(auto-fill, minmax(240px, 1fr))",
              sm: "repeat(auto-fill, minmax(360px, 1fr))",
            }}
          >
            {products
              .filter((product) => product.stock !== "0")
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={(product: Product) => addItem(product.id, {...product, quantity: 1})}
                />
              ))}
          </Grid>
        ) : (
          <Stack height="50vh">
            <Text color="font" fontSize="lg" margin="auto">
              No tenemos stock por el momento
            </Text>
          </Stack>
        )}
        {Boolean(quantity) && !isCartOpen && (
          <Flex
            alignItems="center"
            bottom={4}
            justifyContent="center"
            position="sticky"
            zIndex="500"
          >
            <Button
              backgroundColor="bgSecondary"
              boxShadow="xl"
              colorScheme="gray"
              data-testid="show-cart"
              marginBottom={2}
              size="lg"
              width={{base: "100%", sm: "fit-content"}}
              onClick={() => toggleCart(true)}
            >
              <Stack alignItems="center" direction="row" spacing={6}>
                <Stack alignItems="center" direction="row" spacing={6}>
                  <BsCart4 size={"26"} />
                  <Text
                    alignSelf={"center"}
                    backgroundColor="rgba(0,0,0,0.1)"
                    borderRadius="sm"
                    color="#444"
                    fontSize="sm"
                    fontWeight="500"
                    paddingX={2}
                    paddingY={2}
                  >
                    Cantidad: {quantity}
                  </Text>
                </Stack>
                <Text fontSize="md">{total}</Text>
              </Stack>
            </Button>
          </Flex>
        )}
      </Stack>
      <CartDrawer isOpen={isCartOpen} onClose={() => toggleCart(false)} />
    </>
  );
};

export default StoreScreen;
