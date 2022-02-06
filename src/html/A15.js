import React from "react";
import a15im1 from "../images/a15im1.jpg";
import a15im2 from "../images/a15im2.jpg";
import A1temp from "../templates/A2";
import A3temp from "../templates/A3";
import A4temp from "../templates/A5";
import A5temp from "../templates/A4";

const A15 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>European oil facilities hit by cyber-attacks</h1>
          <img src={a15im1} alt="" />
          <p>
            <b>
              Multiple oil transport and storage companies across Europe are
              dealing with cyber-attacks.
            </b>
          </p>
          <p>
            IT systems have been disrupted at Oiltanking in Germany, SEA-Invest
            in Belgium and Evos in the Netherlands.
          </p>

          <p>
            In total dozens of terminals with oil storage and transport around
            the world have been affected, with firms reporting that the attacks
            occurred over the weekend.
          </p>

          <p>
            But experts caution against assuming this is a co-ordinated attack.
          </p>

          <p>
            The BBC understands that all three companies' IT systems went down
            or were severely disrupted.
          </p>

          <p>
            Belgian prosecutors say they are investigating the cyber-attack
            that's affected SEA-Invest terminals including the company's largest
            in Antwerp, called SEA-Tank.
          </p>
          <p>
            A spokeswoman for the company said they were hit on Sunday with
            every port they run in Europe and Africa affected.
          </p>

          <p>
            The company is working to get a back-up IT system online but says
            that most liquid transportation is operational.
          </p>

          <p>
            The spokeswoman said SEA-Invest is aware of the cyber-attacks
            against other companies but investigations have not determined if
            there is a link.
          </p>

          <p>
            A spokesperson for Evos in the Netherlands told the BBC that IT
            services at terminals in Terneuzen, Ghent and Malta have "caused
            some delays in execution".
          </p>

          <h2> Limited capacity</h2>
          <p>
            On Monday Oiltanking Deutschland GmbH & Co. KG, which stores and
            transports oil, vehicle fuels and other petroleum products, said it
            had been hacked.
          </p>

          <p>
            The company was forced to operate at a "limited capacity" and was
            investigating the incident, it said.
          </p>

          <p>
            Some reports suggest the attack on Oiltanking is ransomware, where
            hackers scramble data and make computer systems inoperable until
            they get paid a ransom.
          </p>

          <p>
            In May last year a ransomware attack on US oil supplier Colonial
            Pipeline saw supplies tighten across the US and multiple states
            declaring an emergency.
          </p>
          <img src={a15im2} alt="" />

          <p>
            An employee of a major barging company in the Netherlands told the
            BBC that port supply chains were disrupted.
          </p>

          <p>
            The worker said they first noticed problems on Tuesday when oil
            deliveries started slowing down. He said "things are moving but much
            slower than normal".
          </p>
          <h2>No conclusions</h2>
          <p>
            The disruption comes as tensions remain high between Ukraine and
            Russia and as concern over rising energy prices grows.
          </p>

          <p>
            But cyber-security experts caution against jumping to the conclusion
            that the multiple incidents are the result of a co-ordinated effort
            to disrupt the European energy sector.
          </p>

          <p>
            "Some types of malware scoop up emails and contact lists and use
            them to automatically spam malicious attachments or links, so
            companies with shared connections can sometimes be hit in quick
            succession," said Brett Callow, Threat Analyst at cyber-security
            company Emsisoft.
          </p>

          <p>
            "This is why you sometimes see sector-based or geographic-based
            clusters of incidents."
          </p>

          <p>
            Another possible explanation could be that all the companies use the
            same software for operations that may have been compromised by
            hackers.
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

export default A15;
