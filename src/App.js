import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import JoinUs from './Components/JoinUs/JoinUs';
import Leagues from './Components/Leagues/Leagues';
import Clubs from './Components/Clubs/Clubs';
import Favourite from './Components/Favourite/Favourite';
import Error from './Components/Error/Error';
import React, { useState } from 'react';
function App() {
  const [favourite, setFavourite] = useState([])
  const handleAddtofavourite = leauge => {
    const newFavourite = [...favourite, leauge]
    const local = JSON.stringify(newFavourite)
    localStorage.setItem('leauge', local)
    setFavourite(newFavourite)
  };
  const [favouriteTeam, setFavouriteTeam] = useState([])
  const handleAddtofavouriteTeam = team => {
    const newFavourite = [...favouriteTeam, team]
    const local = JSON.stringify(newFavourite)
    localStorage.setItem('club', local)
    setFavouriteTeam(newFavourite)
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/leagues',
          loader: async () => {
            return fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
          },
          element: <Leagues handleAddtofavourite={handleAddtofavourite}></Leagues>
        },
        {
          path: '/clubs',
          loader: async () => {
            return fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
          },
          element: <Clubs handleAddtofavouriteTeam={handleAddtofavouriteTeam}></Clubs>
        },
        {
          path: '/favourite',
          element: <Favourite favourite={favourite} setFavourite={setFavourite} favouriteTeam={favouriteTeam} setFavouriteTeam={setFavouriteTeam}></Favourite>
        },
        {
          path: '/joinUs',
          element: <JoinUs></JoinUs>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
