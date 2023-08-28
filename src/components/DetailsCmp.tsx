import {
  Box,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { SeriesDetails, MovieDetails } from "../../typings";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";

interface Props {
  movieDetails: MovieDetails;
  seriesDetails: SeriesDetails;
  children?: any;
}

const DetailsCmp = ({ movieDetails, seriesDetails }: Props) => {
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
            <Text fontStyle="italic">{movieDetails?.tagline}</Text>
            <UnorderedList
              display={"flex"}
              flexDir="row"
              listStyleType="none"
              gap={5}
            >
              {movieDetails?.genres?.map((genre) => (
                <ListItem key={genre.id}>{genre.name}</ListItem>
              ))}
            </UnorderedList>

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
            <UnorderedList
              display={"flex"}
              flexDir="row"
              listStyleType="none"
              gap={5}
            >
              {seriesDetails?.genres?.map((genre) => (
                <ListItem key={genre.id}>{genre.name}</ListItem>
              ))}
            </UnorderedList>
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
};

export default DetailsCmp;
