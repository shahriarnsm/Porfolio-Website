import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {GrMail} from 'react-icons/gr'
import {AiFillGithub,AiFillPhone} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by M Shahriar Ishtiaque</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/shahriarnsm"
                style={{ color: "#222" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shahriarnsm/"
                style={{ color: "#222" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="m15-12938@diu.edu.bd"
                style={{ color: "#222" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GrMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="+8801774810967"
                style={{ color: "#222" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
