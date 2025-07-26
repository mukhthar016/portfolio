import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm Mukthar — a curious and driven developer who enjoys building useful and intuitive web experiences.
              <br />
              <br />
              I work comfortably with
              <i>
                <b className="purple"> JavaScript, HTML, CSS, React, Node.js, and C++</b>
              </i>
              , and I’m always exploring new tech that helps me improve how things work under the hood.
              <br />
              <br />
              I'm especially passionate about crafting scalable applications, backend logic, and clean UI that just feels right.
              <br />
              <br />
              When I’m not coding, I’m usually experimenting with tools like <b className="purple">Postman</b>, <b className="purple">Thunder Client</b>, or deploying projects via <b className="purple">Vercel</b>. I believe in building things that solve real problems — and in learning while doing.
              <br />
              <br />
              If you’re into development, ideas, or just want to talk tech — feel free to reach out!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              I'm always open to connecting with fellow devs, collaborators, or anyone curious. Reach out on any of these:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mukhthar016"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MuktharAhm67950"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mukthar-ahmed-ali-120500258/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mukhtharahmedali/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
