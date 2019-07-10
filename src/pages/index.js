import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi, I'm Chris.</h1>
    <p>I'm a technologist / developer in the DC area.</p>
    <p>
      I build sites and apps with JavaScript, typically using React and Node.
    </p>
    <p>I build voice apps for Alexa and Google Assistant, often with Jovo.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
