"use client";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Container, Box, Text } from "@chakra-ui/react";

const SearchResultsPage = () => {
  const router = useRouter();
  const movie = useParams().movie;
  console.log(movie);
  return (
    <Container>
      <Box>
        <Text>search:{movie}</Text>
      </Box>
    </Container>
  );
};

export default SearchResultsPage;
