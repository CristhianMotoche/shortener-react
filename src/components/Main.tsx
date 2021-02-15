import React from "react";


type Props = {
  children: JSX.Element
};

const Main = ({ children }: Props): JSX.Element => (
  <body>
    <main>
      {children}
    </main>
  </body>
);

export default Main;
