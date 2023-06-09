import React, {createContext, useEffect, useState} from "react";
import requests from "../axios/requests";
import instance from "../axios/axios";
import axios from "axios";
export const ContentContext = createContext([]);

export default function ContentContextProvider({children}) {
  const [moviesRows, setMoviesRows] = useState([]);

  const getData = () => {
    const rows = [
      {title: "Netflix Originals", endpoint: requests.fetchNetflixOriginals},
      {title: "Romance", endpoint: requests.fetchRomanceMovies},
      {title: "Top Rated", endpoint: requests.fetchTopRated},
      {title: "Trending", endpoint: requests.fetchTrending},
      {title: "Action", endpoint: requests.fetchActionMovies},
      {title: "Comedy", endpoint: requests.fetchComedyMovies},
      {title: "Horror", endpoint: requests.fetchHorrorMovies},
      {title: "Documentaries", endpoint: requests.fetchDocumentaries},
    ];

    Promise.all(rows.map((row) => instance.get(row.endpoint))).then(
      axios.spread((...allResponse) => {
        console.log(allResponse);
        let data = [];
        rows.map((row, index) => {
          data.push({
            id: index + 1,
            title: row.title,
            items: allResponse[index].data.results,
          });
        });
        return setMoviesRows(data);
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ContentContext.Provider value={{moviesRows, setMoviesRows}}>
      {children}
    </ContentContext.Provider>
  );
}
