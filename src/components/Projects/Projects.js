import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Publications </strong>
          </h1>
          <p style={{ color: "white" }}>
            Research papers I've worked on.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card pb-4">
              <ProjectCard
                  isBlog={false}
                  title="Large Language Models Are Unreliable for Cyber Threat Intelligence"
                  description="Investigating the trustworthiness, hallucinations, and security limitations of LLMs when deployed for automated Cyber Threat Intelligence tasks."
                  demoLink="https://link.springer.com/chapter/10.1007/978-3-032-00627-1_17"
              />
            </Col>

            <Col md={4} className="project-card pb-4">
              <ProjectCard
                  isBlog={false}
                  title="Risks of ignoring uncertainty propagation in AI‐augmented security pipelines"
                  description="Analyzing how error accumulation and unquantified uncertainty impact reliability in automated AI security decision pipelines."
                  demoLink="https://onlinelibrary.wiley.com/doi/10.1111/risa.70059?af=R"
              />
            </Col>

            <Col md={4} className="project-card pb-4">
              <ProjectCard
                  isBlog={false}
                  title="Neurosymbolic Inference On Foundation Models For Remote Sensing Text-to-image Retrieval With Complex Queries"
                  description="Combining symbolic reasoning with foundation models to enable complex text-to-image retrieval queries over Earth observation data."
                  demoLink="https://dl.acm.org/doi/full/10.1145/3786350"
              />
            </Col>

            <Col md={4} className="project-card pb-4">
              <ProjectCard
                  isBlog={false}
                  title="A methodology to infer value networks from police case files"
                  description="A NLP-driven methodology to extract structured entity relationships and value networks from unstructured law enforcement case records."
                  demoLink="https://link.springer.com/article/10.1186/s40163-025-00251-z"
              />
            </Col>

            <Col md={4} className="project-card pb-4">
              <ProjectCard
                  isBlog={false}
                  title="Who Owns the Output? Bridging Law and Technology in LLMs Attribution"
                  description="Bridging technical attribution mechanisms with intellectual property law to establish provenance for generative AI outputs."
                  demoLink="https://arxiv.org/abs/2504.01032"
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;