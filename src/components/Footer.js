import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Emanuele Mezzi</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} EM</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                    href="https://github.com/EMezzi"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/emanuele-mezzi"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://scholar.google.com/citations?user=4aYC468AAAAJ&hl=en"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <SiGooglescholar />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;