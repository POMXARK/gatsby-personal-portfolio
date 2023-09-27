import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "./src/assets/img/color-sharp2.png";
import React from "react";

{
    () => {
        return (
            () => {
                return (
                    <section className="project" id="projects">
                        <Container>
                            <Row>
                                <Col size={12}>
                                    <TrackVisibility>
                                        {({isVisible}) =>
                                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                                <h2>Projects</h2>
                                                <p>По ТЗ</p>
                                                <Tab.Container id="projects-tabs" defaultActiveKey="php">
                                                    <Nav variant="pills"
                                                         className="nav-pills mb-5 justify-content-center align-items-center"
                                                         id="pills-tab">
                                                        {
                                                            projects.map((_project, index) => {
                                                                return (
                                                                    <Nav.Item key={_project.relativeDirectory}>
                                                                        <Nav.Link
                                                                            eventKey={_project.relativeDirectory}>{_project.relativeDirectory}</Nav.Link>
                                                                    </Nav.Item>
                                                                )
                                                            })
                                                        }
                                                    </Nav>
                                                </Tab.Container>
                                                {console.log(document.getElementsByClassName('nav-link active'))}
                                                {
                                                    projects.map((project, index) => {
                                                        let projectFilter = project.relativeDirectory;
                                                        return (
                                                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                                                    {
                                                                        projects.filter(project => project.relativeDirectory === projectFilter).map((project, index) => {
                                                                            console.log('project:' , project)
                                                                            console.log('project.relativeDirectory:' , project.relativeDirectory)
                                                                            return (
                                                                                <Tab.Pane key={project.relativeDirectory} eventKey={project.relativeDirectory}>
                                                                                    <Row>
                                                                                        {
                                                                                            projects.filter(project => project.relativeDirectory === projectFilter).map((project, index) => {
                                                                                                console.log('project:' , project)
                                                                                                return (
                                                                                                    <ProjectCard
                                                                                                        key={index}
                                                                                                        {...project}
                                                                                                    />
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </Row>
                                                                                </Tab.Pane>
                                                                            )
                                                                        })
                                                                    }
                                                                </Tab.Content>
                                                        )
                                                    })
                                                }

                                            </div>}
                                    </TrackVisibility>
                                </Col>
                            </Row>
                        </Container>
                        <img className="background-image-right" src={colorSharp2}></img>
                    </section>
                )
            }
        )
    }
}
