import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Resume.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../Asset/coding-.png";
import pdfFile from "../Asset/98620468.pdf";

function Resume() {
  function downloadFile() {
    window.open(pdfFile);
  }

  document.getElementsByClassName("cvbtn").innerHTML = "WORKED";
  return (
    <div className="r-container">
      <div className="cont1">
        <div className="r1">
          <h2 className="rh2">
            Hi, I am Raunak, a IT Assistant and Frontend Developer
          </h2>
          <button className="cvbtn" onClick={downloadFile}>
            Download CV
          </button>
        </div>
        <div className="r2">
          <img className="image" src={image} alt="" />
        </div>
      </div>

      <div className="cont2">
        <h1 className="ex">Experience</h1>
        <div className="cont3">
          <div className="f1">
            <a className="ic1" href="">
              <FontAwesomeIcon icon={faCode} />
            </a>
            <h1 className="f1h">Programming</h1>
            <p className="rp1">
              Experienced and versatile programmer with a proven track record in
              software development.Proficient in multiple languages, frameworks,
              and methodologies, with a strong emphasis on problem-solving and
              innovation.
            </p>
          </div>
          <div className="f2">
            <a className="ic1" href="">
              <FontAwesomeIcon icon={faLaptop} />
            </a>
            <h1 className="f1h">IT Help Desk</h1>
            <p className="rp1">
              Experienced and versatile programmer with a proven track record in
              software development.Proficient in multiple languages, frameworks,
              and methodologies, with a strong emphasis on problem-solving and
              innovation.
            </p>
          </div>
          <div className="f3">
            <a className="ic1" href="">
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
            <h1 className="f1h">Computer Science Degree</h1>
            <p className="rp1">
              Experienced and versatile programmer with a proven track record in
              software development.Proficient in multiple languages, frameworks,
              and methodologies, with a strong emphasis on problem-solving and
              innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="maindiv">
        <h1 className="rhh1">Let's talk</h1>
        <h2 className="rhh2">Have you got any offer for me?</h2>
        <p className="rp11">
          If you think I am the best candidate, please contact me. I would love
          to talk
        </p>
        <button className="cvtn">
          <a className="btn1" href="mailto:raunakuk2016@gmai;l.com">
            Contact Me
          </a>
        </button>
      </div>
    </div>
  );
}

export default Resume;
