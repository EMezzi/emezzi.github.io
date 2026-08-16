import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";

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
                I am a PhD researcher at VU Amsterdam, focusing on the intersection of AI, security, and risk analysis.
                <br />
                <br />
                I work with core languages and tools like
                <i>
                  <b className="purple"> Python, PyTorch, Claude API, Gemini API, OpenAI API</b>
                </i>
                .
                <br />
                <br />
                My primary research interests include
                <i>
                  <b className="purple">
                    {" "}
                    Cyber Threat Intelligence, Large Language Models, Remote Sensing,{" "}
                  </b>
                </i>
                and quantifying uncertainty in security decision pipelines.
                <br />
                <br />
                I also investigate other interdisciplinary domain problems—such as
                <i>
                  <b className="purple"> IP law & technical attribution in generative AI.</b>
                </i>
              </p>
            </Col>
            <Col
                md={4}
                className="myAvtar d-flex justify-content-center"
            >
              <Tilt style={{ marginTop: "100px" }}>
                <img
                    src={myImg}
                    className="img-fluid"
                    alt="avatar"
                    style={{
                      borderRadius: "50%",
                      maxHeight: "230px",
                      maxWidth: "230px",
                      objectFit: "cover"
                    }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;