import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Route, Switch } from "wouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Switch>
      <Route path="/">
        <App />
      </Route>
      <Route>404: No such page!</Route>
    </Switch>
  </StrictMode>
);
