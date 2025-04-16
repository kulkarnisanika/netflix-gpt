import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from '../utils/movieSlice'

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovies);

    useEffect(() => {
        !upcomingMovies && getNowPlayingMovies();
    }, []);

    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3', API_OPTIONS);
        const upComingMovies = await response.json();
        dispatch(addUpcomingMovies(upComingMovies));
    }
}

export default useUpcomingMovies;