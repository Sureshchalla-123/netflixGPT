import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
<<<<<<< HEAD
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
=======
import Footer from "./Footer";
const Browse = () => {
  useNowPlayingMovies();

  let arr = ["option1", "option2", "option3", "option4", "option5"];
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [filteredList, setFilteredList] = React.useState(arr);

  return (
    <>
      <Header />
      <Footer />
>>>>>>> 326ea96698fc1fdde74d990d337c1744ff056b9e
    </>
  );
};

export default Browse;
