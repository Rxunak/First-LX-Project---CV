import React from "react";
import "../Styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="foot-container">
      <div className="div1">© 2023 Company, Inc</div>
      <div className="div2">
        <a className="icon" href="https://facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="icon" href="https://instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="icon" href="https://twitter.com" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
