import { Box, Text, Flex, Container, Input, Button } from "@chakra-ui/react";
import SwiperImages from "./SwiperImages";
import "./styles/buttons.css";

const HeroCmp = () => {
  return (
    <Container bg={"#212121"} maxW={""} h={"100vh"} centerContent>
      <Box mt={4}>
        <form>
          <Flex flexDir={"row"} gap={7}>
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
            >
              SEARCH
            </Button>
          </Flex>
        </form>
      </Box>
      {/* main content */}
      <Box mt={3}>{/* <SwiperImages /> */}</Box>
    </Container>
  );
};

export default HeroCmp;
