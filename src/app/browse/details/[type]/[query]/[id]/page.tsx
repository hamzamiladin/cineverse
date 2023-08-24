"use client";
import SearchCmp from "@/components/SearchCmp";
import { Box, Container } from "@chakra-ui/react";
import { cache } from "react";
import { MovieDetails, SeriesDetails } from "../../../../../../../typings";
import { useState, useEffect } from "react";
import FooterCmp from "@/components/FooterCmp";
import { useParams } from "next/navigation";
import DetailsCmp from "@/components/DetailsCmp";

interface Props {
  movieDetails: MovieDetails;
  seriesDetails: SeriesDetails;
}

const DetailsPage = ({ movieDetails, seriesDetails }: Props) => {
  const { id, type } = useParams();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const getMediaDetails = cache(async (id: string, type: string) => {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    const data = await res.json();
    return data;
  });

  const [mediaResult, setMediaResult] = useState<
    MovieDetails | SeriesDetails | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getMediaDetails(id, type);
      setMediaResult(results);
    };
    fetchData();
  }, [getMediaDetails, id, type]);

  return (
    <Container bg={"#212121"} maxW={""} centerContent color="#fff">
      <SearchCmp />
      <Box mt={7}>
        {/* Pass the mediaResult to DetailsCmp */}
        {mediaResult && (
          <DetailsCmp
            movieDetails={type === "movie" ? mediaResult : movieDetails}
            seriesDetails={type === "tv" ? mediaResult : seriesDetails}
          />
        )}
      </Box>
      <FooterCmp />
    </Container>
  );
};

export default DetailsPage;
