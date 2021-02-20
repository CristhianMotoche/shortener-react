import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ShortLink from "../components/ShortLink";

const Main = (): JSX.Element => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/short-link" component={ShortLink} />
    </Switch>
  </main>
);

export default Main;
