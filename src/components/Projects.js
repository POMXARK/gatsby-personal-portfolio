import React, {useState} from 'react';
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({nodes}) => {

    const [currentTab, setState] = useState('php');

    const projects = nodes.map(post => {
        const {category, url, title, description, imgUrl} = post.frontmatter;
        const postId = post.id;
        const relativeDirectory = post.parent.relativeDirectory;
        return {category, url, postId, title, description, imgUrl, relativeDirectory};
    });

    const handleClick = (currentTab) => setState(currentTab);

    const categories = Array.from(new Set(projects.map((item) => item.relativeDirectory)));

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
                                    <Tab.Container id="projects-tabs" defaultActiveKey={currentTab}>
                                        <Nav variant="pills"
                                             className="nav-pills mb-5 justify-content-center align-items-center"
                                             id="pills-tab">
                                            {
                                                categories.map((category) => {
                                                    console.log('_project', category)
                                                    return (
                                                        <Nav.Item key={category}>
                                                            <Nav.Link
                                                                onClick={() => handleClick(category)}
                                                                eventKey={category}>{category}</Nav.Link>
                                                        </Nav.Item>
                                                    )
                                                })
                                            }
                                        </Nav>
                                        <Tab.Content id="slideInUp"
                                                     className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane key={currentTab}
                                                      eventKey={currentTab}>
                                                <Row>
                                                    {
                                                        projects.filter(project => project.relativeDirectory === currentTab).map((project, index) => {
                                                            console.log('project:', project)
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
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
