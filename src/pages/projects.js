// Gatsby supports TypeScript natively!
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const data = [
  {
    title: "Race Entries",
    points: [
      "Application where Admins can create a new race and participants can enter.",
      "FullStack Architecture",
      "React, Hooks, Context API, React Router",
      "Firebase Authentication & Firestore DB",
      "Mobile first design and implementation",
    ],
    links: {
      demo: "https://race-entries.herokuapp.com",
      code: "https://github.com/prshnth/race-entries",
    },
  },
  {
    title: "Blog Posts",
    points: [
      "Application where users can login and publish posts and read other posts",
      "FullStack Architecture",
      "Node.js, MongoDB, Express.js, React, Redux, Redux Thunk, Redux Form",
      "Google OAuth",
      "Mobile first design and implementation",
    ],
    links: {
      demo: "https://blog-posts-mern-stack.herokuapp.com",
      code: "https://github.com/prshnth/mern-blog-posts",
    },
  },
]

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsContainer>
        {data.map(project => (
          <ProjectCard project={project} />
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

export default Projects
