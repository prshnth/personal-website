import React from "react"
import styled from "styled-components"
import Image from "./image"
import Tabs from "./tabContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  background-color: #1d1d34;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 10px 10px 6px -2px rgba(0, 0, 0, 0.4);
  position: relative;
  max-width: 750px;
`

const ProfileImage = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  picture {
    img {
      border-radius: 50%;
      border: 2px solid #d5d0e5;
      padding: 3px;
    }
  }
`

const Description = styled.p`
  padding-top: 60px;
  text-align: center;
  color: #d5d0e5;
  font-weight: bold;
`

const Location = styled.div`
  font-size: 16px;
  font-weight: normal;
`

const AboutMeCard = () => (
  <Container>
    <ProfileImage>
      <Image />
    </ProfileImage>
    <Description>
      Prashanth Reddy Kuchanpally
      <Location>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Webster, New York
      </Location>
    </Description>
    <Tabs />
  </Container>
)

export default AboutMeCard
