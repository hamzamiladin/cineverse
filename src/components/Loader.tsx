import { Box, Text, Container, Flex } from "@chakra-ui/react";
import "./styles/loader.css";

const Loader = () => {
  return (
    <Container
      bg={"#212121"}
      centerContent
      color="#fff"
      overflow={"hidden"}
      h="100vh"
      as={Flex}
      alignItems="center"
      justifyContent="center"
    >
      <Box className="loader">
        <Text color="blue.500" fontWeight="extrabold" fontSize="4xl">
          <span className="letter letter1">M</span>
          <span className="letter letter2">0</span>
          <span className="letter letter3">V</span>
          <span className="letter letter4">I</span>
          <span className="letter letter5">E</span>
          <span className="letter letter6">M</span>
          <span className="letter letter7">8</span>
          <span className="letter letter10">.</span>
          <span className="letter letter10">.</span>
          <span className="letter letter10">.</span>
        </Text>
      </Box>
    </Container>
  );
};

export default Loader;
