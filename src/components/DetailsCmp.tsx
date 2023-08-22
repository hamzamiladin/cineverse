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
      <Box>
        <Text>{movieDetails.title}</Text>
        <Image
          src={`${baseUrl}${movieDetails.backdrop_path}`}
          alt="backdrop-picture"
          width={1280}
          height={720}
        />
        <Text>{movieDetails.overview}</Text>
      </Box>
    );
  }

  if (seriesDetails) {
    return (
      <Box>
        <Text>{seriesDetails.name}</Text>
        <Image
          src={`${baseUrl}${seriesDetails.backdrop_path}`}
          alt="backdrop-picture"
          width={1280}
          height={720}
        />
        <Text>{seriesDetails.overview}</Text>
      </Box>
    );
  }

  return <>{children}</>;
};

export default DetailsCmp;
