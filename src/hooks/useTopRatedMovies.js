import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store?.movie?.topRatedMovies);
    
    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, [])

    const getTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const topRatedMovies = await response.json();
        dispatch(addTopRatedMovies(topRatedMovies));
    }
}

export default useTopRatedMovies