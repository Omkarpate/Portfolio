import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textutils from "../../Assets/Projects/textutils.jpg";
import gym from "../../Assets/Projects/gym.jpg";
import bank from "../../Assets/Projects/bank.avif";
import registration from "../../Assets/Projects/registration.avif";
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
              imgPath={gym}
              isBlog={false}
              title="Force Fitness"
              description="This is the Official website of Force Fitness.Here you can take admission inthe gys.here are the login,about,contact us pages.Its been build using Html,Css,Js and Bootstrap. "
              ghLink="https://github.com/Omkarpate/Simple-UI"
              demoLink="https://omkarpate.github.io/Simple-UI/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Bank Of Spark"
              description="This is the Official Website of Bank of Spark.Using this one can carry out transactions,can pay bills,add money,check balance etc.This is my personal project that i had completed during my Internship."
              ghLink="https://github.com/Omkarpate/Bank-system"
              demoLink="https://bankofspark.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={registration}
              isBlog={false}
              title="Registration Form"
              description="
    Its an Simple Registration form developed using React.The Basic features are like it checks the input fields,if input fields are empty,the form couldn't be submitted and also the pop-up message after submitting the form.This is the simple React-app"
              ghLink="https://github.com/Omkarpate/Registration-Form"
              demoLink="https://registrationf.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Textutils"
              description="Its an simple project which mainly works with text.Here input is taken in the form of text and is further processed.also the text is converted to lower-case or higher-case,if extra space is there is removed,words are counted,time to read those words is estimated etc"
              ghLink="https://github.com/Omkarpate/Textutils"
              demoLink=""
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
