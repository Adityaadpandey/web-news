import React from "react";
import "../css/A2.css";
import second from "../images/a2im.jpg";
import A1temp from "../templates/A1";
import A3temp from "../templates/A3";

const A2 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>US bans telecom giant China Unicom over spying concerns</h1>
          <img src={second} alt="AirTag" />
          <p>
            <b>
              China Unicom has become the latest Chinese telecoms giant to be
              banned from the US over "significant" national security and
              espionage concerns.
            </b>
          </p>
          <p>
            The Federal Communications Commission (FCC) said it had voted
            unanimously to revoke authorisation for the company's American unit
            to operate in the US.
          </p>
          <p>
            The firm must stop providing telecoms services in America within 60
            days.
          </p>

          <p>
            The announcement comes after larger rival China Telecom had its
            licence to operate in the US revoked in October.
          </p>

          <p>
            FCC chairwoman Jessica Rosenworcel said: "There has been mounting
            evidence - and with it, a growing concern - that Chinese state-owned
            carriers pose a real threat to the security of our
            telecommunications networks."
          </p>

          <p>
            China Unicom told the BBC its American unit "has a good record of
            complying with relevant US laws and regulations and providing
            telecommunication services and solutions as a reliable partner of
            its customers in the past two decades".
          </p>

          <p>  "China Unicom (Hong Kong) Limited will closely follow the development of the situation," it added.</p>

          <p> The Chinese Embassy in Washington did not immediately respond to a request for comment from the BBC.</p>

          <p> Chinese technology and telecoms firms have been targeted in recent years by US authorities over national security concerns.</p>

          <p> In November, President Joe Biden signed legislation that stops companies judged to be a security threat from receiving new telecoms equipment licences.</p>

          <p> Under the Secure Equipment Act, the FCC should no longer review applications from companies ruled to be a threat.</p>

          <p> It means equipment from Huawei, ZTE and three other Chinese companies cannot be used in US telecoms networks.</p>

          <p> Also in November, the US government added a dozen more Chinese companies to its restricted trade list, citing national security and foreign policy concerns.</p>

          <p> Washington said that some of the firms are helping develop the Chinese military's quantum computing programme.</p>

          <p> In October, Washington revoked the US licence of China Telecom, also citing national security concerns.</p>

          <p> US officials said the Chinese government's control of the company gave it the opportunity "to access, store, disrupt, and/or misroute US communications".</p>

          <p> This in turn could allow it "to engage in espionage and other harmful activities against the US", they said.</p>

          <p> In 2019, Chinese state-owned telecoms giant China Mobile also had its US licence revoked.</p>

        </div>
        <div class="column right first" >
  <A1temp />
  </div>
        <div class="column right first" >
  <A3temp /> 
  </div>
      </div>
    </>
  );
};

export default A2;
