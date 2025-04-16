import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { MOVIE_TITLES } from '../utils/constants';
import LANGUAGE_CONSTANTS from '../utils/languageConstants';

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store) => store?.movie?.nowPlayingMovies?.results);
  const topRatedMovies = useSelector((store) => store?.movie?.topRatedMovies?.results);
  const popularMovies = useSelector((store) => store?.movie?.popularMovies?.results);
  const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovies?.results);
  const configuredLanguage = useSelector((store) => store?.appConfig?.lang)

  const { MOVIE_TITLES: { NOW_PLAYING_MOVIES, TOP_RATED_MOVIES, POPULAR_MOVIES, UPCOMING_MOVIES } = {} } = LANGUAGE_CONSTANTS?.[configuredLanguage] || {};

  if (!nowPlayingMovies || !popularMovies || !upcomingMovies || !topRatedMovies) return;

  return (
    <div className='px-6  bg-black'>
      <div className='-mt-16 sm:-mt-12 md:-mt-44 lg:-mt-16 xl:-mt-60 relative z-20 space-y-5'>
        <MovieList title={NOW_PLAYING_MOVIES} movieList={nowPlayingMovies} />
        <MovieList title={TOP_RATED_MOVIES} movieList={topRatedMovies} />
        <MovieList title={POPULAR_MOVIES} movieList={popularMovies} />
        <MovieList title={UPCOMING_MOVIES} movieList={upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer