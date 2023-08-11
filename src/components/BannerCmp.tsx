import Image from "next/image";
import { Movie } from "../../typings";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { baseUrl } from "@/constants/movie";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./styles/swiper.module.css";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  cineverseOriginals: Movie[];
}

const Banner = ({ cineverseOriginals }: Props) => {
  const slicedMovies = cineverseOriginals.slice(0, 10);
  return (
    <Box mt={12} maxW={{ base: "80%", md: "70%" }}>
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={false}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slicedMovies.map((movie, idx) => (
          <SwiperSlide key={idx} className={style.swiperSlide}>
            <Image
              src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
              alt="movie poster"
              width={1280}
              height={800}
            />
            <Box>
              <Text color={"#fff"} fontWeight={700} fontSize={"3xl"}>
                {movie.original_title || movie.title}
              </Text>
              <Text color={"#fff"} fontSize={"xl"}>
                {movie.overview}
              </Text>
            </Box>
            <Flex gap={6}>
              <Button>Play</Button>
              <Button>More Info</Button>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
