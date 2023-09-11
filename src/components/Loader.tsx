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
        <Text color="orange.800" fontWeight="extrabold" fontSize="4xl">
          <span className="letter letter1">C</span>
          <span className="letter letter2">I</span>
          <span className="letter letter3">N</span>
          <span className="letter letter4">E</span>
          <span className="letter letter5">V</span>
          <span className="letter letter6">E</span>
          <span className="letter letter7">R</span>
          <span className="letter letter8">S</span>
          <span className="letter letter9">E</span>
          <span className="letter letter10">.</span>
          <span className="letter letter10">.</span>
          <span className="letter letter10">.</span>
        </Text>
      </Box>
    </Container>
  );
};

export default Loader;
