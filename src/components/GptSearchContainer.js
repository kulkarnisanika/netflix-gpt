import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { IMG_URLS } from '../utils/constants'

const GptSearchContainer = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={IMG_URLS?.BACKGROUND_IMG}
          alt="netflix=bg-image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
      
    </div>
  )
}

export default GptSearchContainer