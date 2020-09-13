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
          <p>Creado por:</p>
          <button onClick={closeBtn} className="close-btn"></button>
          <h4>Jamir & santiago</h4>

          <ul>
            <li>
              <a
                href="www.linkedin.com/in/jamir-patiño-carrascal-"
                without
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/jamir2308"
                without
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/gozantia/"
                without
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Gozantia"
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
        Contactanos
      </button>
    </div>
  );
};
