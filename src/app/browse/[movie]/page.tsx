"use client";
import { useRouter, useParams } from "next/navigation";
import { Container, Box, Text } from "@chakra-ui/react";
import { cache } from "react";
import Link from "next/link";
import { Movie, SeriesDetails } from "../../../../typings";
import Image from "next/image";
import { useState, useEffect } from "react";
import { baseUrl } from "@/constants/movie";
import dynamic from "next/dynamic";

const FooterCmp = dynamic(() => import("@/components/FooterCmp"));
const SearchCmp = dynamic(() => import("@/components/SearchCmp"));

interface Props {
  movieResults: (Movie | SeriesDetails)[];
}

const SearchResultsPage = ({ movieResults }: Props) => {
  const router = useRouter();
  const { movie } = useParams();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const searchMovie = cache(async (query: string) => {
    const res = await fetch(
      `${BASE_URL}/search/multi?query=${query}&api_key=${API_KEY}`
    );
    const data = await res.json();
    return data.results;
  });

  const [searchResults, setSearchResults] = useState<(Movie | SeriesDetails)[]>(
    []
  );

  const handleRoute = (result: Movie | SeriesDetails) => {
    let mediaType = "movie";

    if ("title" in result) {
      mediaType = "movie";
    } else if ("name" in result) {
      mediaType = "tv";
    }

    router.push(`/browse/details/${mediaType}/${movie}/${result.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const results = await searchMovie(movie);
      setSearchResults(results);
    };
    fetchData();
  }, [movie, searchMovie]);

  return (
    <Container bg={"#212121"} maxW={""} centerContent overflow={"hidden"}>
      <SearchCmp />
      <Box mt={4}>
        <Text color={"#fff"}>search results for: {movie}</Text>
      </Box>
      {/* main */}
      <Box
        w="85%"
        display={"flex"}
        flexDir={"row"}
        flexWrap={"wrap"}
        mt={7}
        justifyContent={"space-between"}
      >
        {searchResults.map((result, idx) => (
          <Box
            key={idx}
            maxW={"30%"}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            mb={4}
            onClick={() => handleRoute(result)}
          >
            {result.poster_path ? (
              <Image
                src={`${baseUrl}${result.poster_path}`}
                alt="movie"
                width={200}
                height={200}
                style={{
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />
            ) : (
              <Box
                width={200}
                height={200}
                bg="gray.200"
                style={{
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />
            )}

            <Box p="2" maxW={200}>
              <Text color={"gray.300"}>
                {(result as Movie).title || (result as SeriesDetails).name}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
      <FooterCmp />
    </Container>
  );
};

export default SearchResultsPage;
