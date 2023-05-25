import React from "react";

function Membership() {
  return (
    <div className="container">
      <h2>Our Membership</h2>
      <img
        src="./assests/thumbsup.webp"
        alt="Girl in a jacket"
        width="85%"
        className="banner-image"
      />
      <h3>Who can be a member</h3>
      <span class="desc-text">
        North America’s Professionals Consortium Inc. (NAPC) welcomes members
        from all over teh world as long as they meet the minimum rfequirements
        for each type of membership and abide by our rules. If you want to
        improve your professional network, get specialized education in
        different fields, and extend a helping hand to like minded professionals
        in various fields, apply for one of our membership options TODAY.
        <br />
        Contact us or fill out the form below if you have any questions about
        membership options.
      </span>
      <div className="flex-display">
        <div>
          <img
            src="./assests/membership2.webp"
            alt="Girl in a jacket"
            width="90%"
            className="banner-image"
          />
          <h3>Affiliate Member</h3>
          <span>Requirements for becoming an affiliate member</span>
          <ul className="list-items">
            <li className="list-item">
              Must be a high school graduate or have obtained your GED.
            </li>
            <li className="list-item">
              Submit a 500-word personal statement discussing why you wish to
              become a member of the North America’s Professionals Consortium
              Inc. (NAPC) and what you hope to achieve as a member.
            </li>
            <li className="list-item">No membership fee or annual dues</li>
          </ul>
        </div>
        <div>
          <img
            src="./assests/membership3.webp"
            alt="Girl in a jacket"
            width="90%"
            className="banner-image"
          />
          <h3>Associate Member</h3>
          <span>Requirements for becoming an associate member:</span>
          <ul className="list-items">
            <li className="list-item">
              Must have earned at least 60 college credit hours.
            </li>
            <li className="list-item">
              Submit a 500-word personal statement discussing why you wish to
              become a member of the North America’s Professionals Consortium
              Inc. (NAPC) and what you hope to achieve as a member.
            </li>
            <li className="list-item">No membership fee or annual dues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Membership;
