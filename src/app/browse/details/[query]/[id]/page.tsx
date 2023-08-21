"use client";
import SearchCmp from "@/components/SearchCmp";
import { Box, Container, Text } from "@chakra-ui/react";
import { cache } from "react";
import { MovieDetails, SeriesDetails } from "../../../../../../typings";
import Image from "next/image";
import { useState, useEffect } from "react";
import { baseUrl } from "@/constants/movie";
import FooterCmp from "@/components/FooterCmp";
import { useParams } from "next/navigation";

interface Props {
  movieDetails: (MovieDetails | SeriesDetails)[];
}

const DetailsPage = ({ movieDetails }: Props) => {
  const movieId = useParams().id;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const getMovieDetails = cache(async (id: string) => {
    if (id) {
      const res = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
      );
      const data = await res.json();
      return data;
    } else {
      const res = await fetch(
        `${BASE_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos`
      );
      const data = await res.json();
      return data;
    }
  });

  const [detailResults, setDetailResults] = useState<
    (MovieDetails | SeriesDetails)[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getMovieDetails(movieId);
      setDetailResults(results);
    };
    fetchData();
  });

  return (
    <Container bg={"#212121"} maxW={""} centerContent color="#fff">
      <SearchCmp />
      {/* content */}
      <Box mt={7}>
        {detailResults && (
          <Box>
            <Image
              src={`${baseUrl}${detailResults[0]?.backdrop_path}`}
              alt="backdrop picture"
              width={1280}
              height={720}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default DetailsPage;
