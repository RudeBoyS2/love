import * as React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {Link as ChakraLink} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Link from "next/link";

import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function WithSubnavigation(): JSX.Element {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("navbar", "transparent")}
      position={"fixed"}
      py={0}
      top={0}
      width={"100vw"}
      zIndex={"90"}
    >
      <Flex alignItems={"center"} height={"65px"} justifyContent={{base: "start"}} py={0}>
        <Flex
          alignItems={"center"}
          flex={{base: 1}}
          justifyContent={{base: "center", md: "start"}}
          marginLeft={{md: 5}}
          ml={{sm: 2}}
          px={2}
        >
          <Box cursor={"pointer"}>
            <Link href={"/"}>
              <a>
                <Logo />
              </a>
            </Link>
          </Box>
          <Flex
            alignItems="center"
            color="font"
            display={"flex"}
            flex={"1"}
            justifyContent="center"
            ml={{base: 0, md: 10}}
          >
            <Flex maxWidth="900px" width="85%">
              <SearchBar />
            </Flex>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex
          alignItems={"center"}
          color="font"
          display={{base: "flex", md: "none"}}
          flex={{base: 0, md: 1}}
          ml={{base: -4}}
          mr={{sm: 2}}
        >
          <IconButton
            _active={{
              bg: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            _hover={{
              bg: "transparent",
              color: "secondary",
            }}
            aria-label={"Toggle Navigation"}
            icon={isOpen ? <CloseIcon h={3} w={3} /> : <HamburgerIcon h={5} w={5} />}
            variant={"ghost"}
            onClick={onToggle}
          />
        </Flex>
      </Flex>
      <Collapse animateOpacity in={isOpen}>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverBackground = useColorModeValue("white", "transparent");
  const popoverTextColor = useColorModeValue("black", "font");

  return (
    <Stack
      direction="row"
      display={{base: "none", md: "flex"}}
      flex="1"
      justifyContent="end"
      justifySelf="end"
      marginLeft={5}
      marginRight={3}
      spacing={3}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} bg={"transparent"}>
          <Popover placement={"bottom-start"} trigger={"hover"}>
            <Link href={navItem.href ? navItem.href : ""}>
              <a>
                <PopoverTrigger>
                  <Button
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    _hover={{
                      bg: "transparent",
                      color: "secondary",
                    }}
                    alignItems={"center"}
                    backgroundColor={"transparent"}
                    borderRadius={7}
                    color={"font"}
                    display={"flex"}
                    flexDirection={"column"}
                    fontFamily={"body"}
                    fontSize={"sm"}
                    fontWeight={500}
                    minHeight={"4rem"}
                    minW={"7rem"}
                    pl={5}
                    pr={5}
                    textDecoration={"none"}
                  >
                    <Text fontWeight={500} pt={1}>
                      {navItem.label}
                    </Text>
                  </Button>
                </PopoverTrigger>
              </a>
            </Link>

            {navItem.children && (
              <PopoverContent
                _focus={{boxShadow: "none"}}
                backdropFilter="blur(9px)"
                bg={popoverBackground}
                border={0}
                boxShadow={"xl"}
                color={popoverTextColor}
                minW={"sm"}
                p={4}
                rounded={"xl"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({label, href, subLabel}: NavItem) => {
  return (
    <Link href={href}>
      <a>
        <Box
          _hover={{bg: useColorModeValue("red.300", "transparent")}}
          cursor={"pointer"}
          display={"block"}
          p={2}
          role={"group"}
          rounded={"md"}
        >
          <Stack align={"center"} direction={"row"}>
            <Box>
              <Text _groupHover={{color: "secondary"}} fontWeight={500} transition={"all .1s ease"}>
                {label}
              </Text>
              <Text fontSize={"sm"}>{subLabel}</Text>
            </Box>
            <Flex
              _groupHover={{opacity: "100%", transform: "translateX(0)"}}
              align={"center"}
              flex={1}
              justify={"flex-end"}
              opacity={0}
              transform={"translateX(-10px)"}
              transition={"all .1s ease"}
            >
              <Icon as={ChevronRightIcon} color={"secondary"} h={5} w={5} />
            </Flex>
          </Stack>
        </Box>
      </a>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      backdropFilter="blur(10px)"
      bg={useColorModeValue("popover", "popover")}
      display={{md: "none"}}
      p={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({label, children, href, type}: NavItem) => {
  const {isOpen, onToggle} = useDisclosure();
  const hrefProp = href ? {href: href} : null;

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        _hover={{
          textDecoration: "none",
        }}
        align={"center"}
        as={type === "collapsable" ? "div" : ChakraLink}
        {...hrefProp}
        cursor="pointer"
        justify={"space-between"}
        py={2}
      >
        <Text color="font" fontWeight={600}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color="font"
            h={6}
            transform={isOpen ? "rotate(180deg)" : ""}
            transition={"all .25s ease-in-out"}
            w={6}
          />
        )}
      </Flex>

      <Collapse animateOpacity in={isOpen} style={{marginTop: "0!important"}}>
        <Stack align={"start"} color="font" mt={2} pl={4}>
          {children &&
            children.map((child) => (
              <ChakraLink
                key={child.label}
                _hover={{
                  textDecoration: "none",
                }}
                href={child.href}
                py={2}
                width="100%"
              >
                {child.label}
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  icon?: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  type?: "link" | "collapsable";
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inicio",
    href: "/",
    icon: "AiOutlineHome",
    type: "link",
  },
  {
    label: "Productos",
    href: "/categories/todos",
    icon: "RiTShirtLine",
    type: "collapsable",
    children: [
      {
        label: "Todos",
        href: "/categories/todos",
      },
      {
        label: "Jeans",
        href: "/categories/jeans",
      },
      {
        label: "Tops/Remeras",
        href: "/categories/tops-remeras",
      },
      {
        label: "Shorts/Polleras",
        href: "/categories/shorts-polleras",
      },
      {
        label: "Abrigos",
        href: "/categories/abrigos",
      },
      {
        label: "Vestidos",
        href: "/categories/vestidos",
      },
    ],
  },
  {
    label: "Contactanos",
    href: "/contact-me",
    icon: "BsChatDots",
    type: "link",
  },
];
