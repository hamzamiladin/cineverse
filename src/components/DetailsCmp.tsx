import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { SeriesDetails, MovieDetails } from "../../typings";
import { ReactNode } from "react";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";

interface Props {
  movieDetails: MovieDetails;
  seriesDetails: SeriesDetails;
  children?: ReactNode;
}

const DetailsCmp = ({ movieDetails, seriesDetails, children }: Props) => {
  if (movieDetails) {
    return (
      <Box>
        <Text
          textTransform="uppercase"
          fontSize={{ base: "xl", md: "3xl" }}
          whiteSpace="nowrap"
          my={2}
        >
          {movieDetails?.title}
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
            <Text fontSize={{ base: "2xl", md: "xl" }} pt={4}>
              Overview
            </Text>
            <Text fontSize={{ base: "", md: "lg" }}>
              {movieDetails?.overview}
            </Text>
          </GridItem>
        </Grid>
      </Box>
    );
  }

  if (seriesDetails) {
    return (
      <Box>
        <Text
          textTransform="uppercase"
          fontSize={{ base: "xl", md: "3xl" }}
          whiteSpace="nowrap"
          my={2}
        >
          {seriesDetails?.name}
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
            
            <Text fontSize={{ base: "2xl", md: "xl" }} pt={4}>
              Overview
            </Text>
            <Text fontSize={{ base: "", md: "lg" }}>
              {seriesDetails?.overview}
            </Text>
          </GridItem>
        </Grid>
      </Box>
    );
  }

  return <>{children}</>;
};

export default DetailsCmp;
