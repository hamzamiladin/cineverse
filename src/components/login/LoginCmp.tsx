import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginCmp = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });

  const handleSignIn = async () => {
    const result = await signIn("google");
    if (result?.error) {
      return toast({
        status: "error",
        description: `Oops! there was an issue that action, please try again`,
      });
    } else if (result?.ok) {
      toast({
        status: "success",
        description: "You have successfully logged in",
      });
      router.push("/browse");
    }
  };

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
              onClick={handleSignIn}
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
