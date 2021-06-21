import React from "react";
import { Jumbotron } from "reactstrap";
const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1>
          <center>Welcome to WeBootStrappedThisCity</center>
        </h1>
      </Jumbotron>
      <div style={{ display: "flex", alignItems: "center", flexDirection:'column' }}>
        WeBootStrappedThisCity is message saving app.
      </div>
    </div>
  );
};

export default Home;
