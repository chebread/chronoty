import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/root.tsx';
import { Route, Switch } from 'wouter';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Switch>
      <Route path="/">
        <Root />
      </Route>
      <Route>404: No such page!</Route>
    </Switch>
  </StrictMode>
);
