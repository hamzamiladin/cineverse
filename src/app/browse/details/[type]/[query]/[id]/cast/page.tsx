"use client";

import { Box, Container, Text, Flex, Avatar, Button } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { MovieCast, MovieCrew } from "../../../../../../../../typings";
import { cache, useState, useEffect } from "react";
import { baseUrl } from "@/constants/movie";
import Image from "next/image";
import dynamic from "next/dynamic";
import useSWR from "swr";

const FooterCmp = dynamic(() => import("@/components/FooterCmp"));
const SearchCmp = dynamic(() => import("@/components/SearchCmp"));

interface Props {
  castResult: MovieCast[];
  crewResult: MovieCrew[];
}

const CastPage = ({ castResult, crewResult }: Props) => {
  const { id, type } = useParams();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  let addEndpoint = "/credits";
  if (type === "tv") {
    addEndpoint = "/aggregate_credits";
  }

  const getCast = cache(async (id: string, type: string) => {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}${addEndpoint}?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    return data;
  });

  const [castDetails, setCastDetails] = useState<MovieCast[] | []>([]);
  const [crewDetails, setCrewDetails] = useState<MovieCrew[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCast(id, type);
      setCastDetails(result.cast);
      setCrewDetails(result.crew);
    };
    fetchData();
  }, [getCast, id, type]);

  const startIdx = (currentPage - 1) * resultsPerPage;
  const endIdx = startIdx + resultsPerPage;
  const slicedCast = castDetails.slice(startIdx, endIdx);
  const slicedCrew = crewDetails.slice(startIdx, endIdx);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (endIdx < castDetails.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container bg={"#212121"} maxW={""} centerContent color="#fff">
      <SearchCmp />
      <Box mt={7} w={{ base: "90%", md: "85%" }}>
        <Flex justifyContent={"space-between"}>
          <Box>
            {slicedCast?.map((cast) => (
              <Flex key={cast.id} gap={3} py={2}>
                {/* fix image here */}
                {cast.profile_path ? (
                  <Box maxW={{ base: "50%", md: "35%" }}>
                    <Image
                      src={`${baseUrl}${cast.profile_path}`}
                      alt="cast-picture"
                      width={200}
                      height={150}
                    />
                  </Box>
                ) : (
                  <Flex
                    w={140}
                    h={200}
                    bg="gray.200"
                    style={{
                      borderTopLeftRadius: "5.2px",
                      borderTopRightRadius: "5.2px",
                    }}
                    py={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar size="lg" src="https://bit.ly/broken-link" />
                  </Flex>
                )}

                <Box>
                  <Text fontWeight={"bold"}>{cast.name}</Text>
                  <Text>{cast.character}</Text>
                  {cast.roles && cast.roles.length > 0 && (
                    <Box>
                      <Text>{cast.roles[0].character}</Text>
                      <Text>{`${cast.roles[0].episode_count} Episodes`}</Text>
                    </Box>
                  )}
                </Box>
              </Flex>
            ))}
          </Box>
          <Box>
            {slicedCrew?.map((crew) => (
              <Flex key={crew.id} py={2}>
                <Box>
                  <Flex gap={3}>
                    {crew.profile_path ? (
                      <Box maxW={"35%"}>
                        <Image
                          src={`${baseUrl}${crew.profile_path}`}
                          alt="crew-picture"
                          width={200}
                          height={200}
                        />
                      </Box>
                    ) : (
                      <Flex
                        w={130}
                        h={190}
                        bg="gray.200"
                        style={{
                          borderTopLeftRadius: "5.2px",
                          borderTopRightRadius: "5.2px",
                        }}
                        py={2}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar size="lg" src="https://bit.ly/broken-link" />
                      </Flex>
                    )}

                    <Box>
                      <Text fontWeight={"bold"}>{crew.name}</Text>
                      <Text>{crew.job}</Text>
                      {crew.jobs && crew.jobs.length > 0 && (
                        <Text>{crew.jobs[0].job}</Text>
                      )}
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Box>
        </Flex>
        <Flex mt={5} justifyContent="space-around" alignItems="center">
          <Button
            colorScheme="red"
            variant="outline"
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            PREVIOUS
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            onClick={nextPage}
            disabled={endIdx >= castDetails.length}
          >
            NEXT
          </Button>
        </Flex>
      </Box>
      <FooterCmp />
    </Container>
  );
};

export default CastPage;
