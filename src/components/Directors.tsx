import React, { useEffect, useState } from 'react';
import { Chip } from '@material-ui/core';
import axios from 'axios';

export default function Directors({ movieId, setDirectors }) {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const fetchDirectors = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US&append_to_response=credits`);
    const directors = data.credits.crew.filter(member => member.job === 'Director');
    setDirectors(directors);
  };

  useEffect(() => {
    fetchDirectors();
  }, [movieId]);

  return (
    <div>
      {directors?.map(director => (
        <Chip
          key={director.id}
          style={{ fontSize: '1.2rem', margin: '3px' }}
          label={director.name}
          color="primary"
        />
      ))}
    </div>
  );
}
