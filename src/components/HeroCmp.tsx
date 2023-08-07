import { Box, Text, Flex, Container, Input } from "@chakra-ui/react";
import SwiperImages from "./SwiperImages";

const HeroCmp = () => {
  return (
    <Container bg={"#212121"} maxW={""} h={"100vh"} centerContent>
      <Box mt={4}>
        <form>
          <Input
            variant="flushed"
            focusBorderColor="orange.400"
            placeholder="search"
            color="gray.200"
            w={"40vw"}
          />
        </form>
      </Box>
      {/* main content */}
      <Box mt={3}>
        <SwiperImages />
      </Box>
    </Container>
  );
};

export default HeroCmp;
