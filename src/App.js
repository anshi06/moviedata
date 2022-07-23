import './App.css';
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import MovieList from "./Components/MovieList";
import Favourites from "./Components/Favourites";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route
        path="/"
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
