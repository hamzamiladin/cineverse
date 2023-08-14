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
    <Box w={{ base: "97vw", md: "80vw" }}>
      <Swiper
        slidesPerView={2}
        spaceBetween={7}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
        injectStyles={[
          `.swiper-button-next .swiper-button-prev {
            color: red;
            border: 2px solid black;
          }`,
        ]}
      >
        {movies.map((movie, idx) => (
          <SwiperSlide
            key={idx}
            className={style.swiperSlide}
            style={{
              backgroundImage: `url(${baseUrl}${movie?.poster_path})`,
              backgroundSize: "cover",
              height: "44vh",
              width: "13vw",
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
