import { Box, Text, Flex } from "@chakra-ui/react";
import { Movie, SeriesDetails } from "../../typings";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./styles/swiper.module.css";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { baseUrl } from "@/constants/movie";
import Link from "next/link";

interface Props {
  movies: (Movie | SeriesDetails)[];
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
          <Link href={`/browse/details/${(movie as Movie).title}}`} key={idx}>
            <SwiperSlide
              className={style.swiperSlide}
              style={{
                backgroundImage: `url(${baseUrl}${movie?.poster_path})`,
                backgroundSize: "cover",
                height: "44vh",
                width: "13vw",
              }}
            />
          </Link>
        ))}
        {movies.map((series, idx) => (
          <Link
            href={`/browse/details/${(series as SeriesDetails).name}`}
            key={idx}
          >
            <SwiperSlide
              className={style.swiperSlide}
              style={{
                backgroundImage: `url(${baseUrl}${series?.poster_path})`,
                backgroundSize: "cover",
                height: "44vh",
                width: "13vw",
              }}
            />
          </Link>
        ))}
      </Swiper>
    </Box>
  );
};

export default MovieRow;
