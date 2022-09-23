import React from "react";

export default function Info() {
  return (
    <div className="info-container">
      <header className="info-header">
        <img
          className="info-avatar"
          src="erdo-photo.jpg"
          alt="Erdogan Erdogan"
        />
      </header>
      <div className="bio">
        <h1 className="name">Erdogan Erdogan</h1>
        <p className="title">Frontend Developer</p>
        <a className="small" href="https://erdo.netlify.app/" target="_blank">
          My Portfolio
        </a>
        <div className="contacts">
          <i className="fa fa-envelope">
            {" "}
            <a href="mailto:erdoganerdogan@outlook.com" target="_blank">
              Email
            </a>
          </i>
          <i className="fa fa-linkedin-square">
            {" "}
            <a
              href="https://www.linkedin.com/in/erdogan-erdogan/"
              target="_blank"
            >
              LinkedIn
            </a>
          </i>
        </div>
      </div>
    </div>
  );
}
