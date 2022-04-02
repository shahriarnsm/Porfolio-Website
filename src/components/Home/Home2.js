import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub,AiFillPhone} from "react-icons/ai";
import {GrMail} from 'react-icons/gr'
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
              Hello Everyone! This is <span className="purple">M Shahriar Ishtiaque.</span> I am
              from <span className="purple"> Dhaka, Bangladesh.</span>
              <br />I am a  pursuing Engineering in<span className="purple"> CSE</span> from 
              <span className="purple"> Daffodil International University.</span>
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Roaming around with friends
              </li>
              <li className="about-activity">
                <ImPointRight /> Reading Tech Blogs or Articles
              </li>
              <li className="about-activity">
                <ImPointRight /> Playing Video Games
              </li>
            </ul>

            <div class="quote">
              <blockquote>
                <p style={{ color: "#ff4da6",marginLeft:25  }}>
                Smart people fly like an Egale & <br/> An Egale flies alone!{" "}
                </p>
              </blockquote> 
              <span style={{color:"#f5f5f5"}}>- My Motto</span>
        
            </div>
            </blockquote>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="myAvatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shahriarnsm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shahriarnsm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="m15-12938@diu.edu.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <GrMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="+8801774810967"
                  style={{ color: "#222" }}
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
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
