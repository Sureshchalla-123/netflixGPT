import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoContainer = ({ id }) => {
  useTrailerVideo(id);

  // const trailerMovie = useSelector((store) => store.movies.trailerMovie);
  // if (!trailerMovie) return;

  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10 ">
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
      <iframe
        className="w-full h-screen "
        src={`https://www.youtube.com/embed/CMyrp5Vk3mU?autoplay=1&mute=1&controls=0&loop=1&playlist=CMyrp5Vk3mU`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
