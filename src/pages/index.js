import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section>
      <div
        style={{
          width: `50vw`,
          height: `50vw`,
          maxWidth: `300px`,
          maxHeight: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </div>
      <h1>Hi, I'm Chris.</h1>
    </section>
    <section>
      <p>I'm a senior technologist at AKQA / developer in the DC area.</p>
      <p>
        I build sites and apps with JavaScript, typically using React and Node.
      </p>
      <p>I build voice apps for Alexa and Google Assistant, often with Jovo.</p>
      <Link to="/blog">Blog posts</Link>
    </section>
  </Layout>
)

export default IndexPage
