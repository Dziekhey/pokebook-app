import React from 'react';
import './App.css';
import HomeView from './pages/home/HomeView.jsx';
import ListView from './pages/list/ListView.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <HomeView /> },
    { path: "/list-view", element: <ListView /> },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;