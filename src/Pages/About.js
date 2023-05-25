import React from "react";

function About() {
  return (
    <div className="container">
      <h2>About Us</h2>
      <img
        src="./assests/aboutus.webp"
        alt="Girl in a jacket"
        width="85%"
        className="banner-image"
      />
      <h3>Our Vision</h3>
      <span className="desc-text">
        North America’s Professionals Consortium Inc. (NAPC) is a non-profit
        organization dedicated to providing working professionals with the tools
        and connections they need to further their personal as well as career
        goals through networking and education.
        <br />
        Although NAPC is located in the United States, it serves a community of
        members all over the world and in all parts of North America.
      </span>

      <div className="flex-display">
        <div className="flex-content">
          <img
            src="./assests/aboutus2.webp"
            alt="Girl in a jacket"
            width="90%"
            className="banner-image"
          />
          <h3>Strengthening your network business connections</h3>
          <span className="text">
            Professionals meet with each other through virtual online and
            offline events to form trust and helping one another towards
            achieving their goals. These networks help members to sow the seeds
            for reciprocal assistance
          </span>
        </div>
        <div className="flex-content">
          <img
            src="./assests/aboutus3.webp"
            alt="Girl in a jacket"
            width="90%"
            className="banner-image"
          />
          <h3>Tapping into your network for ideas</h3>
          <span className="text">
            each member’s network can be an excellent source of new perspectives
            and ideas to help you in your role. Exchanging information on
            challenges, experiences and goals is a key benefit of networking
            because it allows members to gain new insights that they may not
            have otherwise thought of. In turn, when members offer helpful ideas
            to each other, they establish themselves as experts in their field
            and build their reputation as innovative thinkers.
          </span>
        </div>
      </div>

      <img
        src="./assests/aboutus4.webp"
        alt="Girl in a jacket"
        width="85%"
        className="banner-image"
      />
      <h3>Educational opportunities</h3>
      <span className="desc-text">
        NAPC sponsors a number of colleges, universities and training centers
        that are fully dedicated to training and education NAPC’s members. This
        type of education aims at supporting its members’ careers while
        showcasing what their unique talents have to offer the world
        <br />
        Our members have full access to our online courses, meetings, and other
        events and opportunities. If you’re interested in growing your
        professional career while helping humanity, learn more about how to
        become a member today.
      </span>
    </div>
  );
}

export default About;
