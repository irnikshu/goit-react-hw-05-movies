import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './modules/Navbar/Navbar';

import Home from './modules/Page/Home/Home';
import NotFoundPage from './modules/Page/NotFoundPage/NotFoundPage';
import MovieDetails from './modules/Page/MovieDetails/MovieDetails';
import Movies from './modules/Page/Movies/Movies';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
