import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import actorIcon from './actorIcon.png';
import css from './Styles.module.css';

const Cast = () => {
  const { movie } = useParams();

  const [Authorization] = useState(
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmViMDFhN2ZiZmFlZTdjYWIwZTJiZDhmZDhmYzlmNCIsInN1YiI6IjY0YTk1N2ZkNjZhMGQzMDBhZGU3OTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gTrA7E0aFwiAj4I4QiDPa4c-e38boHWSycRPAb_8LY'
  );
  const [url] = useState(
    `https://api.themoviedb.org/3/movie/${movie}/credits?language=en-US`
  );
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: Authorization,
          },
        });
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url, Authorization]);

  return (
    <div>
      <ul className={css.actorList}>
        {cast.map(actor => (
          <li key={actor.id} className={css.actorItem}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt=""
                className={css.actorImage}
              />
            ) : (
              <img src={actorIcon} alt="" className={css.actorImage} />
            )}

            <span className={css.actorName}>{actor.name}</span>
            <span className={css.actorName}>Character: {actor.character}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
