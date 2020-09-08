import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export const PanelFooter = () => {
  const social_panel_container = document.querySelector(
    ".social-panel-container"
  );

  const floatingBtn = () => {
    social_panel_container.classList.remove("visible");
  };

  const closeBtn = () => {
    social_panel_container.classList.remove("visible");
  };
  return (
    <div>
      <div className="social-panel-container">
        <div className="social-panel">
          <p>
            Creado Por: ==)<i className="fa fa-heart"></i>by Jamir - Santiago{" "}
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
