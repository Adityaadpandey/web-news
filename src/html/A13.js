import React from "react";
import a13im1 from "../images/a13im1.jpg";
import A1temp from "../templates/A2";
import A3temp from "../templates/A3";
import A4temp from "../templates/A5";
import A5temp from "../templates/A4";

const A13 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>
            Andrew Forrest: Australian billionaire launches criminal case
            against Facebook
          </h1>
          <img src={a13im1} alt="" />
          <p>
            <b>
              An Australian billionaire has launched a criminal case against
              Facebook, alleging the company failed to prevent scam ads that
              used his image.
            </b>
          </p>
          <p>
            Andrew Forrest argues Facebook breached Australian anti-money
            laundering laws over the spread of cryptocurrency cons.
          </p>

          <p>
            He said it was the first time Facebook was facing a criminal case
            globally.
          </p>

          <p>
            Facebook's owner, Meta, did not comment on Dr Forrest's case but
            said it was "committed to keeping those people [scammers] off our
            platform".
          </p>

          <p>
            Dr Forrest, who is chairman of miner Fortescue Metals, alleged
            Facebook had been "criminally reckless" in not doing more to halt
            the ads, which first appeared in early 2019.
          </p>

          <p>
            The scams use his image - and those of other celebrities - to
            promote bogus investments that promise riches. Although Facebook
            bans such ads, many still appear on the platform.
          </p>

          <p>
            Dr Forrest said he had also written an open letter to Facebook boss
            Mark Zuckerberg in November 2019, urging him to take more action.
          </p>
          <ul>
            <li>Facebook sees daily users fall for first time ever</li>
            <li>Social giant becomes Meta in major rebrand</li>
            <li>Meta monopoly case given go-ahead in US</li>
          </ul>
          <p>
            "I'm concerned about innocent Australians being scammed through
            clickbait advertising on social media," the mining magnate said in a
            statement on Thursday.
          </p>

          <p>
            "I'm acting here for Australians, but this is happening all over the
            world."
          </p>

          <p>
            The case will be heard in the Magistrates Court of Western Australia
            from 28 March. If it is successful, Facebook could face fines or be
            forced to change its advertising.
          </p>

          <p>
            Dr Forrest has also filed a civil lawsuit in the US state of
            California, where Facebook is headquartered.
          </p>

          <p>
            In that lawsuit he alleges that Facebook "knowingly profits from
            this cycle of illegal ads", The Australian newspaper reported.
          </p>

          <p>
            One victim in Australia had lost $670,000 (£495,000; A$940,000)
            because of a fake endorsement featuring Dr Forrest, the newspaper
            said, citing court documents.
          </p>

          <p>
            In a statement to media, the social media company said that scam ads
            violated its policies.
          </p>

          <p>
            "We take a multifaceted approach to stop these ads, we work not just
            to detect and reject the ads themselves but also block advertisers
            from our services and, in some cases, take court action to enforce
            our policies," a Meta representative said.
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

export default A13;
