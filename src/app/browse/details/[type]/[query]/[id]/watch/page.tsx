"use client";

import { Box, Container, Text, Button, Flex } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Video } from "../../../../../../../../typings";
import { cache, useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const FooterCmp = dynamic(() => import("@/components/FooterCmp"));
const SearchCmp = dynamic(() => import("@/components/SearchCmp"));

interface Props {
  cineverseVideo: Video[];
}

const PlayTrailer = ({ cineverseVideo }: Props) => {
  const { query, id, type } = useParams();
  const router = useRouter();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const backToPrev = () => {
    router.back;
  };

  const goHome = () => {
    router.push(`/browse`);
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const fetchVideo = cache(async (type: string, id: string) => {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`
    );
    const data = await res.json();
    return data.results;
  });

  const [videoResults, setVideoResults] = useState<Video[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchVideo(type, id);
      setVideoResults(result);
    };
    fetchData();
  }, [fetchVideo, id, type]);

  return (
    <Container
      bg={"#212121"}
      maxW={""}
      centerContent
      color="#fff"
      overflow={"hidden"}
    >
      <SearchCmp />
      <Flex flexDir="row" my={4}>
        <Button onClick={backToPrev}>Previous</Button>
        <Button onClick={goHome}>Home</Button>
      </Flex>
      <Box mb={3}>
        <Text>Now Playing {`"${decodeURIComponent(query)}"`}</Text>
      </Box>
      <Box w="100%" h="100%">
        <YouTube
          opts={opts}
          onReady={onPlayerReady}
          videoId={videoResults[1]?.key}
          style={{ height: "67vh", pointerEvents: "auto" }}
        />
      </Box>
      <FooterCmp />
    </Container>
  );
};

export default PlayTrailer;
