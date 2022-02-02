import React from "react";
import "../css/A1.css";
import a6img from "../images/a6.jpg";
import a6im2 from "../images/a6im2.png";

const A6 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>Facebook-funded cryptocurrency Diem winds down</h1>
          <img src={a6img} alt="" />
          <p>
            <b>
              Meta's experiment with cryptocurrency, Diem, is shutting down.
            </b>
          </p>
          <p>
            The Diem Association, which runs the project, announced the sale of
            assets of the cryptocurrency venture to{" "}
            <b>Slivergate Capital Corporation for $182million.</b>
          </p>
          <p>
            Launched as Libra in 2019, the project quickly ran into opposition
            from policy-makers.
          </p>
          <p>
            The association said it became clear from "dialogue with federal
            regulators" that the project could not move ahead.
          </p>
          <p>"As a result, the best path forward was to sell the Diem Group's assets, as we have done today to Silvergate," Diem chief executive <b>Stuart Levey wrote.</b></p>
          <p>The Diem Association is a separate organisation from Facebook, although its funding came from the firm.

</p>
<p>Facebook intended Diem to be a stablecoin which, as the name implies, is a type of cryptocurrency designed to be less of a financial rollercoaster, its value linked to less volatile assets such as national currencies or commodities.

</p>
<p>But that did not stop the venture causing concern.</p>
<p>"This is an alternative money," Prof Ross Buckley at the University of New South Wales told the BBC in 2019, warning that it was unlikely to get the kind of easy treatment from regulators that an in-game currency might, </p>
<p>In a research paper, Prof Buckley and colleagues argued the currency was "the ultimate example of something that is highly likely to move from 'too small to care' to 'too big to fail' in a very short period of time". </p>
<p>Regulators and politicians did indeed put Diem under the microscope.</p>
<p>Facebook's former crypto head and Diem co-creator David Marcus said on Twitter the idea might fare better with a more "acceptable" promoter.</p>
<img src={a6im2} alt="" />

        </div>
      </div>
    </>
  );
};

export default A6;
