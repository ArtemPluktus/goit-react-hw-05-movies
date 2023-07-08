import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

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
      <Link to={backLink.current}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      <h2>{original_title}</h2>
      <p>User Score: {Number(vote_average) * 10}%</p>
      <h2>Overwiew</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      {genres &&
        genres.map(genre => {
          return genre.name;
        })}
      <h3>Additional information</h3>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
