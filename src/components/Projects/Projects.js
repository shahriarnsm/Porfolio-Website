import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import iot from "../../Assets/Projects/tour.png";
import dw from "../../Assets/Projects/novaly.png";
import webscraper from "../../Assets/Projects/honda.png";
import exam from "../../Assets/Projects/eb.png";
import portfolio from "../../Assets/Projects/dc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Dental care site"
              description="This is my dental care service related website."          
              link="https://dental-care-75915.firebaseapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title="E-Bike"
              description="Generally speaking, e-bikes are bicycles with a battery-powered “assist” that comes via pedaling and, in some cases, a throttle. When you push the pedals on a pedal-assist e-bike, a small motor engages and gives you a boost, so you can zip up hills and cruise over tough terrain without gassing yourself."          
              link="https://ebike-9ec2b.web.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="tour-de-bd"
              description="Find Tour Website. The Best Resources. Unlimited Access. Always Facts. Results & Answers. Privacy Friendly. Types: Best Results, Explore Now, New Sources, Best in Search."          
              link="https://tour-de-bd.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dw}
              isBlog={false}
              title="Novaly"
              description="It is a E-commerce Website design. A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service"          
              link="https://novaly.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webscraper}
              isBlog={false}
              title="hondacb300dhk"
              description="This is a Bike show case site. I try to design it with HTML and CSS and also use a CSS framework which is boot strap"          
              link="https://hondacb300dhk.netlify.app/"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
