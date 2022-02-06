import React from 'react';
import a14im1 from "../images/a14im1.jpg"
import a14im2 from "../images/a14im2.png"
import A1temp from "../templates/A2";
import A3temp from "../templates/A3";
import A4temp from "../templates/A11";
import A5temp from "../templates/A12";
const A14 = () => {
    return (
        <>
            <div className="row">
                <div className="column left first ">
                    <h1>Mental health helpline ends data-sharing relationship</h1>
                    <img src={a14im1} alt="" />
                    <p><b>A mental health text helpline will no longer share data with an AI customer support business, after criticism of their relationship.</b></p>
                    <p>Loris.ai used anonymised data from Crisis Text Line (CTL) to develop AI systems to help customer service agents understand sentiment in chats.</p>

                    <p>One CTL board member tweeted they had been "wrong" to agree to the relationship.</p>

                    <p>The helpline said it had listened to its community's concerns.</p>

                    <p>A similar UK helpline uses CTL software, but has been assured its data was not passed to Loris.</p>

                    <p>CTL, which is based in the US, told the BBC it ended the data-sharing relationship with Loris on 31 January, and had asked for its data to be deleted.</p>

                    <p>Its vice-president Shawn Rodriguez told the BBC: "Loris has not accessed any data since the beginning of 2020."</p>

                    <p>The use of the data gained <b>wide attention after a report by Politico.</b></p>

                    <p>In August, Loris said its "AI-powered chat solution" helped customer service representatives, "understand the customer's sentiment and dynamically crafting effective responses based on the customer's tone".</p>

                        <p>Loris added that its origins "come from the highly acclaimed Crisis Text Line, where the ability to handle the toughest conversations is critical. It is this intelligence, drawn from analysing nearly 200 million messages, that sits at the core of the AI".</p>

                        <p>The company told Politico its AI had since "evolved" to include e-commerce and other data from businesses.</p>

                        <p>CTL says any data shared was fully anonymised and scrubbed of personally-identifiable information.</p>

                    <p>The helpline says it is transparent about data sharing with its users - its terms of service and privacy policies are sent "as an automatic auto-reply to every initial text message that Crisis Text Line receives, and to which all texters consent", it said.</p>
                    <h2>Meaningful consent</h2>
                    <p>But Politico spoke to experts strongly critical of the arrangement. One questioned if those experiencing a mental health crisis could fully consent to data-sharing.</p>

                    <p>CTL "may have legal consent, but do they have actual meaningful, emotional, fully understood consent?" Jennifer King, privacy and data policy fellow from Stanford University's AI Institute, told Politico.</p>

                    <p>Some involved in CTL now also question the arrangement with Loris.</p>

                    <p>In a tweet after the article's publication board member Danah Boyd said that on reflection: "I was wrong when I agreed to this relationship." She also wrote a blog post <b><u>setting out in detail her thoughts on the issue.</u></b></p>
                    <img src={a14im2} alt="" />
                    <p>CTL has now ended data-sharing. It said in <b>a statement on its website</b> it had "listened closely to our community's concerns".</p>

                    <p>CIt said it was making changes and working to increase transparency for users: "We heard your feedback that it should be clear and easy for anyone in crisis to understand what they are consenting to when they reach out for help," it said.</p>

                    <p>CThe helpline says it has had more than 6.7 million conversations with people in need of help.</p>

                    <p>CAnd Mr Rodriguez wrote that "the power of data and artificial intelligence" remained central to CTL's work assisting those in need of mental health support.</p>

                    <p>CData was used to identify those at risk and get them help as fast as possible, he said.</p>

                        <p>C"And, data is used successfully to de-escalate tens of thousands of texters in crisis experiencing suicidal ideation," he added.</p>
                    <h2>UK data</h2>
                    <p>CTL's technology is used by other organisations including UK-based Shout 85258, which offers a free text messaging mental health support service.</p>

                    <p>The charity recently announced it has passed one million conversations with people needing support.</p>

                    <p>It told the BBC that only thoroughly anonymised data was shared with CTL, and that its data - which is held on secure servers in London - had not been given to Loris.</p>

                    <p>Shout says "a strict data transfer agreement with CTL" only allows the US hotline to use the data to provide and improve a "technology platform for delivery of the Shout service" which the charity licenses on a pro-bono basis.</p>

                    <p>CTL also told the BBC: "No UK users were affected by the sharing of our anonymised US data with Loris".</p>

                        
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

export default A14;
