import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import Store from "../Components/Store";
import GlobalApi from "../Services/GlobalApi";
import PopularGames from "../Components/PopularGames";
import ByGenreId from "../Components/ByGenreId";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [listbyGenre, setListByGenre] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");

  useEffect(() => {
    getAllGamesList();
    getListByGenreId(4);
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getListByGenreId = (id) => {
    GlobalApi.getListByGenreId(id).then((resp) => {
      console.log("Game List By GenresId:", resp.data.results);
      setListByGenre(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          genreId={(genreId) => getListByGenreId(genreId)}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 && listbyGenre.length > 5 ? (
          <div>
            <Store gameBanner={allGameList[14]} />
            <PopularGames gameList={allGameList} />
            <ByGenreId
              gameList={listbyGenre}
              selectedGenresName={selectedGenresName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
