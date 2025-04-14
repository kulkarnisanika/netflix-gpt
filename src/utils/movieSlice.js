import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
           return action.payload;
        }
    }

});

export const {addNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;