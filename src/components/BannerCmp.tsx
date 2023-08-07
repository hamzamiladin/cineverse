import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "../../typings";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

interface IProps {
  movieBanner: Movie[];
}

const Banner = ({ movieBanner }: IProps) => {
  const [showMovie, setShowMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setShowMovie(movieBanner[Math.floor(Math.random() * movieBanner.length)]);
  }, [movieBanner]);

  return (
    <>
      <Box>
        <Box>{/* Banner Image */}</Box>
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
