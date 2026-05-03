import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCard";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {   
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Experiences I'd recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Java Full Stack Developer"
              description="Engineered a payment gateway system using Java, applying full stack development principles.
                Ensured secure payment handling, efficient backend processing, and responsive UI integration."
              ghLink="https://github.com/manibhushan-codes/Attendance-System_MERN"
              demoLink="https://drive.google.com/file/d/1sFxBzjUT6f2ePAmnAcndl-GJ6I9AlQc2/view?usp=drivesdk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Data Science Intern"
              description="Developed a machine learning model in Python using Scikit-learn to predict 
              startup growth. Performed data cleaning, feature engineering, and exploratory data 
              analysis (EDA) to uncover key growth factors. Trained and evaluated multiple models to 
              provide actionable insights for data-driven business decisions."
              ghLink="https://github.com/manibhushan-codes/Startup-Growth-Predictor"
              demoLink="https://drive.google.com/file/d/1cOWgRN1oED7WeGqfTu0rYUtp5pw5AMoZ/view?usp=drivesdk"
            />
          </Col>

        </Row>
      </Container>

    </Container>
  );
}

export default Projects;
