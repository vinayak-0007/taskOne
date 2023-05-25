import React from "react";
import images from "../assets/aboutUS.webp";
import { TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
function Home() {
  return (
    <>
      <div className="homeMainContainer">
        <div className="homeWrapper">
          <p>+1(302) 400-0833</p>
          <div className="headerHeader">
            <h1>Join similar-minded</h1>
            <h1>professionals across the globe!</h1>
          </div>
          <h3>Help and be helped!</h3>
          <button className="contactButton">Contact us</button>
        </div>
      </div>
      <div className="aboutUsSection">
        <h3>About us</h3>
        <div className="aboutInfo">
          {/* <div className="first"> */}
          <img style={{ width: "450px" }} src={images} alt="" />
          <div className="firstContent">
            <h4>Why Join?</h4>
            <p>
              North America's Professionals Consortium Inc. (NAPC) The place
              where professionals meet for learning, networking and sharing of
              knowledge
            </p>
          </div>
          {/* </div>
          <div className="second"> */}
          <div className="firstContent">
            <h4>Grow with us!</h4>
            <p>
              NAPC is open to new members from all over the world to meet in the
              virtual realm and share their aspirations and knowledge to improve
              the quality of their professional career and social life in
              different fields.
            </p>
          </div>
          <img style={{ width: "450px" }} src={images} alt="" />
          {/* </div>
          <div className="third"> */}
          <img style={{ width: "450px" }} src={images} alt="" />
          <div className="firstContent">
            <h4>Members Benefits</h4>
            <p>
              The North America’s Professionals Consortium Inc. (NAPC) was
              founded to help professionals like you to come together to learn,
              teach each other and provide value for one another. We are
              dedicated to helping working professionals fulfill their goals and
              expand their horizons beyond the limitations of every day working
              schedules.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="chineseSection">
        <div className="chineseContent">
          <p>""</p>
          <h3>
            Only when all contribute their firewood can they build up a strong
            fire
          </h3>
          <p></p>
          <p>Chinese Proverb</p>
        </div>
      </div>
      <div className="contactUsSection">
        <h3>Contact US</h3>
        <h4>Drop us a line!</h4>
        <form action="">
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <Textarea label="Message" minRows={2} />
          <button className="contactButton">Contact us</button>
        </form>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
      <div className="betterYet">
        <div className="headBetterYet">
          <h4>Better yet, see us in person!</h4>
          <p>
            We love our customers, so feel free to visit during normal business
            hours.
          </p>
        </div>
        <div className="contentBetterYet">
          <div className="leftContentBetterYet">
            <h3>North America's Professionals Consortium</h3>
            <p>
              2803 Philadelphia Pike B # 4246 Claymont, DE 19703 United States
            </p>
            <p>+1(302) 400-0833</p>
          </div>
          <div className="rightContentBetterYet">
            <h3>Hours</h3>
            <div className="timeTableHours">
              <p>Mon 09:00 am - 05:00 pm</p>
              <p>Tue 09:00 am - 05:00 pm</p>
              <p>Wed 09:00 am - 05:00 pm</p>
              <p>Thu 09:00 am - 05:00 pm</p>
              <p>Fri 09:00 am - 05:00 pm</p>
              <p>Sat Closed</p>
              <p>Sun Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
