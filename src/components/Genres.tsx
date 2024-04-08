import React, { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import axios from 'axios';

export default function Genres({ setSelectedGenres }) {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const api_key = process.env.NEXT_PUBLIC_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`);
      setGenres(data.genres);
    };

    fetchGenres();
  }, []);

  const handleSelectGenre = (genreId) => {
    const newSelection = selected.includes(genreId) ? selected.filter(id => id !== genreId) : [...selected, genreId];
    setSelected(newSelection);
    setSelectedGenres(newSelection); // Pass selected genre IDs upwards
  };

  return (
    <div>
      {genres.map((genre) => (
        <FormControlLabel
          key={genre.id}
          control={<Checkbox checked={selected.includes(genre.id) } onChange={() => handleSelectGenre(genre.id)} name={genre.name} color="primary" style={{color: 'white'}} />}
          label={genre.name}
          style={{ color: '#FFF' }}
        />
      ))}
    </div>
  );
}
