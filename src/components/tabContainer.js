import React, { useState } from "react"
import styled from "styled-components"

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
  outline: none;
  box-shadow: 10px 10px 6px -2px rgba(0, 0, 0, 1);
  &[aria-selected="true"] {
    background: #7464be;
  }
`

const TabPanel = styled.div`
  padding: 30px;
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
          onClick={() => setTab("career")}
          aria-selected={selectedTab === "career"}
          id="career"
        >
          Career
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
          Here is a complete list of frameworks and technologies I used to build
          my website, more coming very soon!
        </p>
      </TabPanel>
      <TabPanel
        role="tabpanel"
        aria-labelledby="career"
        hidden={selectedTab !== "career"}
      >
        <p>
          I currently work as a Frontend Developer at Paychex, Inc. If you would
          like to know more about my complete journey, see here
        </p>
      </TabPanel>
    </TabContainer>
  )
}

export default Tabs
