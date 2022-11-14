import "./App.css";

import Banner from "./Components/Banner";
import Favourites from "./Components/Favourites";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/movies"
          element={
            <>
              <Banner />
              <MovieList />
            </>
          }
        />

        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;