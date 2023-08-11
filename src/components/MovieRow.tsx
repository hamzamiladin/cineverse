import { Box, Text, Flex } from "@chakra-ui/react";
import { Movie } from "../../typings";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./styles/swiper.module.css";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { baseUrl } from "@/constants/movie";

interface Props {
  movies: Movie[];
}

const MovieRow = ({ movies }: Props) => {
  return (
    <Box w={"80vw"}>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((movie, idx) => (
          <SwiperSlide
            key={idx}
            className={style.swiperSlide}
            style={{
              backgroundImage: `url(${baseUrl}${movie?.poster_path})`,
              backgroundSize: "cover",
              minHeight: "44vh",
              minWidth: "13vw",
            }}
          >
            {/* <Text color={"#fff"} fontWeight={700} fontSize={"lg"}>
              {movie.original_title || movie.title}
            </Text> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MovieRow;
