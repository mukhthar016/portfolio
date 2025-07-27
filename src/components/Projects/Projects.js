import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've built recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // replace with actual image path
              isBlog={false}
              title="Vaidyakiya Sahayaka"
              description="An app that takes user input like name and sickness details, then suggests appropriate hospitals based on location and illness type."
              ghLink="https://github.com/mukhthar016/vaid" // add GitHub link
              demoLink="#" // add live demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Blog App"
              description="A full-stack blogging platform where users can post, comment, and manage their blogs. Built with authentication and user-specific content management."
              ghLink="https://github.com/mukhthar016/blog-app"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Art Gallery & Analytics"
              description="Users can upload their artwork and see how their art performs using analytics visualized in charts. Built with charts.js or Recharts."
              ghLink="https://github.com/mukhthar016/Art-gallery"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Personal Movie Collection"
              description="A movie list web app to save, rate, and describe personal movie collections. Users can mark favorites and write reviews."
              ghLink="https://github.com/mukhthar016/MOVIE_COLLECTION"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
