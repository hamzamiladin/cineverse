"use client";
import { useRouter, usePathname } from "next/navigation";
import { Container, Box } from "@chakra-ui/react";

const SearchResultsPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Container>
      <Box>{}</Box>
    </Container>
  );
};

export default SearchResultsPage;
