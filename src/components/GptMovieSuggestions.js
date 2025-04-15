import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  const { recommendedMovieNames, recommendedMovieDetails } = useSelector((store) => store?.gpt);
  if(!recommendedMovieNames) return;

  return (
    <div className='bg-black m-8 p-4 opacity-90'>
      {
        recommendedMovieNames?.map((movie,index) => (
          <MovieList
          key = {movie}
          title = {movie}
          movieList={recommendedMovieDetails?.[index]?.results} />
        ))
      }
    </div>
  )
}

export default GptMovieSuggestions