import React from "react";
import a20im1 from "../images/a20im1.jpg";
import A1temp from "../templates/A10";
import A3temp from "../templates/A11";
import A4temp from "../templates/A15";
import A5temp from "../templates/A16";

const A20 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>Early Facebook investor Peter Thiel is leaving Meta’s board</h1>
          <img src={a20im1} alt="" />
          <p>
            <b>
              Facebook-parent Meta Platforms Inc said on Monday that billionaire
              investor Peter Thiel, an early investor who has been on the
              company's board since 2005, has decided to retire.
            </b>
          </p>
          <p>
            {" "}
            Facebook-parent Meta Platforms Inc said on Monday that billionaire
            investor Peter Thiel, an early investor who has been on the
            company’s board since 2005, has decided to retire. Thiel aims to
            spend time helping elect candidates who he believes will advance
            former President Donald Trump’s agenda in the US midterms, the
            Congressional elections this year, a person familiar with the
            situation said.
          </p>

          <p>
            Thiel, a co-founder of online payments system PayPal and a rare
            voice of conservative politics in Silicon Valley, became a Facebook
            investor in 2004, when he provided $500,000 in capital at a $5
            million valuation for a 10% stake in the company and a seat on its
            board of directors. Thiel will serve as a director until Meta’s
            annual shareholder meeting but will not to stand for re election,
            the social media giant said.
          </p>

          <p>
            “Peter is truly an original thinker who you can bring your hardest
            problems and get unique suggestions,” Chief Executive Officer Mark
            Zuckerberg said, thanking Thiel for his service. The announcement
            comes as Meta’s shares have fallen sharply over concerns that
            privacy changes to Apple products were making it harder for
            advertisers to see how their ads work on Facebook.
          </p>

          <p>
            The stock fell 5.1% on Monday, and has lost a third of its value
            this year, but is still worth more than $600 billion. Thiel left
            with kind words for Zuckerberg. “His talents will serve Meta well as
            he leads the company into a new era,” Thiel said in the statement
            announcing his departure from the board.He did not respond to a
            request seeking further comment.
          </p>

          <p>
            Thiel plans in particular to help Blake Masters, a Republican
            candidate hoping to unseat Democratic US Sen Mark Kelly of Arizona,
            the person familiar with the situation said. He was also backing
            J.D. Vance, author of the best-selling memoir “Hillbilly Elegy” and
            a Republican Senate candidate in Ohio, the person said.
          </p>

          <p>
            In recent years, Thiel’s position on the board has been in the
            spotlight, given his conservative views, as the company has been
            caught up in political controversies and backlash.
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

export default A20;
