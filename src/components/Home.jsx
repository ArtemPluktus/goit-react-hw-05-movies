import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Styles.module.css';

const Home = () => {
  const [Authorization] = useState(
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmViMDFhN2ZiZmFlZTdjYWIwZTJiZDhmZDhmYzlmNCIsInN1YiI6IjY0YTk1N2ZkNjZhMGQzMDBhZGU3OTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gTrA7E0aFwiAj4I4QiDPa4c-e38boHWSycRPAb_8LY'
  );
  const [url] = useState(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`
  );
  const [trending, setTrending] = useState(``);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: Authorization,
          },
        });
        const data = await response.json();
        setTrending(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url, Authorization]);

  return (
    <div>
      <h1 className={css.trendingTitle}>Trending today</h1>
      <ul className={css.trendingList}>
        {trending &&
          trending.map(trend => {
            return (
              <li key={trend.id} className={css.trendingItem}>
                <Link
                  key={trend.id}
                  to={`/movies/${trend.id}`}
                  className={css.movieLink}
                >
                  {trend.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
