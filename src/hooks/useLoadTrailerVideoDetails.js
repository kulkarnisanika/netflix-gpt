import { useEffect } from "react";
import { API_OPTIONS, TRAILER } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideoDetails = (movieId) => {
    const trailerVideo = useSelector((store) => store?.movie?.trailerVideo);
    const dispatch = useDispatch();
    const getVideoDetails = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const videoDetails = await response.json();
        const trailerVideoDetails = videoDetails?.results?.find((video) => video.type === TRAILER) || videoDetails?.results[0];
        dispatch(addTrailerVideo(trailerVideoDetails));
    }

    useEffect(() => {
        (!trailerVideo) && getVideoDetails();
    }, []);

}

export default useTrailerVideoDetails;