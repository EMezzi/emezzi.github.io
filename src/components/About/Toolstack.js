import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Python from "../../Assets/TechIcons/Python.svg";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Python} alt="Python" />
                <div className="tech-icons-text">Python</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} alt="SQL" />
                <div className="tech-icons-text">Postgresql</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Git} alt="git" />
                <div className="tech-icons-text">Git</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons ">
                <img src={intelliJ} alt="go" className="tech-icon-images" />
                <div className="tech-icons-text">IntelliJ</div>
            </Col>
        </Row>
    );
}

export default Toolstack;
