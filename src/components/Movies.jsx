/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Styles.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movieId, setMovieId] = useState(searchParams.get('query') || '');

  const [Authorization] = useState(
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmViMDFhN2ZiZmFlZTdjYWIwZTJiZDhmZDhmYzlmNCIsInN1YiI6IjY0YTk1N2ZkNjZhMGQzMDBhZGU3OTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gTrA7E0aFwiAj4I4QiDPa4c-e38boHWSycRPAb_8LY'
  );
  const [movieList, setMovieList] = useState([]);

  const location = useLocation();

  const searchMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieId}&include_adult=false&language=en-US&page=1`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: Authorization,
        },
      });
      const data = await response.json();
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const updQuery = e => {
    setMovieId(e.currentTarget.value);

    if (e.currentTarget.value === '') {
      return setSearchParams({});
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ query: movieId });
    searchMovie();
  };

  useEffect(() => {
    searchMovie();
  }, [Authorization]);

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSearch}>
        <input
          type="text"
          value={movieId}
          onChange={updQuery}
          className={css.searchInput}
        />
        <button
          type="button"
          className={css.searchButton}
          onClick={handleSearch}
        >
          Search
        </button>
      </form>

      <ul className={css.movieList}>
        {movieList.map(movie => (
          <li key={movie.id} className={css.movieItem}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
