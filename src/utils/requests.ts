const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const requests = {
  /* searchMovies: `${BASE_URL}/search/movie?{QUERY}&include_adult=false&language=en-US&page=1`, */
  //get latest movies banner
  getCineverseOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=2`,
  getTrendingMovies: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US?`,
  getTrendingSeries: `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US?`,
  getPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US?`,
  getUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US?`,
  getTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US?`,
  getAction: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  getComedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  getRomance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  getDrama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  getAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  getAdventure: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  getHorror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  /* series section */
  getLatestSeries: `${BASE_URL}/tv/latest?api_key=${API_KEY}&language=en-US?`,
  getDocSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,
  getActionSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759`,
  getRealitySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10764`,
  getKidSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10762`,
  getFamilySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10751`,

  /* authentication */
  getRequestToken: `${BASE_URL}/authentication/token/new?api_key=${API_KEY}&language=en-US`,
  /* ask user for permission */
  // https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}

  /* movie casts - requires movie id */
  /* getMovieCasts: `${BASE_URL}/movie/{MOVIE_ID}?api_key=${API_KEY}&language=en-US`, */
};

export default requests;
