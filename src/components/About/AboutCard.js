import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Emanuele Mezzi</span>{" "}
            from <span className="purple">Italy</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">PhD Candidate</span> at{" "}
            <span className="purple">Vrije Universiteit Amsterdam</span>.
            <br />I hold an MSc in{" "}
            <span className="purple">Data Science</span> from{" "}
            <span className="purple">University of Amsterdam</span>.
            <br />
            <br />
            Other than researching Neurosymbolic AI in security, I love reading, traveling, and cooking:
          </p>

          {/*<ul>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Playing Games 🎮*/}
          {/*  </li>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Writing Tech Blogs ✍️*/}
          {/*  </li>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Traveling and Exploring New Places 🌍*/}
          {/*  </li>*/}
          {/*</ul>*/}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Emanuele</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
