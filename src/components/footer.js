import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: 30px auto 0;
`

const SocialLink = styled.a`
  color: inherit;
`

const Footer = () => (
  <FooterContainer>
    <SocialLink href="https://github.com/prshnth" target="_blank">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </SocialLink>
  </FooterContainer>
)

export default Footer
