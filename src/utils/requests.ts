const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const requests = {
  /* searchMovies: `${BASE_URL}/search/movie?{QUERY}&include_adult=false&language=en-US&page=1`, */
  //get latest movies banner
  getCineverseOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&append_to_response=videos`,
  getTrendingMovies: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  getTrendingSeries: `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  getPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  getUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  getTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  getAction: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28&append_to_response=videos`,
  getComedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35&append_to_response=videos`,
  getRomance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749&append_to_response=videos`,
  getDrama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18&append_to_response=videos`,
  getAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16&append_to_response=videos`,
  getAdventure: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12&append_to_response=videos`,
  getHorror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27&append_to_response=videos`,
  /* series section */
  getPopularSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&append_to_response=videos`,
  getDocSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99&append_to_response=videos`,
  getActionSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759&append_to_response=videos`,
  getRealitySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10764&append_to_response=videos`,
  getKidSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10762&append_to_response=videos`,
  getFamilySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10751&append_to_response=videos`,
  getMysterySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648&append_to_response=videos`,

  /* authentication */
  getRequestToken: `${BASE_URL}/authentication/token/new?api_key=${API_KEY}&language=en-US`,
  /* ask user for permission */
  // https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}

  /* movie casts - requires movie id */
  /* getMovieCasts: `${BASE_URL}/movie/{MOVIE_ID}?api_key=${API_KEY}&language=en-US`, */
};

export default requests;
