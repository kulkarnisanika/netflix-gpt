import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import openai from '../utils/openai'
import React, { useRef } from 'react'
import { addOpenaiRecommendedMovies } from '../utils/gptSlice';

const GptSearchBar = () => {

  const searchInput = useRef(null);
  const dispatch = useDispatch();

  const searchRecommendedMovies = async(movie) => {
    const response = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const movieDetails = await response.json();
    return movieDetails;
  }

  const onSearchButtonClick = async () => {
    //search movies using openai API : Get movie recommendations
    const GPT_QUERY = "Give me only 5 " + searchInput?.current?.value + " movie names in comma separated format. No explanation, no extra text. example- A,B,C,D,E"

    const openaiResult = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "user",
          content: [
            {
              "type": "text",
              "text": GPT_QUERY
            }
          ]
        }
      ]
    });

    //Format movie name to array
    if (openaiResult?.choices) {
      const recommendedMovies = openaiResult?.choices[0]?.message?.content;
      const searchTmdbMovieInput = recommendedMovies?.split(',');
      const searchedTmdbResponses = searchTmdbMovieInput?.map((movie) => (searchRecommendedMovies(movie)));

      //get recommended movie details from TMDB API
      const searchedTmdbMovieDetails = await Promise.all(searchedTmdbResponses);

      //set those details in store
      dispatch(addOpenaiRecommendedMovies({recommendedMovieNames:searchTmdbMovieInput, recommendedMovieDetails:searchedTmdbMovieDetails}))
      
    
    }
    else return;
  }

  return (
    <div className='pt-[35%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%] flex justify-center'>
      <form className='grid grid-cols-12 w-3/4 lg:w-1/2 bg-black py-4 px-6 space-y-3 md:space-x-4 md:space-y-0 rounded' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchInput}
          className='p-3  col-span-12 md:col-span-9  rounded'
          type="text" name="gptSearchInput"
          placeholder="What would you like to see?" />
        <button
          className='bg-rose-600 px-3 py-2 md:x-5 rounded text-white col-span-12 md:col-span-3'
          onClick={onSearchButtonClick}>
          Search
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar