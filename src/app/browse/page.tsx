"use client";

import SearchCmp from "@/components/SearchCmp";
import { Box, Container } from "@chakra-ui/react";
import { Movie } from "../../../typings";
import Banner from "@/components/BannerCmp";
import useSWR from "swr";
import * as fetchers from "../../utils/fetchData";

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
  const { data: cineverseOriginals } = useSWR(
    "cineverseOriginals",
    fetchers.fetchCineverseOriginals
  );
  /* console.log(cineverseOriginals); */

  return (
    <Container bg={"#212121"} maxW={""} centerContent>
      <SearchCmp />
      <Banner cineverseOriginals={cineverseOriginals || []} />
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
