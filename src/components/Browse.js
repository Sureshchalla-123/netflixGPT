import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
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
    </>
  );
};

export default Browse;
