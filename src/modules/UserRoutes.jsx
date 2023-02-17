import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from '../shared/Components/Loader/Loader';

const Home = lazy(() => import('../modules/Page/Home/Home'));
const NotFoundPage = lazy(() =>
  import('../modules/Page/NotFoundPage/NotFoundPage')
);
const MovieDetails = lazy(() =>
  import('../modules/Page/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('../modules/Page/Movies/Movies'));
const Cast = lazy(() => import('../modules/Page/Cast/Cast'));
const Reviews = lazy(() => import('../modules/Page/Reviews/Reviews'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
