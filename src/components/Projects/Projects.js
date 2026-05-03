import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FinTrace AI"
              description="FinTrace AI is a graph-based fraud detection platform designed to uncover complex financial crime patterns.
              Implemented using React.js and Flask API for dynamic UI, real-time insights, and robust backend services."
              ghLink="https://github.com/manibhushan-codes/FinTraceAI"
              demoLink="https://finance-mule-detection.vercel.app/"
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Attendance Management System "
              description="Designed and developed a MERN stack attendance system with centralized data management.
              Integrated Python-based face recognition for accurate and automated attendance capture.
              Optimized performance for real-time processing and seamless user interaction."
              ghLink="https://github.com/manibhushan-codes/Attendance-System_MERN"
              demoLink="https://attendance-system-mern.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Startup Growth Predictor"
              description="Developed a machine learning model in Python using Scikit-learn to predict 
              startup growth. Performed data cleaning, feature engineering, and exploratory data 
              analysis (EDA) to uncover key growth factors. Trained and evaluated multiple models to 
              provide actionable insights for data-driven business decisions."
              ghLink="https://github.com/manibhushan-codes/Startup-Growth-Predictor"
              demoLink="https://startup-growth-predictor.onrender.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
