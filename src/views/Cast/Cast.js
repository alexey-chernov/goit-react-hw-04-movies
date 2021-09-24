import { useState, useEffect } from 'react';
import * as moviesAPI from '../../services/fetchApi';
import noPhoto from '../../images/Noimage.svg.png';
import styles from './Cast.module.css';
import { toast } from 'react-toastify';

export default function CastView({ moviesId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.getCastMovie(moviesId).then(data => {
      if (data.cast.length === 0) {
        toast.info('Cast is not available!');
      }
      setCast(data.cast);
    });
  }, [moviesId]);

  return (
    <div>
      {cast && (
        <ul className={styles.cast}>
          {cast.map(item => (
            <li key={item.id} className={styles.castItem}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${item.profile_path}`
                    : noPhoto
                }
                alt={item.name}
                width="100"
                height="150"
                className={styles.castImg}
              />
              <p>{item.name}</p>
              <p className={styles.character}>
                <br />
                {item.character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
