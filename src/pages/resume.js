import React from "react"
import SEO from "../components/seo"
import resume from "../files/prashanth-reddy-resume.pdf"
import styled from "styled-components"
import "../components/layout.css"

const ResumeContainer = styled.div`
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
`
const Resume = styled.embed`
  flex: 1 1 auto;
  min-width: 300px;
`

export default () => {
  return (
    <ResumeContainer>
      <SEO title="Resume" />
      <Resume src={resume} type="application/pdf" />
    </ResumeContainer>
  )
}
