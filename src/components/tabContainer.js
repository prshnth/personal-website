import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const TabContainer = styled.div`
  margin-top: 20px;
`

const TabList = styled.div`
  display: flex;
  justify-content: space-around;
`
const TabButton = styled.button`
  border: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #d5d0e5;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  box-shadow: 10px 10px 6px -2px rgba(0, 0, 0, 1);
  a {
    text-decoration: none;
    color: #d5d0e5;
  }
  &[aria-selected="true"] {
    background: #7464be;
  }
`

const TabPanel = styled.div`
  padding: 20px;
  min-height: 200px;
  color: #d5d0e5;
`

const Tabs = () => {
  const [selectedTab, setTab] = useState("aboutMe")
  return (
    <TabContainer>
      <TabList role="tablist" aria-label="Programming Languages">
        <TabButton
          role="tab"
          onClick={() => setTab("aboutMe")}
          aria-selected={selectedTab === "aboutMe"}
          id="aboutMe"
        >
          About Me
        </TabButton>
        <TabButton
          role="tab"
          onClick={() => setTab("websiteStack")}
          aria-selected={selectedTab === "websiteStack"}
          id="websiteStack"
        >
          Website Stack
        </TabButton>
        <TabButton
          role="tab"
          id="resume"
        >
          <a href='/resume' target='_blank' rel="noreferrer">Resume</a>
        </TabButton>
      </TabList>
      <TabPanel
        role="tabpanel"
        aria-labelledby="aboutMe"
        hidden={selectedTab !== "aboutMe"}
      >
        <p>Hello! I'm a full stack JavaScript developer.</p>
        <p>
          I made this website to serve as a repository for my projects and
          thoughts on technology and life.
        </p>
        <p>Feel free to say hi and drop a suggestion.</p>
      </TabPanel>
      <TabPanel
        role="tabpanel"
        aria-labelledby="websiteStack"
        hidden={selectedTab !== "websiteStack"}
      >
        <p>
          I built this Website with Gatsby.js which comes with React, Routing and
          GraphQL.
        </p>
        <p>For styling I used styled-components.</p>
        <p>Here is the source code: <a href='https://github.com/prshnth/personal-website' style={{color: 'inherit'}} target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="x" />
          </a>
        </p>
      </TabPanel>
    </TabContainer>
  )
}

export default Tabs
