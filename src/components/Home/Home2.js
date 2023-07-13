import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

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
            My profound affinity lies with the captivating domains of 
            <b className="purple"> Statistics and Probability
                </b>
              <br />
              <br />I am confident in my ability to understand 
              <i>
                <b className="purple"> Data. </b>
              </i>
              <br />
              <br />
              My field of interest includes &nbsp;
              <i>
                <b className="purple">NLP, Computer Vision & Analytics </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              using <b className="purple">Python</b> with
              <i>
                <b className="purple">
                  {" "}
                  FastAPI and Python Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Pytorch, OpenCV, LangChain and SpaCy </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/SajalSinha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="discordapp.com/users/1090907042258096168"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsDiscord/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sajal-sinha/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/_sajalsinha?igshid=MmIzYWVlNDQ5Yg==9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
