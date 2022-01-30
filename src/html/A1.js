import React from "react";
import "../css/A1.css";
import apple from "../images/A1.png";
import A1temp from "../templates/A2";


const A1 = () => {
  return (
    <>
    <div class="row">
  <div class="column left first">
  <h1>Apple unveils AirTag safety guide amid stalker fears</h1>
      <img src={apple} alt="AirTag" />
      <p>
        Apple has released an updated safety guide amid ongoing concerns over
        the company's AirTag devices.
      </p>

      <p>
        The company quietly released the safety portal on Monday. The Personal
        User Safety Guide offers advice on how people can keep themselves and
        their data safe.
      </p>

      <p>
        AirTags are designed to locate lost items using Apple's powerful 'Find
        My' network.
      </p>

      <p>
        They are small button-shaped items that can be attached to keys or a
        wallet.
      </p>

      <p>
        However, the other outlets have previously found evidence that AirTags
        have been misused to track people.
      </p>

      <p>
        Apple's new Personal User Safety Guide offers support for people who are
        "concerned about or experiencing technology-enabled abuse, stalking or
        harassment".
      </p>

      <p>
        The guide says it offers "step-by-step" instructions on how users can
        protect themselves.
      </p>

      <p>
        Apple AirTags - 'A perfect tool for stalking' Its AirTags section shows
        users what to do if they are alerted to an unwanted AirTag - a
        notification that appears on the screen of an iPhone.
      </p>

      <p>
        It also highlights what to do if you hear or find an AirTag that doesn't
        belong to you. The guide shows Android users how they can download an
        app that will help alert users to rogue AirTags.
      </p>

      {/* Last week the BBC reported that several women had been notified that AirTags were tracking them without their knowledge. */}

      <p>One woman said she found an AirTag taped to the inside of her bag.</p>

      <p>
        Eva Galperin, director of Cyber-Security at the Electronic Frontier
        Foundation: "If you create an item which is useful for tracking stolen
        items, then you have also created a perfect tool for stalking."
      </p>
  </div>
  <div class="column right first" >
  <A1temp />
  </div>
</div>

  </>
  );
};

export default A1;
