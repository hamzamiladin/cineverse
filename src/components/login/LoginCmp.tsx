import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import VideoBackground from '../VideoBackground';

const LoginCmp = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <VideoBackground src="/coverr-blurred-lights-3400-1080p.mp4">
    <Flex
      w={"full"}
      h={"94vh"}
      align={"center"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
<Stack maxW={"3xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Explore cinema with AI
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            Find your perfect movie match instantly.
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.600"}
              rounded={"lg"}
              color={"white"}
              _hover={{ bg: "orange.800" }}
              onClick={handleSignIn}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
</VideoBackground>
  );
};

export default LoginCmp;
