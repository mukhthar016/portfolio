import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mukthar Ahmed Ali</span>
            {" "}from <span className="purple">Mangalore, Karnataka, India</span>.
            <br />
            I am a Computer Science graduate from PA College of Engineering.
            <br />
            I have completed an internship at ITBridge where I worked with technologies like
            React, Express, Node.js, MySQL, and deployed projects using Vercel.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am looking forward to continuously learning new skills and improving my knowledge."
          </p>
          <footer className="blockquote-footer">Mukthar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
