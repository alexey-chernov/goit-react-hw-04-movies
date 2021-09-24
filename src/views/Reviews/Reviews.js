import { useState, useEffect } from 'react';
import * as moviesAPI from '../../services/fetchApi';
import styles from './Reviews.module.css';
import ShowMore from 'react-simple-show-more';

export default function ReviewsView({ moviesId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI.getReviewsMovie(moviesId).then(data => {
      console.log(data.results);

      setReviews(data.results);
    });
  }, [moviesId]);

  return (
    <>
      <div>
        {reviews.length > 0 ? (
          <ul className={styles.review}>
            {reviews.map(review => (
              <li key={review.id} className={styles.item}>
                <h2 className={styles.name}>{review.author}</h2>
                <p className={styles.character}>
                  <ShowMore
                    text={review.content}
                    length={700}
                    showMoreLabel=" Show more >>"
                    showLessLabel=" Show less <<"
                    style={{
                      cursor: 'pointer',
                      color: 'rgba(238, 138, 16, 0.952)',
                      fontWeight: 'bold',
                    }}
                  />
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We do not have any reviews for this movie.</p>
        )}
      </div>
    </>
  );
}
