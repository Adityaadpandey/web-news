import React from "react";
import a19im1 from "../images/a19im1.jpg"

const A19 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>
            Arm-Nvidia deal: UK orders further inquiry
          </h1>
          <img src={a19im1} alt="" />
          <p><b>A $40bn (£29bn) takeover of UK chip designer Arm by US giant Nvidia will be subject to an in-depth inquiry by the UK's competition watchdog.</b></p>
          <p>Citing security and competition concerns, Digital Secretary Nadine Dorries told the Competition and Markets Authority (CMA) to launch a phase two investigation.</p>

          <p>An initial inquiry by the CMA found "significant competition concerns".</p>

          <p>Nvidia said, however, that the merger would boost competition and innovation.</p>

          <p>The firm said in a statement: "We will continue to work with the UK government to resolve its concerns".</p>

          <p>"The phase two process will enable us to demonstrate that the transaction will help to accelerate Arm and boost competition and innovation, including in the UK", Nvidia said.</p>
          <p>Chips based on Arm's designs are used in a wide range of applications, including in the silicon inside many Apple products.</p>

          <p>Announcing her decision, Ms Dorries said: "Arm has a unique place in the global technology supply chain and we must make sure the implications of this transaction are fully considered."</p>

          <p>"The CMA will now report to me on competition and national security grounds and provide advice on the next steps."</p>

            <p>In a letter to both Arm and Nvidia setting out the reasons for the decision, officials provided more detail on the national security concerns.</p>

            <p>It suggested that the deal could see a "potential reduction of the UK's autonomy to develop, operate or support defence and security systems that utilise Arm IP (intellectual property)".

            </p>
        </div>

      </div>
    </>
  );
};

export default A19;
