import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export const PanelFooter = () => {
  const [visible, setVisible] = useState("");

  const floatingBtn = (e) => {
    if (visible === "") {
      setVisible("visible");
    } else {
      setVisible("");
    }
  };

  const closeBtn = () => {
    setVisible("");
  };

  return (
    <div>
      <div className={`social-panel-container ${visible}`}>
        <div className="social-panel">
          <p>
            Creado Por: <i className="fa fa-heart"></i> Jamir - Santiago{" "}
          </p>
          <button onClick={closeBtn} className="close-btn">
            <i className="fas fa-times"></i>
          </button>
          <h4>Contactanos</h4>
          <ul>
            <li>
              <a
                href="https://twitter.com/florinpop1705"
                without
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/florinpop17"
                without
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/florinpop17"
                without
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/florinpop17"
                without
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={floatingBtn} className="floating-btn">
        Get in Touch
      </button>
    </div>
  );
};
