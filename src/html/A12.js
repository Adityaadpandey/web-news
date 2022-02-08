import React from 'react';
import a12im1 from "../images/a12im1.jpg"
import A1temp from "../templates/A10";
import A3temp from "../templates/A11";
import A4temp from "../templates/A15";
import A5temp from "../templates/A16";

const A12 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>
            DeepMind AI rivals average human competitive coder
          </h1>
          <img src={a12im1} alt="" />
          <p><b>Google-owned artificial-intelligence company DeepMind has announced a big achievement in competitive computer programming.</b></p>
          <p>After simulating 10 contests, with more than 5,000 participants, AI system AlphaCode has ranked in the top 54% of competitors.</p>


          <p>There was still work to do to bring it up to the same level as top performing humans, DeepMind said.</p>


          <p>And its abilities could not immediately be applied to other forms of coding.</p>
          <h2>'Come true'</h2>
          <p>The problems in the competitions are not seen by the AI during training, so solving them requires a combination of critical thinking, logic, algorithms, coding and natural language understanding.</p>

          <p>Typical problems include finding ways to place roads and buildings within certain constraints, or creating strategies to win board games.</p>
          <p>DeepMind principal research scientist Oriol Vinyals said: "I have been fascinated by programming competitions my whole life."</p>

          <p>Being part of the team that built AlphaCode was "a dream come true" but he had never expected it to achieve "human average amongst competitors".</p>
          <h2>'Really hard'</h2>
          <p>Mike Mirzayanov, the founder of the platform Codeforces, which ran the competitions, called AlphaCode a "promising new competitor".</p>

          <p>"I can safely say that the results of AlphaCode exceeded my expectations," he said.</p>

          <p>"I was sceptical because even in simple competitive problems it is often required not only to implement the algorithm but also - and this is the most difficult part - to invent it."</p>

          <p>Google software engineer and competitive programmer Petr Mitrichev said: "Solving competitive programming problems is a really hard thing to do, requiring both good coding skills and problem-solving creativity."

          </p>
        </div>
        <div class="column right first">
          <A1temp />
        </div>
        <div class="column right first">
          <A3temp />
        </div>
        <div class="column right first">
          <A4temp />
        </div>
        <div class="column right first">
          <A5temp />
        </div>
      </div>
    </>
  );
};

export default A12;
