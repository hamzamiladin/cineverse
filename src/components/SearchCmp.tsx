import { Box, Text, Flex, Input, Button } from "@chakra-ui/react";
import "./styles/buttons.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchCmp = () => {
  // const pathname = usePathname();
  // const query = useSearchParams();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    router.push(`/browse/${searchValue}`);
  };

  return (
    <>
      <Box mt={4}>
        <form>
          <Flex flexDir={"row"} gap={7} alignItems={"center"}>
            <Input
              variant="flushed"
              focusBorderColor="orange.400"
              placeholder="search"
              color="gray.200"
              w={"40vw"}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              className="search-btn"
              backgroundColor={"transparent"}
              color={"orange.500"}
              size={{ base: "sm", md: "md" }}
              mt={{ base: 2 }}
              onClick={handleSearch}
            >
              SEARCH
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default SearchCmp;
