import { Box } from "@chakra-ui/react";
import { Movie, SeriesDetails } from "../../typings";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./styles/swiper.module.css";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { baseUrl } from "@/constants/movie";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  movies?: Movie[];
  series?: SeriesDetails[];
}

const MovieRow = ({ movies, series }: Props) => {
  const router = useRouter();

  const movieType = "movie";
  const seriesType = "tv";

  const handleClick = (item: Movie | SeriesDetails) => {
    if ("title" in item) {
      router.push(
        `/browse/details/${movieType}/${encodeURIComponent(item.title)
          .split(" ")
          .join("-")}/${item.id}`
      );
    } else if ("name" in item && item.name) {
      router.push(
        `/browse/details/${seriesType}/${encodeURIComponent(item.name)
          .split(" ")
          .join("-")}/${item.id}`
      );
    }
  };

  return (
    <Box w={{ base: "97vw", md: "87vw" }}>
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
        {movies?.map((movie, idx) => (
          <SwiperSlide
            key={`movie-${movie.id}-${idx}`}
            className={style.swiperSlide}
            style={{
              backgroundImage: `url(${baseUrl}${movie?.poster_path})`,
              backgroundSize: "cover",
              height: "44vh",
              width: "13vw",
            }}
            onClick={() => handleClick(movie)}
          />
        ))}
        {series?.map((seriesItem, idx) => (
          <SwiperSlide
            key={`series-${seriesItem.id}-${idx}`}
            className={style.swiperSlide}
            style={{
              backgroundImage: `url(${baseUrl}${seriesItem?.poster_path})`,
              backgroundSize: "cover",
              height: "44vh",
              width: "13vw",
            }}
            onClick={() => handleClick(seriesItem)}
          />
        ))}
      </Swiper>
    </Box>
  );
};

export default MovieRow;
