import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground'


const MainContainer = () => {

  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
  if (movies == null) return;

  const mainMovie = movies?.results.reduce((max, movie) => {
    return max?.vote_count > movie?.vote_count ? max : movie;
  });

  const {title, overview, id} = mainMovie;

  return (
    <div>
     <VideoTitle title={title} overview={overview} />
     <VideoBackground movieId ={id}/>
        
    </div>
  )
}

export default MainContainer