import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, c, Python, JavaScript and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My core interests lie in developing modern
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, designing AI & Machine Learning Models,{" "}
                </b>
              </i>
              Guided by curiosity and a problem-solving mindset, I focus on
              creating solutions that combine technical precision with user-friendly
              design.
              <br />
              <br />
              Whenever possible, I love exploring new approaches to <b className="purple"> System design</b> and
              applying them in practice. I’m equally passionate about leveraging 
              <b className="purple"> AI/ML models</b> to create intelligent,
              efficient solutions that enhance both performance and automation.{" "}
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
