import { Box, Text, Flex, Input, Button } from "@chakra-ui/react";
import "./styles/buttons.css";

const SearchCmp = () => {
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
            />
            <Button
              className="search-btn"
              backgroundColor={"transparent"}
              color={"orange.500"}
              size={{ base: "sm", md: "md" }}
              mt={{ base: 2 }}
            >
              SEARCH
            </Button>
          </Flex>
        </form>
      </Box>
      {/* Banner */}
    </>
  );
};

export default SearchCmp;
