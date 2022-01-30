import React from "react";
import A1 from "../templates/A1";
import A2 from "../templates/A2";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="home column">
          <A1 />
        </div>
        <div className="home column">
          <A2 />
        </div>
      </div>
    </>
  );
};

export default Home;
