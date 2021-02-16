import React from "react";
import { Link } from "react-router-dom";

const Home: () => JSX.Element = () => (
  <div>
    <h1>Welcome to the Shortener Client!</h1>
    <Link to="/">
      Short something!
    </Link>
  </div>
);

export default Home;
