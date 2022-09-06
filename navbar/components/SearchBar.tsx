import * as React from "react";
import type {NextPage} from "next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {InputGroup, Input, InputLeftElement, useColorModeValue} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";

import useDebounce from "../../utils/hooks/useDebounce";

/**
 * It's a search bar that uses debounce to prevent the user from spamming the search function.
 * @returns A component that renders a SearchBar.
 */
const SearchBar: NextPage = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    function searchURL(search) {
      router.push(`/search/${search}`);
    }

    if (debouncedSearch) searchURL(search.toLocaleLowerCase());
  }, [debouncedSearch]);

  return (
    <InputGroup maxWidth={{sm: "200px", md: "300px"}} minWidth={{base: "100%", md: "55%"}}>
      <InputLeftElement pb={2}>
        <AiOutlineSearch color={useColorModeValue("black", "#ccc")} />
      </InputLeftElement>
      <Input
        _focus={{boxShadow: "none"}}
        _focusVisible={{
          border: useColorModeValue("1px solid rgba(1,1,1,0.7)", "1px solid rgba(255,255,255,0.7)"),
        }}
        backgroundColor={useColorModeValue("white", "transparent")}
        border={useColorModeValue("1px solid rgba(1,1,1,0.3)", "1px solid rgba(255,255,255,0.3)")}
        borderRadius="10"
        placeholder="Buscar productos..."
        size="sm"
        type="text"
        variant={"flushed"}
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
