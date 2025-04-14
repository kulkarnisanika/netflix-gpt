import React from 'react'
import { IMG_URLS } from '../utils/constants'

const MovieCard = ({ posterUrl }) => {
  return (
    <div className='w-36 p-2'>
      <img
        alt={"poster img" + posterUrl}
        src={IMG_URLS.POSTER_BASE_PATH + posterUrl}
      />
    </div>
  )
}

export default MovieCard