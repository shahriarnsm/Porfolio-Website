import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/NSM_Cv.pdf";
import { AiOutlineDownload , AiFillStar} from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              date=""
              content={[
                "comming soon",
              ]}
            />
            
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Founding member of DIU DISRUPTORS CLUB"
              content={[
                "Assistant General Secretary"
              ]}
            />
            <Resumecontent
              title="Mentor at DIU Battle of Mind 2.0 "
              content={[
                "AI based Face Recognition Android Application",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Undergradutaion"
              date="Daffodil international University "
              content={[`2019 - 2023`]}
            />
            <Resumecontent
              title="Higher Secondary Certificate"
              date="BAF Shaheen College, Dhaka"
              content={[`2016 - 2018`]}
            />
            <Resumecontent
              title="Secondery School Certificate"
              date="BAF Shaheen College, Dhaka"
              content={[`2016 - 2018`]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
