import React from 'react';
import { Col } from "react-bootstrap";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

export const ProjectCard = ({ category, url, postId, title, description, imgUrl }) => {
    const img = imgUrl.childrenImageSharp[0].gatsbyImageData.images.fallback.src;
    // console.log('img >>', img);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/*<GatsbyImage image={img} alt={title} />*/}
          <img src={img} />
        <div className="proj-txtx">
            <h4><Link to={`/${category}/${url}`} key={postId}>{title}</Link></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
