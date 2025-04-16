import React from 'react'
import LANGUAGE_CONSTANTS from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const VideoTitle = ({title, overview}) => {

  const configuredLanguage = useSelector((store) => store?.appConfig?.lang)
  const { LABELS: { PLAY, MORE_INFO } = {} } = LANGUAGE_CONSTANTS?.[configuredLanguage] || {};

  return (
    <div className='aspect-video absolute pt-8 sm:pt-32 md:pt-36 lg:pt-52 pl-8 sm:pl-8 lg:pl-24 space-y-6 lg:space-y-8 lg:bg-gradient-to-r lg:from-black '>
        <h1 className='lg:text-5xl text-4xl font-bold text-white'>{title}</h1>
        <p className='hidden sm:hidden md:hideen lg:inline-block  w-3/12 text-md text-white' >{overview}</p>
        <div className='space-x-4'>
            <button className='text-black font-semibold bg-white p-3 px-10 text-sm sm:text-md md:text-md rounded hover:bg-opacity-70'>⏵ {PLAY}</button>
            <button className='hidden sm:hidden md:hideen lg:inline-block text-white bg-gray-600 p-3 px-8 text-md rounded opacity-70 hover:bg-opacity-40'>ⓘ {MORE_INFO}</button>
        </div>
    </div>
  )
}

export default VideoTitle