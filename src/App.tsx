// libs
import * as React from 'react';
import { useRoutes } from 'hookrouter';

// routes
import routes from './routes';

// components
import Header from './components/Header';

// pages
import NotFound from './pages/NotFound';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
