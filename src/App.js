import React from "react";
import "./App.css";
import HomeView from "./pages/home/HomeView.jsx";
import ListView from "./pages/list/ListView.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemeProvider from "./services/ThemeProvider.jsx";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomeView /> },
    { path: "/list-view", element: <ListView /> },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
