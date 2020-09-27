import React from "react"
import styled, { keyframes } from "styled-components"
import checkmark from "../images/green-checkmark-line.svg"

const Container = styled.div`
  background-color: #1d1d34;
  color: #d5d0e5;
  padding: 15px;
  width: 320px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 10px 10px 6px -2px rgba(0, 0, 0, 0.4);
  a {
    text-decoration: none;
    color: inherit;
  }
  .project-points {
    align-items: center;
    display: flex;
    margin: 5px 0;
    img {
      flex: 0 0 auto;
    }
  }
  .project-title {
    text-align: center;
    margin: 0;
  }
`

const pulsate = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(233, 216, 253, 1);
    }

    70% {
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`

const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  .pulse-button {
    animation: ${pulsate} 3s infinite;
  }
`

const DemoButton = styled.a`
  margin: 0 10px;
  background: #7464be;
  border: 0;
  color: #d5d0e5;
  padding: 5px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  outline: none;
`

const CheckImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`

const ProjectCard = ({ project }) => (
  <Container>
    <h2 className="project-title">{project.title}</h2>
    {project.points.map((bulletText, index) => (
      <div key={index} className="project-points">
        <CheckImage src={checkmark} alt="checkmark" />
        <span>{bulletText}</span>
      </div>
    ))}
    <ButtonContainer>
      <DemoButton
        className="pulse-button"
        rel="noopener noreferrer"
        href={project.links.demo}
        target="_blank"
      >
        Live Demo
      </DemoButton>
      <DemoButton
        rel="noopener noreferrer"
        target="_blank"
        href={project.links.code}
      >
        Source Code
      </DemoButton>
    </ButtonContainer>
  </Container>
)

export default ProjectCard
