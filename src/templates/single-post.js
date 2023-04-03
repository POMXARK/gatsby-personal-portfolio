import * as React from "react"
import {graphql, Link} from "gatsby"
import Seo from "../components/seo"

const SinglePost = ({ data }) => {
    const { html } = data.markdownRemark;
    const { title, category } =  data.markdownRemark.frontmatter;

    return (
    <React.StrictMode>
        <h1>{title}</h1>
        <h2>{category}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
            To learn more, head over to our{" "}
            <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
                documentation about Deferred Static Generation
            </a>
            .
        </p>
        <Link to="/">Go back to the homepage</Link>
    </React.StrictMode>
)}

export const Head = () => <Seo title="Using DSG" />

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