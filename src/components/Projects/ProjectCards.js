import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

function ProjectCards(props) {
    return (
        <Card className="project-card-view h-100">
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                {/* Container pushed to the bottom using mt-auto */}
                <div className="mt-auto pt-3">
                    {/* Only render GitHub button if ghLink exists */}
                    {props.ghLink && (
                        <Button variant="primary" href={props.ghLink} target="_blank">
                            <BsGithub /> &nbsp;
                            {props.isBlog ? "Blog" : "GitHub"}
                        </Button>
                    )}

                    {/* Render Paper link if demoLink exists */}
                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
                        >
                            <FaFileAlt /> &nbsp;
                            {"Paper"}
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;