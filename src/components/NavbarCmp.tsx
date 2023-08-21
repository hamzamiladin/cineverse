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
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
// import "./styles/index.css";

interface Props {
  name: string;
  url: string;
}

// const links = ["Home", "TV Shows", , "My List", ];
const links: Array<Props> = [
  { name: "Home", url: "/browse" },
  { name: "TV Shows", url: "/browse/tv-series" },
  { name: "Movies", url: "/browse/movies" },
  { name: "My List", url: "/browse/my-list" },
];

const NavLink = (props: Props) => {
  return <Link href={props.url}>{props.name}</Link>;
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
                boxSize={{ base: "60%", md: "35%" }}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link) => (
                <NavLink key={link.url} {...link} />
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
                <NavLink key={link.url} {...link} />
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
          <Image src="/images/cineverse-logo.png" alt="logo" boxSize={"35%"} />
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
