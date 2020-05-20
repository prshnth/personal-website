import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMeCard from "../components/aboutMeCard"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMeCard />
  </Layout>
)

export default IndexPage
