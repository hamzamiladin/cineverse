import { cache } from "react";
import requests from "./requests";

export const fetchCineverseOriginals = cache(async () => {
  const res = await fetch(requests.getCineverseOriginals);
  const data = await res.json();
  return data.results;
});

export const fetchTrendingMovies = cache(async () => {
  const res = await fetch(requests.getTrendingMovies);
  const data = await res.json();
  return data.results;
});

export const fetchTrendingSeries = cache(async () => {
  const res = await fetch(requests.getTrendingSeries);
  const data = await res.json();
  return data.results;
});

export const fetchPopular = cache(async () => {
  const res = await fetch(requests.getPopular);
  const data = await res.json();
  return data.results;
});

export const fetchUpcoming = cache(async () => {
  const res = await fetch(requests.getUpcoming);
  const data = await res.json();
  return data.results;
});

export const fetchTopRated = cache(async () => {
  const res = await fetch(requests.getTopRated);
  const data = await res.json();
  return data.results;
});

export const fetchAction = cache(async () => {
  const res = await fetch(requests.getAction);
  const data = await res.json();
  return data.results;
});

export const fetchComedy = cache(async () => {
  const res = await fetch(requests.getComedy);
  const data = await res.json();
  return data.results;
});

export const fetchRomance = cache(async () => {
  const res = await fetch(requests.getRomance);
  const data = await res.json();
  return data.results;
});

export const fetchDrama = cache(async () => {
  const res = await fetch(requests.getDrama);
  const data = await res.json();
  return data.results;
});

export const fetchAnimation = cache(async () => {
  const res = await fetch(requests.getAnimation);
  const data = await res.json();
  return data.results;
});

export const fetchAdventure = cache(async () => {
  const res = await fetch(requests.getAdventure);
  const data = await res.json();
  return data.results;
});

export const fetchHorror = cache(async () => {
  const res = await fetch(requests.getHorror);
  const data = await res.json();
  return data.results;
});

export const fetchPopularSeries = cache(async () => {
  const res = await fetch(requests.getPopularSeries);
  const data = await res.json();
  return data.results;
});

export const fetchDocSeries = cache(async () => {
  const res = await fetch(requests.getDocSeries);
  const data = await res.json();
  return data.results;
});

export const fetchActionSeries = cache(async () => {
  const res = await fetch(requests.getActionSeries);
  const data = await res.json();
  return data.results;
});

export const fetchRealitySeries = cache(async () => {
  const res = await fetch(requests.getRealitySeries);
  const data = await res.json();
  return data.results;
});

export const fetchKidSeries = cache(async () => {
  const res = await fetch(requests.getKidSeries);
  const data = await res.json();
  return data.results;
});

export const fetchFamilySeries = cache(async () => {
  const res = await fetch(requests.getFamilySeries);
  const data = await res.json();
  return data.results;
});

export const fetchMysterySeries = cache(async () => {
  const res = await fetch(requests.getMysterySeries);
  const data = await res.json();
  return data.results;
});
