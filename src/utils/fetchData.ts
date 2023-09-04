import { cache } from "react";
import requests from "./requests";

const fetchData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};

export const fetchCineverseOriginals = cache(() =>
  fetchData(requests.getCineverseOriginals)
);

export const fetchTrendingMovies = cache(() =>
  fetchData(requests.getTrendingMovies)
);

export const fetchTrendingSeries = cache(() =>
  fetchData(requests.getTrendingSeries)
);

export const fetchPopular = cache(() => fetchData(requests.getPopular));

export const fetchUpcoming = cache(() => fetchData(requests.getUpcoming));

export const fetchTopRated = cache(() => fetchData(requests.getTopRated));

export const fetchAction = cache(() => fetchData(requests.getAction));

export const fetchComedy = cache(() => fetchData(requests.getComedy));

export const fetchRomance = cache(() => fetchData(requests.getRomance));

export const fetchDrama = cache(() => fetchData(requests.getDrama));

export const fetchAnimation = cache(() => fetchData(requests.getAnimation));

export const fetchAdventure = cache(() => fetchData(requests.getAdventure));

export const fetchHorror = cache(() => fetchData(requests.getHorror));

export const fetchPopularSeries = cache(() =>
  fetchData(requests.getPopularSeries)
);

export const fetchDocSeries = cache(() => fetchData(requests.getDocSeries));

export const fetchActionSeries = cache(() =>
  fetchData(requests.getActionSeries)
);

export const fetchRealitySeries = cache(() =>
  fetchData(requests.getRealitySeries)
);

export const fetchKidSeries = cache(() => fetchData(requests.getKidSeries));

export const fetchFamilySeries = cache(() =>
  fetchData(requests.getFamilySeries)
);

export const fetchMysterySeries = cache(() =>
  fetchData(requests.getMysterySeries)
);
