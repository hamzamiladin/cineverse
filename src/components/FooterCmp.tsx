import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Logo = (props: any) => {
  return (
    <Box>
      <Image
        src="/images/cineverse-logo.png"
        alt="logo"
        width={200}
        height={20}
      />
    </Box>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterCmp() {
  return (
    <Box color="gray.300">
      <Container as={Stack} maxW={"6xl"} py={10} overflow={"hidden"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 Chakra Templates. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Jobs
            </Box>
            <Box as="a" href={"#"}>
              Cookie Preferences
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <Box as="a" href={"#"}>
              Gift Cards
            </Box>
            <Box as="a" href={"#"}>
              Terms of Use
            </Box>

            <Box as="a" href={"#"}>
              Legal Notices
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <Box as="a" href={"#"}>
              Media Center
            </Box>
            <Box as="a" href={"#"}>
              Privacy
            </Box>

            <Box as="a" href={"#"}>
              Contact Us
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
