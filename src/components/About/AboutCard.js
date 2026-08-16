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
              <br />
              I’m currently working as a{" "}
              <span className="purple">PhD Candidate</span> at{" "}
              <span className="purple">Vrije Universiteit Amsterdam</span>.
              <br />
              <br />I hold an MSc in{" "}
              <span className="purple">Data Science</span> from the {" "}
              <span className="purple">University of Amsterdam</span> and
              a BSc in <span className="purple">Computer Science</span> from the {" "}
              <span className="purple">University of Salerno</span>
              <br />
              <br />
              Other than researching Neurosymbolic AI in security, I love reading, traveling, and cooking.
            </p>

            {/*<p style={{ color: "rgb(155 126 172)" }}>*/}
            {/*  "Trustworthy AI for Security that makes the difference."{" "}*/}
            {/*</p>*/}
            {/*<footer className="blockquote-footer">Emanuele</footer>*/}
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
