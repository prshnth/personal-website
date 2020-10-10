import React from "react"
import resume from "../files/prashanth-reddy-resume.pdf"
import styled from "styled-components"

const ResumeContainer = styled.div`
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
`
const Resume = styled.iframe`
  flex: 1 1 auto;
`

export default () => {
  return (
    <ResumeContainer>
      <Resume src={resume} />
    </ResumeContainer>
  )
}
