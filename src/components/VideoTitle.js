import React from 'react'

const videoTitle = ({title, overview}) => {
  return (
    <div className='aspect-video absolute pt-52 pl-24 space-y-8 bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold text-white'>{title}</h1>
        <p className='w-3/12 text-md text-white' >{overview}</p>
        <div className='space-x-4'>
            <button className='text-black font-semibold bg-white p-3 px-10 text-md rounded hover:bg-opacity-70'>⏵ Play</button>
            <button className='text-white bg-gray-500 p-3 px-8 text-md rounded opacity-70 hover:bg-opacity-40'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default videoTitle