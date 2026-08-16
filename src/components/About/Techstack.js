import React from "react";
import { Col, Row } from "react-bootstrap";
import NeuroAI from "../../Assets/TechIcons/NeuroAI.png"
import CTI from "../../Assets/TechIcons/CTI.png"
import RemoteSensing from "../../Assets/TechIcons/RemoteSensing.png";
import LLMIcon from "../../Assets/TechIcons/LLM.png";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

            <Col xs={4} md={2} className="tech-icons">
                <img src={NeuroAI} alt="Neurosymbolic AI" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                <div className="tech-icons-text">Neurosymbolic AI</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={LLMIcon} alt="LLM" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                <div className="tech-icons-text">Large Language Models</div>
            </Col>


            <Col xs={4} md={2} className="tech-icons">
                <img src={CTI} alt="CTI" style={{ width: "24px", height: "24px", objectFit: "contain" }}/>
                <div className="tech-icons-text">Cyber Threat Intelligence</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={RemoteSensing} alt="Remote Sensing" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                <div className="tech-icons-text">Remote Sensing</div>
            </Col>

        </Row>
    );
}

export default Techstack;
