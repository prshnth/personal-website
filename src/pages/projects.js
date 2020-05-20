// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsContainer = styled.div`
  background-color: #1d1d34;
  color: #d5d0e5;
  padding: 20px;
  width: 600px;
  margin: 10px auto;
  border-radius: 10px;
  text-align: center;
  box-shadow: 10px 10px 6px -2px rgba(0, 0, 0, 0.4);
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsContainer>
        <p>
          Hey There! I'm in the process of adding my GitHub projects in this
          page. Coming very soon!
        </p>
        <Link to="/">Go back to the homepage</Link>
      </ProjectsContainer>
    </Layout>
  )
}

export default Projects
