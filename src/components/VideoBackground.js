import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useTrailerVideoDetails from '../hooks/useLoadTrailerVideoDetails';
import { IMG_URLS } from '../utils/constants';

const VideoBackground = ({ movieId }) => {

    useTrailerVideoDetails(movieId);
    const trailerVideoDetails = useSelector((Store) => Store?.movie?.trailerVideo);
    const { VIDEO_BACKGROUND_BASE_PATH, VIDEO_BACKGROUND_FILTERS } = IMG_URLS;

    return (
        <div className='w-screen'>
            <iframe
                className='w-full aspect-video'
                src={VIDEO_BACKGROUND_BASE_PATH + trailerVideoDetails?.key + VIDEO_BACKGROUND_FILTERS}
                alt="background video"
            />
        </div>
    )
}

export default VideoBackground