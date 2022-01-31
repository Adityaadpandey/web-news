import React from "react";
import "../css/A1.css";
import a5im1 from "../images/a5im1.gif";
import A2temp from "../templates/A2";
import A3temp from "../templates/A3";
import A1temp from "../templates/A1";
import A4temp from "../templates/A4";

const A5 = () => {
  return (
    <>
      <div className="row">
        <div className="column left first">
          <h1>Google slammed over ad-cookie replacement flip-flop</h1>
          <img src={a5im1} alt="AirTag" />
          <p>
            <b>
              Google's "indecision" over what system it wants to replace cookies
              has been criticised by some in the ad industry.
            </b>
          </p>
          <p>
            It comes as the technology giant said an interest-based
            user-tracking system, Topics, would now replace its earlier
            proposal, Floc.
          </p>

          <p>
            One marketing executive said: "This constant indecision does not
            inspire confidence."
          </p>

          <p>
            Third-party cookies use people's browsing history to target ads that
            then follow them from site to site.
          </p>

          <p>
            Privacy advocates and regulators have increasingly fought against
            them.
          </p>

          <p>
            And Google has agreed to restrict their number on websites accessed
            via its Chrome browser, which commands about 65% of market share.
          </p>

          <p>
            It had originally planned to block them from this year but postponed
            the move until 2023.
          </p>
          <h3>'Half-baked idea'</h3>

          <p>Floc (Federated Learning of Cohorts) aimed to disguise users' individual identities by assigning them to a group, or flock, with similar browsing histories.</p>

          <p>But the idea was unpopular with both privacy advocates and advertisers</p>

          <p>Farhad Divecha, founder of digital marketing agency AccuraCast said it "didn't make sense to most advertisers, who aren't technical data analysts".</p>

          <p>"The system was met with a lot of criticism when Google launched it," he said, "and it largely felt like a half-baked idea Google prematurely pushed out the door in response to changes in advertising and privacy."</p>

          <p>"The past year has made it fairly clear that Google still aren't really sure of the best way forward."</p>
          <h3>Sensitive interests</h3>
          <p>In a blogpost, Google confirmed Floc would now be replaced by Topics, a similar system that would group users in topic clusters, selected out of about 350 categories such as fitness or travel.</p>

          <p>Topics pinpoints users' interests and stores these for three weeks before deleting them.</p>

          <p>When someone visits a website, Topics will show the site and its advertising partners three of their interests from the previous three weeks.</p>

          <p>But it would not share sensitive interests, such as gender or race, Google said.</p>
         <h3> Target users</h3>
         <p>And users would be able to remove ones they did not like - or disable the feature entirely.</p>

         <p>But one advertising-technology company questioned how Topics would help advertisers better target users.</p>

         <p>"Google's latest proposal on Topics is limited to one channel - its Chrome browser - and can't be applied to the multiple devices the majority of consumers use to access the open internet," The Trade Desk UK vice-president Phil Duffield said.</p>

         <p>"This means that advertisers are restricted to basic targeting approaches."</p>

<h3>'Lip service'</h3> 
<p>Meanwhile, Bennet Cyphers, of the Electronic Frontiers Foundation, told The Verge while better than Floc, Topics would "still tell third-party trackers what kind of sites you browse".</p>

<p>And privacy-focused browser Brave, which has 50 million active users, said Google's change of plan was really just more of the same.</p>

<p>"The Topics API [application programming interface] is, at root, the same idea as Floc," wrote the company's director of privacy, Peter Snyder.</p>

<p>"In both proposals, the browser watches the sites you visit, uses that information to categorise your browsing interests, and then has the browser share that info back with advertisers."</p>

<p>And it was not up to Google to be "the arbiter of what users consider 'sensitive' data".</p>

<p>"People should decide what they consider sensitive - not Google," Mr Snyder said.</p>

<p>And Google's efforts were simply "paying lip service to protecting the open web" while maintaining their dominance.</p>
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
  );
};

export default A5;
