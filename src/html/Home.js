import React from "react";
import A1 from "../templates/A1";
import A2 from "../templates/A2";
// import A3 from "../templates/A3";
import A4 from "../templates/A4";
import "../css/Home.css";
import A5 from '../templates/A5';
import A6 from '../templates/A6';
import A7 from '../templates/A7';
import A9 from "../templates/A9";
import A12 from "../templates/A12";
import A10 from "../templates/A10";
import A11 from "../templates/A11";
import A13 from "../templates/A13";
import A14 from "../templates/A14";
import A15 from "../templates/A15";
import A16 from "../templates/A16";


const Home = () => {
  return (
    <>
      <div className="row">
        <div className="home column">
          <A16/>
        </div>
        <div className="home column">
          <A15 />
        </div>
        <div className="home column">
          <A14 />
        </div>
        <div className="home column">
          <A12 />
        </div>
        <div className="home column">
          <A11 />
        </div>
        <div className="home column">
          <A1 />
        </div>
        <div className="home column">
          <A9 />
        </div>
        <div className="home column">
          <A5 />
        </div>
        <div className="home column">
          <A2 />
        </div>
        {/* <div className="home column">
          <A3 />
        </div> */}
        <div className="home column">
          <A7 />
        </div>
        <div className="home column">
          <A6 />
        </div>
        <div className="home column">
          <A4 />
        </div>
        <div className="home column">
          <A10 />
        </div>
        <div className="home column">
          <A13 />
        </div>
      </div>
    </>
  );
};

export default Home;
