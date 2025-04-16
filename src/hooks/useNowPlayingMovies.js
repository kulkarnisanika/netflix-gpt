import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies = () => {

    const nowPlayingMovies = useSelector((store) => store?.movie?.nowPlayingMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);

    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const nowPlayingMovies = await response.json();
        dispatch(addNowPlayingMovies(nowPlayingMovies));
    }
}

export default useNowPlayingMovies;