import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        enableGptSearch: false,
        recommendedMovieNames: null,
        recommendedMovieDetails: null
    },
    reducers: {
        enableGptSearchFeature: (state, action) => {
            state.enableGptSearch = !state.enableGptSearch
        },
        addOpenaiRecommendedMovies: (state,action) => {
            const {recommendedMovieNames, recommendedMovieDetails} = action.payload
            state.recommendedMovieNames= recommendedMovieNames;
            state.recommendedMovieDetails = recommendedMovieDetails
        }
    }
})

export const {enableGptSearchFeature, addOpenaiRecommendedMovies} = gptSlice.actions
export default gptSlice.reducer