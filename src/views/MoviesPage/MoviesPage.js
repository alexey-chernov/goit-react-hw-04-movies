import { useState, useEffect } from 'react';
import {
  useHistory,
  useLocation,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';

import { toast } from 'react-toastify';
import SearchBar from '../../components/SearchFilms';
import * as moviesAPI from '../../services/fetchApi';
import noImageAvailable from '../../images/Noimage.svg.png';
import styles from './MoviesPage.module.css';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const [error, setError] = useState();

  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

  const onChangeSearchQuery = query => {
    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    moviesAPI
      .getSearchMovie(searchQuery)
      .then(data => {
        if (data.results.length !== 0) {
          // toast.success('Requested movie(s) has been successfully found!');
          setMovies(data.results);
        }

        if (data.results.length === 0) {
          toast.error(`There are no movies on your request "${searchQuery}!"`);
          setMovies([]);
        }
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
      });
  }, [searchQuery, error]);

  return (
    <>
      <SearchBar onSubmit={onChangeSearchQuery} />

      {movies && (
        <ul className={styles.trendItem}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.trendMovie}>
              <NavLink
                to={{
                  pathname: `${url}/${movie.id}`,
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
                  width="320"
                  className={styles.imageTrend}
                />

                <p className={styles.title}>{movie.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
