import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Checkbox } from '@material-ui/core';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Actors({ setSelectedActors }) {
  const [actors, setActors] = useState([]);
  const [selected, setSelected] = useState([]);
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchActors = async () => {
      try {
        let fetchedActors = [];
        for (let page = 1; page <= 3; page++) {
          const { data } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=en-US&page=${page}`);
          fetchedActors = fetchedActors.concat(data.results);
        }
        setActors(fetchedActors.slice(0, 40));
      } catch (error) {
        console.error('Failed to fetch actors:', error);
      }
    };

    fetchActors();
  }, [api_key]);

  const toggleSelection = (actorId) => {
    const isSelected = selected.includes(actorId);
    if (isSelected) {
      setSelected(selected.filter(id => id !== actorId));
      setSelectedActors(selected.filter(id => id !== actorId)); // Update parent state
    } else {
      setSelected([...selected, actorId]);
      setSelectedActors([...selected, actorId]); // Update parent state
    }
  };

  const handleSelectActor = (actorId) => {
    toggleSelection(actorId);
  };

  // Prevent checkbox event from bubbling to the card onClick
  const handleCheckboxChange = (event) => {
    event.stopPropagation();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {actors.map((actor) => (
        <div key={actor.id} style={{ padding: "10px" }} onClick={() => handleSelectActor(actor.id)}>
          <Card style={{ position: 'relative', maxWidth: 345, margin: "auto", cursor: 'pointer' }}>
            <Checkbox
              checked={selected.includes(actor.id)}
              onClick={handleCheckboxChange} // Use onClick here to stop propagation correctly
              style={{ position: 'absolute', top: 0, right: 0, color: 'blue', zIndex: 100 }}
              color="primary"
            />
            <CardMedia
              component="img"
              height="140"
              image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" noWrap>
                {actor.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {actor.known_for_department}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  );
}
