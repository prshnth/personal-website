import React from "react"
import styled from "styled-components"
import Tabs from "./tabContainer"

const Container = styled.div`
  background-color: #1d1d34;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 10px 10px 6px -2px rgba(0, 0, 0, 0.4);
  position: relative;
  width: 600px;
  @media (max-width: 400px) {
    width: 320px;
  }
`

const ProfileImage = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  .gatsby-image-wrapper {
    border-radius: 50%;
  }
  img {
    border-radius: 50%;
    border: 2px solid #d5d0e5;
    padding: 3px;
  }
`

const Description = styled.p`
  padding-top: 40px;
  text-align: center;
  color: #d5d0e5;
  font-weight: bold;
`

const AboutMeCard = () => (
  <Container>
    <ProfileImage>
      <img
        src="https://lh3.googleusercontent.com/a-/AOh14GgHX9tWS3H9xNTQbiuDmIP3Wu8rjwbP_Z5yMn7xVQ"
        alt="prashanth"
        width="100"
        height="100"
      />
    </ProfileImage>
    <Description>Prashanth Reddy Kuchanpally</Description>
    <Tabs />
  </Container>
)

export default AboutMeCard
