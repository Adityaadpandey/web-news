import React from "react";
import "../css/A1.css";
import a4img from "../images/a4im.jpeg";
import a4im2 from "../images/a4im2.png";
import a4im3 from "../images/a4im3.jpg";
import a4im4 from "../images/a4im4.jpg";
import a4im5 from "../images/a4im5.jpg";
import A1temp from "../templates/A2";
import A3temp from "../templates/A3";

const A4 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>Musk: Robots to be bigger business than Tesla cars</h1>
          <img src={a4img} alt="AirTag" />
          <p>
            <b>
              Elon Musk likes to have a focus - and this year, it looks like it
              might be robots.
            </b>
          </p>
          <p>
            He told investors on a Tesla earnings call his nascent robot plans
            had "the potential to be more significant than the vehicle business,
            over time".
          </p>

          <p>
            And they would be the most important things Tesla worked on this
            year.
          </p>

          <p>
            The robot in question, part of a project dubbed Optimus, was
            previewed last year - to raised eyebrows - by a human in a robot
            suit dancing on stage.
          </p>

          <p>And the performance became a popular internet meme.</p>

          <p>
            The Tesla Bot, as it was dubbed, would use the same
            artificial-intelligence (AI) systems that helped power Tesla
            vehicles, Mr Musk said at the event last August - but no prototype
            has yet been made.
          </p>

          <p>
            He also said the not-yet-built 5ft 8in robot would have a screen on
            its "face" and be able to lift 150lb and travel at about 5mph.
          </p>
          <h3>Labour shortages</h3>
          <p>
            This week, Mr Musk told investors the humanoid robot's first
            application would be at a Tesla plant "moving parts around the
            factory, or something like that".
          </p>

          <p>But in the future, he sees it helping solve labour shortages.</p>

          <p>
            And earlier this week, he tweeted: "Tesla AI might play a role in
            AGI [artificial general intelligence], given that it trains against
            the outside world, especially with the advent of Optimus".
          </p>
          <img src={a4im2} alt="AirTag" />
          <p>
            {" "}
            AGI refers to the ability of a machine to learn or understand tasks
            currently performed by humans.
          </p>

          <p>
            Mr Musk has previously warned AI risks killing off human
            civilisation.
          </p>

          <p>
            And in the same Twitter thread, he added: "Decentralised control of
            the robots will be critical."
          </p>
          <h3>'Narrow intelligence'</h3>
          <p>
            Professor of robot ethics Alan Winfield, at the University of West
            England, said: "AGI is an exceptionally hard problem.
          </p>

          <p>
            "The idea that you can crack AGI because you have created a
            driverless vehicle is absurd.
          </p>

          <p>
            "Even if that car is highly capable, that would not be AGI - it
            would be high-functioning narrow intelligence.
          </p>

          <p>
            "Google and Facebook have hired some of the best AI people in the
            world and the idea that Musk can come in and crack the problem is
            hubristic in the extreme."
          </p>

          <p>
            Mr Musk does likes hard problems though, from autonomous cars to
            trips to Mars, and has plenty of successes.
          </p>

          <p>
            SpaceX's reusable rockets are widely regarded as representing a big
            step forward for space flights, for example.
          </p>
          <img src={a4im3} alt="AirTag" />
          <p>
            {" "}
            But previous efforts to create cost-effective mass-market humanoid
            robots have failed.
          </p>

          <p>
            {" "}
            In June, Japanese conglomerate Softbank announced production of
            Pepper, a friendly little humanoid, had been paused and would start
            again only when the robots were needed, much to the dismay of the
            academic community that used them.
          </p>

          <p>
            {" "}
            That said, robots are increasingly used in factories around the
            world, with a current average of 126 robots per 10,000 employees in
            the manufacturing industry, according to the International
            Federation of Robotics.
          </p>
          <img src={a4im4} alt="AirTag" />
          <p>Many, though, remained sceptical about Mr Musk's plans.</p>

          <p>
            Accel Robotics software engineer Filip Piekniewski tweeted: "Anyone
            who thinks Tesla is actually building a humanoid robot is living in
            an alternate reality.
          </p>

          <p>"Mars bases is more likely than the bot."</p>

          <p>
            And professor of cognitive robotics Tony Prescott, at the University
            of Sheffield, told BBC News Mr Musk would face many challenges.
          </p>

          <p>
            "If it is being used in a factory, then a wheel-based robot would be
            much easier to build and have no problems of balance - but then it
            wouldn't be humanoid," he said.
          </p>

          <h3> 'Research problems'</h3>
          <p>
            Keeping the robot upright would be one of the biggest issues, Prof
            Prescott said, along with creating hands and any form of hand-to-eye
            co-ordination.
          </p>

          <p>
            "These are fundamental research problems that you need to solve," he
            said.
          </p>

          <p>
            And even robots such as Atlas, designed by Boston Dynamics and
            regarded as one of the most sophisticated humanoid bots available
            "will be attached to the ceiling when it is not making videos".
          </p>
          <img src={a4im5} alt="ok" />

          <p>"Tesla cars are robots - but they are a much simpler form, so this will be starting from scratch," Prof Prescott added.</p>

          <p>Prof Winfield agrees with Mr Musk on one thing though.</p>

          <p>"The only thing that Musk is getting right is that the path towards AGI will be through physical robots," he said.</p>

          <p>"Our own intelligence is grounded in the real world."</p>

          <p>The Tesla boss's new robotics focus may disappoint some customers - in the same earnings call, he also said the company would not be introducing any new car models in 2022.</p>

          <p>And he does have a history of making rather ambitious promises.</p>

          <p>In 2019, he said Tesla would have one million robot-taxis on the road by the end of 2020.</p>
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

export default A4;
