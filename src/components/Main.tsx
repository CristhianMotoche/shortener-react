import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ShortLink from "../components/ShortLink";

const Main = (): JSX.Element => (
  <body>
    <main >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/short-link" component={ShortLink} />
      </Switch>
    </main>
  </body>
);

export default Main;
