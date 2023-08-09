import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";


const LoginCmp = () => {
  //const routeToHome = 

  return (
    <Flex
      w={"full"}
      h={"94vh"}
      backgroundImage={"url('images/projector.jpg')"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"3xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Unlimited movies, TV shows, and more.
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            Watch anywhere Cancel anytime.
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"orange.600"}
              rounded={"lg"}
              color={"white"}
              _hover={{ bg: "orange.800" }}
              onClick={() => {}}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default LoginCmp;
