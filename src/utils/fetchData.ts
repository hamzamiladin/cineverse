import requests from "./requests";

async function fetchData() {
  const res = await Promise.all([
    fetch(requests.getCineverseOriginals),
    fetch(requests.getPopular),
    fetch(requests.getTrendingMovies),
    fetch(requests.getAction),
    fetch(requests.getComedy),
    fetch(requests.getKidSeries),
    fetch(requests.getRomance),
  ]);
  const responseData = res.map((response) => {
    if (response.status !== 200) {
      throw new Error("Error fetching data");
    }
    return response.json();
  });
  return responseData;
}

export default fetchData;
