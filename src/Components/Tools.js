import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {DiEclipse } from "react-icons/di";
import { 
     SiMysql, SiMicrosoftoffice, SiSpring, SiKubernetes,
    SiVisualstudiocode, SiUnrealengine, SiAdobeillustrator,
    SiFigma, SiPostman, SiAdobephotoshop, SiAdobexd, SiDocker
  } from "react-icons/si";
import "./Tools.css";

function Tools() {
  return (
    <>
    <center>
      <h1 id="tools-icon">Software Expertise</h1>
      </center>
    <Container fluid className="tools-section">
      
      <Row>
      <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiMicrosoftoffice /> {/* MS Office */}
          <p   className="tools"   >MS Office</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiSpring /> {/* Spring Boot */}
          <p  className="tools"   >Spring Boot</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiVisualstudiocode /> {/* VS Code */}
          <p  className="tools"   >VS Code</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiUnrealengine /> {/* Unreal Game Engine */}
          <p  className="tools"   >Unreal Engine</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiMysql /> {/* MySQL */}
          <p  className="tools"   >MySQL</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobeillustrator /> {/* Adobe Illustrator */}
          <p  className="tools"   >Adobe Illustrator</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <DiEclipse /> {/* Eclipse */}
          <p  className="tools"   >Eclipse</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiFigma /> {/* Figma */}
          <p  className="tools"   >Figma</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiPostman /> {/* Postman */}
          <p  className="tools"   >Postman</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobephotoshop /> {/* Adobe Photoshop */}
          <p  className="tools"   >Adobe Photoshop</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiAdobexd /> {/* Adobe XD */}
          <p  className="tools"   >Adobe XD</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiKubernetes /> {/* Kubernetes */}
          <p className="tools">Kubernetes</p>
        </Col>
        <Col xs={6} md={4} lg={3} className="tools-icons" >
          <SiDocker /> {/* Docker */}
          <p  className="tools"   >Docker</p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Tools;
