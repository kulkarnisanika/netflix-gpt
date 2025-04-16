import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movieList }) => {
  return (
    <div>
      <h2 className='text-white text-lg sm:text-xl lg:text-2xl pl-2 font-semibold py-1'>{title}</h2>
      <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap '>
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