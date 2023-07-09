import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './Home.jsx';
// import Movies from './Movies.jsx';
// import MovieDetails from './MovieDetails.jsx';
// import Cast from './Cast.jsx';
// import Reviews from './Reviews.jsx';

const Layout = lazy(() => import(`./Layout.jsx`));
const Home = lazy(() => import(`./Home.jsx`));
const Movies = lazy(() => import(`./Movies.jsx`));
const MovieDetails = lazy(() => import(`./MovieDetails.jsx`));
const Cast = lazy(() => import(`./Cast.jsx`));
const Reviews = lazy(() => import(`./Reviews.jsx`));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movie" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
