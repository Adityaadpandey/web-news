import React from "react";
import A1 from "../templates/A1";
import A2 from "../templates/A2";
import A3 from "../templates/A3";
import A4 from "../templates/A4";
import "../css/Home.css";
import A5 from '../templates/A5';
import A6 from '../templates/A6';
import A7 from '../templates/A7';

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="home column">
          <A1 />
        </div>
        <div className="home column">
          <A5/>
        </div>
        <div className="home column">
          <A6/>
        </div>
        <div className="home column">
          <A2 />
        </div>
        <div className="home column">
          <A3/>
        </div>
        <div className="home column">
          <A7/>
        </div>
        <div className="home column">
          <A4/>
        </div>
      </div>
    </>
  );
};

export default Home;
