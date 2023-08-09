"use client";

import SearchCmp from "@/components/SearchCmp";
import { Box, Container } from "@chakra-ui/react";
import { Movie } from "../../../typings";
import Banner from "@/components/BannerCmp";
import requests from "@/utils/requests";
import axios from "axios";
import { useEffect, useState } from "react";
import fetchData from "@/utils/fetchData";

interface Props {
  cineverseOriginals: Movie[];
  popularMovies: Movie[];
  trendingNow: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  kidsSeries: Movie[];
  romanceMovies: Movie[];
}

const Home: React.FC<Props> = () => {
  const [movieData, setMovieData] = useState({
    cineverseOriginals: [],
    popularMovies: [],
    trendingNow: [],
    actionMovies: [],
    comedyMovies: [],
    kidsSeries: [],
    romanceMovies: [],
  });

  useEffect(() => {
    async function getData() {
      try {
        const [
          cineverseOriginals,
          popularMovies,
          trendingNow,
          actionMovies,
          comedyMovies,
          kidsSeries,
          romanceMovies,
        ] = await fetchData();

        /* setMovieData({
          cineverseOriginals,
          popularMovies,
          trendingNow,
          actionMovies,
          comedyMovies,
          kidsSeries,
          romanceMovies,
        }); */
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getData();
  });
  console.log(movieData.cineverseOriginals);
  return (
    <Container bg={"#212121"} maxW={""} centerContent>
      <SearchCmp />
      <Banner cineverseOriginals={movieData.cineverseOriginals} />
      <Box mt={3}>
        {/* popular movies */}
        {/* trending now */}
        {/* action movies */}
        {/* comedy movies */}
        {/* kid series */}
        {/* romance movies */}
      </Box>
    </Container>
  );
};

export default Home;
