import requests from "./requests";

export const fetchCineverseOriginals = async () => {
  const res = await fetch(requests.getCineverseOriginals);
  const data = await res.json();
  return data.results;
};

export const fetchTrendingMovies = async () => {
  const res = await fetch(requests.getTrendingMovies);
  const data = await res.json();
  return data.results;
};

export const fetchTrendingSeries = async () => {
  const res = await fetch(requests.getTrendingSeries);
  const data = await res.json();
  return data.results;
};

export const fetchPopular = async () => {
  const res = await fetch(requests.getPopular);
  const data = await res.json();
  return data.results;
};

export const fetchUpcoming = async () => {
  const res = await fetch(requests.getUpcoming);
  const data = await res.json();
  return data.results;
};

export const fetchTopRated = async () => {
  const res = await fetch(requests.getTopRated);
  const data = await res.json();
  return data.results;
};

export const fetchAction = async () => {
  const res = await fetch(requests.getAction);
  const data = await res.json();
  return data.results;
};

export const fetchComedy = async () => {
  const res = await fetch(requests.getComedy);
  const data = await res.json();
  return data.results;
};

export const fetchRomance = async () => {
  const res = await fetch(requests.getRomance);
  const data = await res.json();
  return data.results;
};

export const fetchDrama = async () => {
  const res = await fetch(requests.getDrama);
  const data = await res.json();
  return data.results;
};

export const fetchAnimation = async () => {
  const res = await fetch(requests.getAnimation);
  const data = await res.json();
  return data.results;
};

export const fetchAdventure = async () => {
  const res = await fetch(requests.getAdventure);
  const data = await res.json();
  return data.results;
};

export const fetchHorror = async () => {
  const res = await fetch(requests.getHorror);
  const data = await res.json();
  return data.results;
};

export const fetchPopularSeries = async () => {
  const res = await fetch(requests.getPopularSeries);
  const data = await res.json();
  return data.results;
};

export const fetchDocSeries: any = async () => {
  const res = await fetch(requests.getDocSeries);
  const data = await res.json();
  return data.results;
};

export const fetchActionSeries = async () => {
  const res = await fetch(requests.getActionSeries);
  const data = await res.json();
  return data.results;
};

export const fetchRealitySeries = async () => {
  const res = await fetch(requests.getRealitySeries);
  const data = await res.json();
  return data.results;
};

export const fetchKidSeries = async () => {
  const res = await fetch(requests.getKidSeries);
  const data = await res.json();
  return data.results;
};

export const fetchFamilySeries = async () => {
  const res = await fetch(requests.getFamilySeries);
  const data = await res.json();
  return data.results;
};

export const fetchMysterySeries = async () => {
  const res = await fetch(requests.getMysterySeries);
  const data = await res.json();
  return data.results;
};
