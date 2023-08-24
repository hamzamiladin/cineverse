import { Box, Text } from "@chakra-ui/react";
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
      <Box position="relative">
        <Text
          textTransform="uppercase"
          fontSize={{ base: "3xl", md: "4xl" }}
          whiteSpace="nowrap"
          m={0}
        >
          {movieDetails?.title}
        </Text>
        <Box
          backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.5) calc((50vw - 170px) - 340px), rgba(0, 0, 0, 0.84) 50%, rgba(0, 0, 0, 0.84) 100%), url(${baseUrl}${seriesDetails?.backdrop_path})`}
          backgroundSize="cover"
          height="100vh"
          width="90vw"
          position="relative"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            textAlign="center"
          >
            <Text fontSize={{ base: "2xl", md: "xl" }} pt={4}>
              Overview
            </Text>
            <Text fontSize={{ base: "", md: "lg" }}>
              {movieDetails?.overview}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }

  if (seriesDetails) {
    return (
      <Box position="relative">
        <Text
          textTransform="uppercase"
          fontSize={{ base: "3xl", md: "4xl" }}
          whiteSpace="nowrap"
          m={0}
        >
          {seriesDetails?.name}
        </Text>
        <Box
          backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.5) calc((50vw - 170px) - 340px), rgba(0, 0, 0, 0.84) 50%, rgba(0, 0, 0, 0.84) 100%), url(${baseUrl}${seriesDetails?.backdrop_path})`}
          backgroundSize="cover"
          height="100vh"
          width="90vw"
          position="relative"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            textAlign="center"
          >
            <Text fontSize={{ base: "2xl", md: "xl" }} pt={4}>
              Overview
            </Text>
            <Text fontSize={{ base: "", md: "lg" }}>
              {seriesDetails?.overview}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }

  return <>{children}</>;
};

export default DetailsCmp;
