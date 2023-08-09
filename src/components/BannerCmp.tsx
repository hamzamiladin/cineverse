import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "../../typings";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { baseUrl } from "@/constants/movie";

interface Props {
  cineverseOriginals: Movie[];
}

const Banner = ({ cineverseOriginals }: Props) => {
  const [showMovie, setShowMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setShowMovie(
      cineverseOriginals[Math.floor(Math.random() * cineverseOriginals.length)]
    )
  }, [cineverseOriginals]);

  return (
    <>
      <Box>
        <Box>
          <Image
            src={`${baseUrl}${
              showMovie?.backdrop_path || showMovie?.poster_path
            }`}
            alt="movie poster"
            width={1280}
            height={900}
          />
        </Box>
        <Box>
          <Text>Title</Text>
          <Text>Overview</Text>
        </Box>
        <Box>
          <Button>Play</Button>
          <Button>More Info</Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
