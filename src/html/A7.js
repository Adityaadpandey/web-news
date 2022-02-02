import React from 'react';
import '../css/A1.css';
import a7img from '../images/a7im1.jpg';
import A2temp from "../templates/A2";
import A3temp from "../templates/A3";
import A1temp from "../templates/A1";
import A4temp from "../templates/A4";

const A7 = () => {
  return (
      <>
      <div className="row">
        <div className="column left first">
     <h1>Epic backed by 35 US states in Apple legal rematch
     </h1>
     <img src={a7img} alt="" />
     <p><b>Fortnite-maker Epic Games has won support from 35 US states in its legal fight against Apple.</b></p>
     <p>Epic had challenged in court the up-to-30% cut Apple takes from in-app purchases - but the judge found it had failed to prove its case.</p>
     <p>The game-maker <b>appealed against the decision</b>, in September.</p>
     <p>And last week, 35 state attorneys general, Microsoft and the Electronic Frontier Foundation campaign group filed briefs in support of that appeal.</p>
     <h2>'Rigorous competition'</h2>
     <p>Epic had argued Apple's tight control of its iOS platform amounted to a monopoly. </p>
     <p>But judge Yvonne Gonzalez-Rogers said: "The court cannot ultimately conclude that Apple is a monopolist." </p>
     <p>Apple said the judgement "affirmed what we've known all along - the App Store is not in violation of anti-trust law".</p>

<p>"Apple faces rigorous competition in every segment in which we do business,and we believe customers and developers choose us because our products and services are the best in the world," it said.</p>

<p>But Epic Games' chief Tim Sweeney said the ruling was "not a win for developers or consumers" and vowed to "fight on".</p>
<h2>'Trusted marketplace'

</h2>
<p>Microsoft, the Electronic Frontier Foundation and a coalition of 35 state attorneys general all filed amicus briefs - legal documents submitted by someone not a party to the case but with an interest in it, offering information or expertise, usually with the hope of influencing the outcome.</p>

<p>In its brief, the coalition of states attorneys general, lead by Utah, say Apple is "harming mobile-app developers" and "millions of citizens" within the states' boundaries.</p>

<p>Microsoft, meanwhile, said: "Few companies... have controlled the pipe through which such an enormous range of economic activity flows."</p>

<p>The US Department of Justice also filed a separate amicus brief some commentators have argued effectively supports Epic's position.</p>

<p>Apple told BBC News: "We're optimistic that the ruling will be affirmed on appeal, and that Epic's challenge will fail.</p>

<p>"We remain committed to ensuring the App Store is a safe and trusted marketplace for consumers and a great opportunity for developers."</p>

        </div>
        <div class="column right first" >
  <A1temp />
  </div>
  <div class="column right first" >
  <A3temp />
  </div>
  <div class="column right first" >
  <A2temp />
  </div>
  <div class="column right first" >
  <A4temp />
  </div>
      </div>
      </>
  )
};

export default A7;
