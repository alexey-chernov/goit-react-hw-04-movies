import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';

import * as moviesAPI from '../../services/fetchApi';
import noImageAvailable from '../../images/Noimage.svg.png';
import LoaderComponent from '../../components/Loader';
import styles from './MovieDetailsPage.module.css';

const CastView = lazy(() =>
  import('../Cast' /* webpackChunkName: "cast-view" */),
);

const ReviewsView = lazy(() =>
  import('../Reviews' /* webpackChunkName: "review-view" */),
);

export default function HomeSubView() {
  const { url, path } = useRouteMatch();
  const { moviesId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    moviesAPI
      .getMoviesById(moviesId)

      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
      });
  }, [moviesId, error]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/movies');
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" className={styles.button} onClick={onGoBack}>
            Go back
          </button>
          <div className={styles.movies}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : noImageAvailable
              }
              alt={movie.title}
              width="250"
            />
            <div className={styles.about}>
              <h1 className={styles.title}>{movie.title} </h1>
              <p>User Score: {movie.vote_average * 10}%</p>
              <p className={styles.overview}>
                Overview
                <span className={styles.description}>{movie.overview}</span>
              </p>
              {movie.genres && (
                <>
                  <h3 className={styles.title}>Genres</h3>
                  <ul className={styles.genre}>
                    {movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <nav className={styles.navigation}>
            <p className={styles.information}>Additional information</p>

            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: { location } },
              }}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Cast
            </NavLink>

            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: { location } },
              }}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Reviews
            </NavLink>
          </nav>

          <Suspense fallback={<LoaderComponent />}>
            <Switch>
              <Route path={`${path}:moviesId/cast`}>
                <CastView moviesId={moviesId} />
              </Route>

              <Route path={`${path}:moviesId/reviews`}>
                <ReviewsView moviesId={moviesId} />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
