import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/root.tsx';
import { Route, Switch } from 'wouter';
import './styles/globals.css';
import NotFound from './routes/not-found.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Switch>
      <Route path="/">
        <Root />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </StrictMode>
);
