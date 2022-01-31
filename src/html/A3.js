import React from "react";
import a3img from "../images/a3im.jpg";
import "../css/A1.css";
import A1temp from "../templates/A1";
import A2temp from "../templates/A2";
import A5temp from "../templates/A5";
import A4temp from "../templates/A4";

const A3 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>
            Spotify: Streaming giant announces plans to clamp down on Covid
            misinformation
          </h1>
          <img src={a3img} alt="AirTag" />
          <p>
            Spotify says that it is working to add advisory warnings to any
            podcast on its platform that discusses Covid-19.
          </p>

          <p>
            CEO Daniel Ek said that the new warning will redirect users to a
            data hub of coronavirus facts.
          </p>

          <p>
            The move follows criticism of its work with Joe Rogan, a US podcast
            host who has interviewed vaccine-sceptics.
          </p>

          <p>
            The platform also published existing rules which bar the streaming
            giant's contributors from sharing false information that could cause
            harm.
          </p>

          <p>
            In a statement posted to Spotify's website, Mr Ek wrote that it has
            "become clear to me that we have an obligation to do more to provide
            balance and access to widely-accepted information from the medical
            and scientific communities guiding us through this unprecedented
            time".
          </p>

          <p>
            Mr Ek said that the company had on Sunday published its
            long-standing "Platform Rules" - guidelines for creators on which
            content is considered unacceptable.
          </p>

          <p>
            They were developed by the company in conjunction with a team of
            external experts and are updated regularly, the Swedish billionaire
            said.
          </p>

          <p>
            The rules say that creators should avoid content that "promotes
            dangerous false or dangerous deceptive medical information that may
            cause offline harm or poses a direct threat to public health".
          </p>

          <p>
            These include suggesting that Covid-19 or other diseases are not
            real and encouraging people to deliberately get infected with
            coronavirus in order to build immunity.
          </p>

          <p>
            Content which breaks the rules could be removed, and repeated
            violations could lead to an account being taken down.
          </p>

          <p>
            In recent weeks the company has come under scrutiny over the views
            of its star host, Joe Rogan, who agreed a $100 million deal to move
            his popular podcast exclusively onto the platform in late 2020.
          </p>

          <p>
            Mr Rogan has discouraged vaccination in young people and promoted
            the use of the unproven anti-parasitic drug ivermectin to treat the
            virus.
          </p>

          <p>
            This week, musicians Neil Young and Joni Mitchell led a procession
            of artists demanding that their music be removed from the platform.
          </p>

          <p>
            Mr Young called the site "the home of life-threatening Covid
            misinformation" in a post to his website on Wednesday.
          </p>

          <p>
            The Duke and Duchess of Sussex have also relayed their "concerns" to
            Spotify over Covid misinformation but will continue to work with the
            platform.
          </p>

          <p>
            In early January, a group of doctors, scientists and healthcare
            professionals signed an open letter to Spotify citing Rogan's
            "concerning history" in discussing the Covid-19 pandemic.
          </p>

          <p>
            {" "}
            The Joe Rogan Experience is Spotify's most popular podcast, with a
            reported 200 million downloads a month.
          </p>
        </div>
        <div class="column right first">
          <A1temp />
        </div>
        <div class="column right first">
          <A2temp />
        </div>
        <div class="column right first">
          <A5temp />
          </div>
      </div>
    </>
  );
};

export default A3;
