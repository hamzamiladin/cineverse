const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default async function handler(req, res) {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.genres);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching genres' });
  }
}
