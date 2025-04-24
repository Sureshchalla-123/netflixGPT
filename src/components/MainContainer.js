import React from "react";
import TitleContainer from "./TitleContainer";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1] || null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="w-full h-screen">
      <TitleContainer title={original_title} discription={overview} />
      <VideoContainer id={id} />
    </div>
  );
};

export default MainContainer;
