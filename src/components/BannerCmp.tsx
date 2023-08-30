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
    <Box mt={12} w="90%">
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={false}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
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
                <Button>Play</Button>
                <Button>More Info</Button>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
