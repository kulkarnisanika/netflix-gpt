import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movieList }) => {
  return (
    <div>
      <h2 className='text-white text-2xl font-semibold py-1'>{title}</h2>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {
            movieList.map((movie) => (
              <MovieCard
                key={movie?.id}
                posterUrl={movie?.poster_path}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList