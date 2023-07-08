import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movie } = useParams();

  const [Authorization] = useState(
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmViMDFhN2ZiZmFlZTdjYWIwZTJiZDhmZDhmYzlmNCIsInN1YiI6IjY0YTk1N2ZkNjZhMGQzMDBhZGU3OTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gTrA7E0aFwiAj4I4QiDPa4c-e38boHWSycRPAb_8LY'
  );
  const [url] = useState(
    `https://api.themoviedb.org/3/movie/${movie}/reviews?language=en-US&page=1`
  );
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: Authorization,
          },
        });
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url, Authorization]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <span>We don't have any reviews</span>
      )}
    </div>
  );
};

export default Reviews;
