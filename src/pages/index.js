import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMeCard from "../components/aboutMeCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMeCard />
  </Layout>
)

export default IndexPage
