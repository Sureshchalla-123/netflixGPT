import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEY, API_OPTIONS } from "../utils/constants";
import { addTrailerMovie } from "../utils/moviesSlice";

const useTrailerVideo = ({ id }) => {
  const dispatch = useDispatch();

  const getVideo = async () => {
    try {
      const respone = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
        API_OPTIONS
      );
      const json = await respone.json();
      const filteredData = json.results.filter(
        (item) => item.type === "Trailer" && item.site === "YouTube"
      );
      const trailerMovie = filteredData[0]?.key;
      dispatch(addTrailerMovie(trailerMovie));
    } catch (error) {
      console.log("Error while getting trailer video" + error);
    }
  };

  useEffect(() => {
    getVideo();
    //eslint-disable-next-line
  }, []);
};

export default useTrailerVideo;
