import {
  Box,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Text,
  HStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { SeriesDetails, MovieDetails, MovieCrew } from "../../typings";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";
import "./styles/buttons.css";

interface Props {
  movieDetails: MovieDetails;
  seriesDetails: SeriesDetails;
  productionCrew: MovieCrew[];
  playMovie: () => void;
}

const DetailsCmp = ({
  movieDetails,
  seriesDetails,
  productionCrew,
  playMovie,
}: Props) => {
  const sliceCrew = productionCrew.slice(0, 2);

  const movieRuntime = (time: number) => {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    return `${hours}h ${minutes}m`;
  };

  if (movieDetails) {
    const date = movieDetails.release_date;
    let year;
    if (date) {
      const releaseDate = new Date(date);
      year = releaseDate.getFullYear();
    }
    return (
      <Box>
        <Text
          textTransform="uppercase"
          fontSize={{ base: "md", md: "3xl" }}
          py={2}
        >
          {`${movieDetails?.title} (${year})`}
        </Text>
        <Grid
          backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.5) calc((50vw - 170px) - 340px), rgba(0, 0, 0, 0.84) 50%, rgba(0, 0, 0, 0.84) 100%), url(${baseUrl}${movieDetails?.backdrop_path})`}
          backgroundSize="cover"
          bgRepeat={"no-repeat"}
          width={"100%"}
          h={{ base: "70vh", md: "50vh" }}
          py={8}
          px={{ base: 3, md: 8 }}
          templateColumns="repeat(4, 1fr)"
        >
          <GridItem display={{ base: "none", md: "grid" }}>
            <Image
              src={`${baseUrl}${movieDetails?.poster_path}`}
              alt="poster"
              width={200}
              height={200}
            />
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 3 }}>
            <Text fontStyle="italic">{movieDetails?.tagline}</Text>
            <HStack>
              <UnorderedList
                display={"flex"}
                flexDir="row"
                flexWrap="wrap"
                listStyleType="none"
                gap={5}
              >
                {movieDetails?.genres?.map((genre, idx) => (
                  <ListItem key={idx}>{genre.name}</ListItem>
                ))}
              </UnorderedList>
              <Text>|</Text>
              <Box display={{ base: "none", md: "block" }}>
                <Text>
                  {movieDetails?.runtime
                    ? movieRuntime(movieDetails.runtime)
                    : "N/A"}
                </Text>
              </Box>
            </HStack>
            <Box display={{ md: "none" }}>
              <Text>
                {movieDetails?.runtime
                  ? movieRuntime(movieDetails.runtime)
                  : "N/A"}
              </Text>
            </Box>
            <Text fontSize={{ base: "lg", md: "xl" }} pt={4}>
              Overview
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
              {movieDetails?.overview}
            </Text>

            <UnorderedList display={"flex"} gap={8} listStyleType="none" pt={4}>
              {productionCrew &&
                sliceCrew.map((crew) => (
                  <ListItem key={crew.id}>
                    <Text fontSize={{ base: "", md: "lg" }} fontWeight="bold">
                      {crew.name}
                    </Text>
                    <Text fontSize={{ base: "", md: "lg" }}>{crew.job}</Text>
                  </ListItem>
                ))}
            </UnorderedList>
            <Button
              className="play-btn"
              px={5}
              size={{ base: "sm", md: "md" }}
              mt={2}
              onClick={playMovie}
            >
              Play
            </Button>
          </GridItem>
        </Grid>
      </Box>
    );
  }

  if (seriesDetails) {
    const seriesDate = seriesDetails.first_air_date;
    let seriesYear;

    if (seriesDate) {
      const releaseDate = new Date(seriesDate);
      seriesYear = releaseDate.getFullYear();
    }
    return (
      <Box>
        <Text
          textTransform="uppercase"
          fontSize={{ base: "md", md: "3xl" }}
          py={2}
        >
          {`${seriesDetails?.name} (${seriesYear})`}
        </Text>
        <Grid
          backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.5) calc((50vw - 170px) - 340px), rgba(0, 0, 0, 0.84) 50%, rgba(0, 0, 0, 0.84) 100%), url(${baseUrl}${seriesDetails?.backdrop_path})`}
          backgroundSize="cover"
          bgRepeat={"no-repeat"}
          width={"100%"}
          h={{ base: "69vh", md: "56vh" }}
          py={8}
          px={{ base: 4, md: 8 }}
          templateColumns="repeat(4, 1fr)"
        >
          <GridItem display={{ base: "none", md: "grid" }}>
            <Image
              src={`${baseUrl}${seriesDetails?.poster_path}`}
              alt="poster"
              width={200}
              height={200}
            />
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 3 }}>
            <UnorderedList
              display={"flex"}
              flexDir="row"
              listStyleType="none"
              gap={5}
            >
              {seriesDetails?.genres?.map((genre, idx) => (
                <ListItem key={idx} fontSize={{ base: "", md: "md" }}>
                  <Text>{genre.name}</Text>
                </ListItem>
              ))}
            </UnorderedList>
            <Flex flexDir="column" mt={2}>
              <Text>
                Seasons {`(${seriesDetails?.number_of_seasons || "N/A"})`}
              </Text>
              <Text>
                All Episodes {`(${seriesDetails?.number_of_episodes || "N/A"})`}
              </Text>
            </Flex>

            <Text fontSize={{ base: "lg", md: "xl" }} pt={4}>
              Overview
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
              {seriesDetails?.overview}
            </Text>
            <UnorderedList display={"flex"} gap={8} listStyleType="none" pt={4}>
              {seriesDetails.created_by && seriesDetails.created_by.length > 0
                ? seriesDetails.created_by.map((crew, idx) => (
                    <ListItem key={idx}>
                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight={"bold"}
                      >
                        {crew.name}
                      </Text>
                      <Text fontSize={{ base: "md", md: "lg" }}>Creator</Text>
                    </ListItem>
                  ))
                : seriesDetails.aggregate_credits &&
                  seriesDetails.aggregate_credits.crew
                ? seriesDetails.aggregate_credits.crew
                    .slice(0, 2)
                    .map((crew, idx) => (
                      <ListItem key={idx}>
                        <Text
                          fontSize={{ base: "", md: "lg" }}
                          fontWeight={"bold"}
                        >
                          {crew.name}
                        </Text>
                        <Text fontSize={{ base: "", md: "lg" }}>
                          {crew.jobs && crew.jobs.length > 0
                            ? crew.jobs[0].job
                            : "Creator"}
                        </Text>
                      </ListItem>
                    ))
                : null}
            </UnorderedList>
            <Button
              className="play-btn"
              px={5}
              size={{ base: "sm", md: "md" }}
              mt={2}
              onClick={playMovie}
            >
              Play
            </Button>
          </GridItem>
        </Grid>
      </Box>
    );
  }
};

export default DetailsCmp;
