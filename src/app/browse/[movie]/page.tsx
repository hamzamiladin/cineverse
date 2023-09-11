"use client";
import { useRouter, useParams } from "next/navigation";
import { Container, Box, Text } from "@chakra-ui/react";
import { Movie, SeriesDetails } from "../../../../typings";
import Image from "next/image";
import { useState, useEffect, cache } from "react";
import { baseUrl } from "@/constants/movie";
import dynamic from "next/dynamic";

const FooterCmp = dynamic(() => import("@/components/FooterCmp"));
const SearchCmp = dynamic(() => import("@/components/SearchCmp"));
const Loader = dynamic(() => import("@/components/Loader"));

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

  const [loading, setLoading] = useState(true);
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

    const timeout = setTimeout(() => {
      setLoading(false);
      fetchData();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [movie, searchMovie]);

  return (
    <Container bg={"#212121"} maxW={""} centerContent overflow={"hidden"}>
      <SearchCmp />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box mt={4}>
            <Text color={"#fff"}>
              search results for &quot;{decodeURIComponent(movie)}&quot;
            </Text>
          </Box>
          {/* main */}
          <Box
            w={{ base: "94%", md: "85%" }}
            display={"flex"}
            flexDir={"row"}
            flexWrap={"wrap"}
            mt={7}
            justifyContent={"space-between"}
          >
            {searchResults.map((result, idx) => (
              <Box
                key={idx}
                maxW={{ base: "48%", md: "30%" }}
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
                    width={{ base: 157, md: 200 }}
                    height={200}
                    bgColor="gray.900"
                    style={{
                      borderTopLeftRadius: "6px",
                      borderTopRightRadius: "6px",
                    }}
                  >
                    No Image
                  </Box>
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
        </>
      )}
    </Container>
  );
};

export default SearchResultsPage;
