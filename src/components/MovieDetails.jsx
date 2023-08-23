import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import css from './Styles.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? `/`);
  const { movie } = useParams();

  const [Authorization] = useState(
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmViMDFhN2ZiZmFlZTdjYWIwZTJiZDhmZDhmYzlmNCIsInN1YiI6IjY0YTk1N2ZkNjZhMGQzMDBhZGU3OTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gTrA7E0aFwiAj4I4QiDPa4c-e38boHWSycRPAb_8LY'
  );
  const [url] = useState(
    `https://api.themoviedb.org/3/movie/${movie}?language=en-US`
  );
  const [info, setInfo] = useState(``);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: Authorization,
          },
        });
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url, Authorization]);

  const { poster_path, original_title, vote_average, overview, genres } = info;

  return (
    <div>
      <Link to={backLink.current} className={css.backLink}>
        Go back
      </Link>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className={css.moviePoster}
      />
      <h2 className={css.movieTitle}>{original_title}</h2>
      <p className={css.userScore}>User Score: {Number(vote_average) * 10}%</p>
      <h2 className={css.overviewTitle}>Overwiew</h2>
      <p className={css.overview}>{overview}</p>
      <h2 className={css.genresTitle}>Genres</h2>
      <p className={css.genresList}>
        {genres &&
          genres.map(genre => {
            return `${genre.name} `;
          })}
      </p>

      <h3 className={css.additionalInfoTitle}>Additional information</h3>

      <ul className={css.additionalList}>
        <li className={css.additionalLink}>
          <Link to="cast" className={css.castLink}>
            Cast
          </Link>
        </li>
        <li className={css.additionalLink}>
          <Link to="reviews" className={css.reviewsLink}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
