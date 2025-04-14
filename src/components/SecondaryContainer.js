import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { MOVIE_TITLES } from '../utils/constants';

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store) => store?.movie?.nowPlayingMovies?.results);
  const topRatedMovies = useSelector((store) => store?.movie?.topRatedMovies?.results);
  const popularMovies = useSelector((store) => store?.movie?.popularMovies?.results);
  const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovies?.results);
  const {NOW_PLAYING_MOVIES, TOP_RATED_MOVIES, POPULAR_MOVIES,UPCOMING_MOVIES} = MOVIE_TITLES

  if (!nowPlayingMovies || !popularMovies || !upcomingMovies || !topRatedMovies) return;

  return (
    <div className='px-4 bg-black'>
      <div className='-mt-44 relative z-20 space-y-5'>
        <MovieList title={NOW_PLAYING_MOVIES} movieList={nowPlayingMovies} />
        <MovieList title={TOP_RATED_MOVIES} movieList={topRatedMovies} />
        <MovieList title={POPULAR_MOVIES} movieList={popularMovies} />
        <MovieList title={UPCOMING_MOVIES} movieList={upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer