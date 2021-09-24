import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import * as moviesAPI from '../../services/fetchApi';
import styles from './HomePage.module.css';
import noImageAvailable from '../../images/Noimage.svg.png';

export default function HomeView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [error, setError] = useState();

  useEffect(() => {
    moviesAPI
      .getTrendingMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
      });
  }, [error]);

  return (
    <>
      {movies && (
        <>
          <h1 className={styles.trendToday}>Trending today</h1>

          <ul className={styles.trendItem}>
            {movies.map(movie => (
              <li key={movie.id} className={styles.trendMovie}>
                <Link
                  to={{
                    pathname: `${url}movies/${movie.id}`,
                    state: { from: { location } },
                  }}
                  className={styles.trendLink}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : noImageAvailable
                    }
                    alt={movie.title}
                    className={styles.imageTrend}
                  />
                  <p className={styles.title}>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
