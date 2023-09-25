import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Seo from "../components/seo";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
    const { nodes } = data.allMarkdownRemark;
    return (
        <React.StrictMode>
            <App nodes={nodes}/>
        </React.StrictMode>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const Head = () => <Seo title="Home" />
export default IndexPage

export const query = graphql`
query MainPage($category: String) {
  allMarkdownRemark(
    filter: {frontmatter: {category: {eq: $category}}}
    sort: {frontmatter: {priority: DESC}}
  ) {
    nodes {
      frontmatter {
        category
        title
        description
        url
        imgUrl {
          childrenImageSharp {
            gatsbyImageData(width: 600)
          }
        }
        priority
      }
      id
      parent {
        ... on File {
          id
          name
          relativeDirectory
        }
      }
    }
  }
}
`