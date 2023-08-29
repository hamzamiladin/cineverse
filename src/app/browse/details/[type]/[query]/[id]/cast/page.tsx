"use client";
import SearchCmp from "@/components/SearchCmp";
import { Box, Container, Text, Flex, Avatar } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { MovieCast, MovieCrew } from "../../../../../../../../typings";
import { cache, useState, useEffect } from "react";
import FooterCmp from "@/components/FooterCmp";
import { baseUrl } from "@/constants/movie";
import Image from "next/image";
import useSWR from "swr";

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

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCast(id, type);
      setCastDetails(result.cast);
      setCrewDetails(result.crew);
    };
    fetchData();
  }, [getCast, id, type]);

  return (
    <Container bg={"#212121"} maxW={""} centerContent color="#fff">
      <SearchCmp />
      <Box mt={7} w={"85%"}>
        <Flex justifyContent={"space-between"}>
          <Box>
            {castDetails?.map((cast) => (
              <Flex key={cast.id} gap={3} py={2}>
                {/* fix image here */}
                {cast.profile_path ? (
                  <Box maxW={"35%"}>
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
            {crewDetails?.map((crew) => (
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
      </Box>
      <FooterCmp />
    </Container>
  );
};

export default CastPage;
