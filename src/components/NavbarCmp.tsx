import {
  Box,
  Image,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
// import "./styles/index.css";

interface Props {
  children: React.ReactNode;
}

const links = ["Home", "TV Shows", "Movies", "My List", ];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function NavbarCmp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} bg="#000" color="gray.300">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={"gray.300"}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                src="/images/cineverse-logo.png"
                alt="logo"
                width={{ base: "60%", md: "35%" }}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  icon={<AiOutlineUser />}
                  fontSize={"1.4rem"}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Account</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4} display={"none"}>
        Main Content Here
      </Box>
    </>
  );
}

export const LoginNav = () => {
  return (
    <Box className="container">
      <Flex
        px={10}
        h={16}
        justifyContent={"space-between"}
        alignItems={"center"}
        className="card"
        bg={"#000"}
      >
        <Box>
          <Image src="/images/cineverse-logo.png" alt="logo" width={"35%"} />
        </Box>
        <Box>
          <Button colorScheme="orange" variant="outline" size={"sm"}>
            Sign In
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
