import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const pdf = "/Mukthar-Ahmed-Ali-Resume.pdf"; // Place resume.pdf inside /public folder//C:\Users\Mukthar Ahmad Ali\portfolio\Portfolio\public\Mukthar-Ahmed-Ali-Resume.pdf

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ====== Resume Download Button ====== */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* ====== Resume Preview ====== */}
        <Row className="resume mt-4">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* ====== Video Resume Section (Thumbnail with Link) ====== */}
<Row style={{ justifyContent: "center", position: "relative" }}>
  <Col md={6} className="d-flex flex-column align-items-center">
    <a
      href="https://www.youtube.com/watch?v=XOLMKzWLPxs"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textAlign: "center", textDecoration: "none" }}
    >
      <img
        src={`https://img.youtube.com/vi/XOLMKzWLPxs/hqdefault.jpg`}
        alt="Video Resume Thumbnail"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          cursor: "pointer"
        }}
      />
    </a>

    {/* Styled button below the thumbnail */}
    <Button
      variant="primary"
      href="https://www.youtube.com/watch?v=XOLMKzWLPxs"
      target="_blank"
      style={{
        marginTop: "15px",
        maxWidth: "250px"
      }}
    >
      ▶ Watch Video Resume
    </Button>
  </Col>
</Row>


        {/* ====== Bottom Download Button ====== */}
        
      </Container>
    </div>
  );
}

export default ResumeNew;
