import {
  Box,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { SeriesDetails, MovieDetails, MovieCrew } from "../../typings";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";

interface Props {
  movieDetails: MovieDetails;
  seriesDetails: SeriesDetails;
  productionCrew: MovieCrew[];
}

const DetailsCmp = ({ movieDetails, seriesDetails, productionCrew }: Props) => {
  const sliceCrew = productionCrew.slice(0, 2);

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
          fontSize={{ base: "xl", md: "3xl" }}
          whiteSpace="nowrap"
          my={2}
        >
          {`${movieDetails?.title} (${year})`}
        </Text>
        <Grid
          backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.5) calc((50vw - 170px) - 340px), rgba(0, 0, 0, 0.84) 50%, rgba(0, 0, 0, 0.84) 100%), url(${baseUrl}${movieDetails?.backdrop_path})`}
          backgroundSize="cover"
          bgRepeat={"no-repeat"}
          width={"100%"}
          h={"50vh"}
          p={8}
          templateColumns="repeat(4, 1fr)"
        >
          <GridItem>
            <Image
              src={`${baseUrl}${movieDetails?.poster_path}`}
              alt="poster"
              width={200}
              height={200}
            />
          </GridItem>
          <GridItem colSpan={3}>
            <Text fontStyle="italic">{movieDetails?.tagline}</Text>
            <UnorderedList
              display={"flex"}
              flexDir="row"
              listStyleType="none"
              gap={5}
            >
              {movieDetails?.genres?.map((genre, idx) => (
                <ListItem key={idx}>{genre.name}</ListItem>
              ))}
            </UnorderedList>

            <Text fontSize={{ base: "2xl", md: "xl" }} pt={4}>
              Overview
            </Text>
            <Text fontSize={{ base: "", md: "lg" }}>
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
          fontSize={{ base: "xl", md: "3xl" }}
          whiteSpace="nowrap"
          my={2}
        >
          {`${seriesDetails?.name} (${seriesYear})`}
        </Text>
        <Grid
          backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.5) calc((50vw - 170px) - 340px), rgba(0, 0, 0, 0.84) 50%, rgba(0, 0, 0, 0.84) 100%), url(${baseUrl}${seriesDetails?.backdrop_path})`}
          backgroundSize="cover"
          bgRepeat={"no-repeat"}
          width={"100%"}
          h={"50vh"}
          p={8}
          templateColumns="repeat(4, 1fr)"
        >
          <GridItem>
            <Image
              src={`${baseUrl}${seriesDetails?.poster_path}`}
              alt="poster"
              width={200}
              height={200}
            />
          </GridItem>
          <GridItem colSpan={3}>
            <UnorderedList
              display={"flex"}
              flexDir="row"
              listStyleType="none"
              gap={5}
            >
              {seriesDetails?.genres?.map((genre, idx) => (
                <ListItem key={idx} fontSize={{ base: "", md: "md" }}>
                  {genre.name}
                </ListItem>
              ))}
            </UnorderedList>
            <Text fontSize={{ base: "2xl", md: "xl" }} pt={4}>
              Overview
            </Text>
            <Text fontSize={{ base: "", md: "lg" }}>
              {seriesDetails?.overview}
            </Text>
            <UnorderedList display={"flex"} gap={8} listStyleType="none" pt={4}>
              {seriesDetails.created_by && seriesDetails.created_by.length > 0
                ? seriesDetails.created_by.map((crew, idx) => (
                    <ListItem key={idx}>
                      <Text
                        fontSize={{ base: "", md: "lg" }}
                        fontWeight={"bold"}
                      >
                        {crew.name}
                      </Text>
                      <Text fontSize={{ base: "", md: "lg" }}>Creator</Text>
                    </ListItem>
                  ))
                : seriesDetails.aggregate_credits &&
                  seriesDetails.aggregate_credits.crew
                ? seriesDetails.aggregate_credits.crew.map((crew, idx) => (
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
          </GridItem>
        </Grid>
      </Box>
    );
  }
};

export default DetailsCmp;
