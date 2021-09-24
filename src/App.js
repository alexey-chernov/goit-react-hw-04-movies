import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderComponent from './components/Loader';
import Container from './components/Container';
import { addBackToTop } from 'vanilla-back-to-top';

const AppBar = lazy(() =>
  import('./components/AppBar' /* webpackChunkName: "app-bar" */),
);

const HomePageView = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-view" */),
);

const MoviesPageView = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-view" */),
);

const MovieDetailsPageView = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-sub-view" */
  ),
);

const NotFoundView = lazy(() =>
  import('./views/NotFound/NotFound' /* webpackChunkName: "not-found-view" */),
);

export default function App() {
  useEffect(() => {
    addBackToTop({
      backgroundColor: 'blue',
      innerHTML:
        '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
      textColor: '#fff',
    });
  }, []);

  return (
    <Container>
      <Suspense fallback={<LoaderComponent />}>
        <AppBar />

        <Switch>
          <Route path="/" exact>
            <HomePageView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageView />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPageView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}
