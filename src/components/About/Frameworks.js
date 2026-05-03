import React from "react";
import { Col, Row } from "react-bootstrap";
import TensorFlow from "../../Assets/TechIcons/TensorFlow.svg";

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons ">
        <img src={TensorFlow} alt="TensorFlow" className="tech-icon-images" />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>

    </Row>
  );
}

export default Frameworks;




