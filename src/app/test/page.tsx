'use client';
import React, { useEffect, useState } from 'react';
import Actors from '@/components/Actors';
import Genres from '@/components/Genres';
import VideoBackground from '@/components/VideoBackground';
import { Button, Container, Typography, makeStyles, Theme } from '@material-ui/core';
import RecommedationList from '@/components/m8/recommedationsList';
import SuggestionsList from '@/components/m8/suggestionsList';
import SearchBar from '@/components/m8/searchBar';
import axios from 'axios';
import Data from '@/data.json';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    gap: '1rem',
    marginTop: '2rem',
    background: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '8px',
    color: 'white',
    justifyContent: 'center',
  },
  searchBar: {
    display: 'flex',
    gap: '8px',
    width: '100%',
    margin: '20px 0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    padding: '8px',
    outline: 'none',
    borderRadius: '4px',
    height: '36px',
    width: '30rem',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'skyblue',
    color: 'white',
    borderRadius: '4px',
    fontWeight: 'bold',
    padding: '6.5px 14px',
    cursor: 'pointer',
  },
  listButton: {
    display: 'flex',
    height: '36px',
    cursor: 'pointer',
    alignItems: 'center',
    gap: '20px',
    paddingLeft: '20px',
    borderLeft: '2px solid skyblue',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'slategray',
    },
  },
  listButtonActive: {
    backgroundColor: 'slategray',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    paddingBottom: '0.7rem',
  },
  title2: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    paddingBottom: '0.2rem',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'left',
    alignItems: 'left',
  },
}));

export default function MovieGenreTestPage() {
  const [input, setInput] = useState('');
  const [inputIndex, setInputIndex] = useState(-1);
  const classes = useStyles();

  // Lists
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recommedations, setRecommedations] = useState<string[]>([]);

  const [toggleRec, setToggleRec] = useState(false);
  const [searchedFor, setSearchedFor] = useState('');

  // Title
  const title = toggleRec ? `Recommendations for "${searchedFor}"` : 'Suggestions';

  const display = inputIndex === -1 ? input : toggleRec ? recommedations[inputIndex] : suggestions[inputIndex];

  useEffect(() => {
    const suggestedList = Data.title
      .filter((value) => value.toLowerCase().startsWith(input.toLowerCase()))
      .slice(0, 10);
    setSuggestions(suggestedList);
  }, [input]);

  const _suggestions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setInputIndex(-1);
    setToggleRec(false);
  };

  const _search = async (value: string) => {
    setInput('');
    setInputIndex(-1);
    setToggleRec(true);
    setSearchedFor(value);

    const recommedation_list_res = await axios<string[]>(
      `http://127.0.0.1:8000/movies/?name=${value}`
    );
    const recommedation_list = await recommedation_list_res.data;
    if (recommedation_list === null) return setRecommedations([]);
    setRecommedations(recommedation_list);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'ArrowDown') {
      e.preventDefault();
      if (toggleRec) {
        if (inputIndex + 1 >= recommedations.length) return setInputIndex(0);
        setInputIndex(inputIndex + 1);
      } else {
        if (inputIndex + 1 >= suggestions.length) return setInputIndex(0);
        setInputIndex(inputIndex + 1);
      }
    }
    if (e.code === 'ArrowUp') {
      e.preventDefault();
      if (toggleRec) {
        if (inputIndex - 1 < -1)
          return setInputIndex(recommedations.length - 1);
        setInputIndex(inputIndex - 1);
      } else {
        if (inputIndex - 1 < -1) return setInputIndex(suggestions.length - 1);
        setInputIndex(inputIndex - 1);
      }
    }
    if (e.code === 'Enter') _search(display);
  };

  return (
    <VideoBackground src="/coverr-blurred-lights-3400-1080p.mp4">
      <Container maxWidth="xl" className={classes.container}>
        <h1 className={classes.title2}> Get your recommendations from your own personal MovieM8! </h1>
        <div className={classes.searchBar}>
          <input
            type="text"
            className={classes.input}
            value={display}
            onChange={_suggestions}
            onKeyDown={handleKeyDown}
          />
          <button
            className={classes.button}
            onClick={() => _search(display)}
          >Search</button>
        </div>
        <Typography variant="h5" className={classes.title}>{title}</Typography>
        <div className={classes.listContainer}>
          {toggleRec ? (
            <RecommedationList recommedations={recommedations} _search={_search} inputIndex={inputIndex} />
          ) : (
            <SuggestionsList suggestions={suggestions} inputIndex={inputIndex} _search={_search} />
          )}
        </div>
      </Container>
    </VideoBackground>
  );
}
