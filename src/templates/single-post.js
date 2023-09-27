import * as React from "react"
import {graphql, Link} from "gatsby"
import Seo from "../components/seo"
import {useState} from "react";
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";

const SinglePost = ({data}) => {
    let [readme, setState] = useState('');

    const {html} = data.markdownRemark;
    const {title, category} = data.markdownRemark.frontmatter;
    const github = "https://github.com/POMXARK/" + title

    fetch(`https://raw.githubusercontent.com/POMXARK/${title}/master/DOCS.md`)
        .then(data => data.text()).then(text => setState(text))

    return (
        <React.StrictMode>
            <Container>
                <Row>
                    <h1>{title}</h1>
                    <h2>{category}</h2>
                    <div dangerouslySetInnerHTML={{__html: html}}/>
                    <p>
                        To learn more, head over to our{" "}
                        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
                            documentation about Deferred Static Generation
                        </a>
                        .
                    </p>
                    <Link to="/">Go back to the homepage</Link>
                    <br/>
                    <Link to={github}>GitHub</Link>
                    <br/>
                    <div dangerouslySetInnerHTML={{__html: readme}}/>
                </Row>
            </Container>
        </React.StrictMode>
    )
}

export const Head = () => <Seo title="Using DSG"/>

export default SinglePost


export const query = graphql`
    query PostQuery($url: String) {
      markdownRemark(frontmatter: {url: {eq: $url}}) {
        html
        frontmatter {
          category
          title
          url
        }
      }
    }
`