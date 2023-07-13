import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
         
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SajalSinha"
                style={{ color: "white" }}
                target="_blank" 
                /*rel="noopener noreferrer"*/
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="discordapp.com/users/1090907042258096168"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sajal-sinha/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/_sajalsinha?igshid=MmIzYWVlNDQ5Yg==9"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
