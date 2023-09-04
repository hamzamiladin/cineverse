import { Movie, Video } from "../../typings";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { baseUrl } from "@/constants/movie";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./styles/swiper.module.css";
import YoutubeCmp from "./YoutubeCmp";
import { cache, useState, useEffect } from "react";
import Link from "next/link";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  cineverseOriginals: Movie[];
}

const Banner = ({ cineverseOriginals }: Props) => {
  const slicedMovies = cineverseOriginals.slice(0, 10);
  const [showVideo, setShowVideo] = useState<Video | null>(null);
  const [movieVideos, setMovieVideos] = useState<Record<number, Video[]>>({});

  const handleClick = (video: Video) => {
    setShowVideo(video);
  };

  const handleClose = () => {
    setShowVideo(null);
  };

  const handleTitle = (word: string) => {
    return encodeURIComponent(word.split(" ").join("-").toLowerCase());
  };

  useEffect(() => {
    const fetchMovieVideos = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

      const videos: Record<number, Video[]> = {};

      for (const movie of slicedMovies) {
        const res = await fetch(
          `${baseUrl}/movie/${movie.id}/videos?api_key=${apiKey}`
        );

        if (res.ok) {
          const data = await res.json();
          videos[movie.id] = data.results;
        }
      }
      setMovieVideos(videos);
    };
    fetchMovieVideos();
  }, [slicedMovies]);

  return (
    <Box mt={12} w="90%">
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slicedMovies.map((movie, idx) => (
          <SwiperSlide
            key={idx}
            className={style.swiperSlide}
            style={{
              backgroundImage: `url(${baseUrl}${
                movie.backdrop_path || movie.poster_path
              })`,
              backgroundSize: "cover",
              minHeight: "60vh",
            }}
          >
            <Box
              display={"flex"}
              flexDir={"column"}
              pos={{ md: "absolute" }}
              bottom={0}
              p={8}
            >
              <Text color={"#fff"} fontWeight={700} fontSize={"2xl"}>
                {movie.original_title || movie.title}
              </Text>
              <Text color={"#fff"} fontSize={"lg"}>
                {movie.overview}
              </Text>
              <Flex gap={6}>
                <Button
                  onClick={() => {
                    if (showVideo) {
                      handleClose();
                    } else {
                      handleClick(movieVideos[movie.id]?.[0]);
                    }
                  }}
                >
                  {showVideo ? "CANCEL" : "PLAY"}
                </Button>
                <Link
                  href={`/browse/details/movie/${handleTitle(movie.title)}/${
                    movie.id
                  }`}
                >
                  <Button>More Info</Button>
                </Link>
              </Flex>
              {showVideo && (
                <YoutubeCmp key={showVideo.key} cineverseVideos={showVideo} />
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
