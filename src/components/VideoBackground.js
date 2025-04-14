import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useTrailerVideoDetails from '../hooks/useLoadTrailerVideoDetails';

const VideoBackground = ({ movieId }) => {

    useTrailerVideoDetails(movieId);
    const trailerVideoDetails = useSelector((Store) => Store?.movie?.trailerVideo);

    return (
        <div className='w-screen'>
            <iframe  
            className='w-full aspect-video' 
            src={"https://www.youtube.com/embed/"+trailerVideoDetails?.key + "?&autoplay=1&mute=1"} 
            alt="background video"   
             />
        </div>
    )
}

export default VideoBackground