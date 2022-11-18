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
      <p>I'm a principal technologist at AKQA living in the DC area.</p>
      <p>
        I architect software systems to support websites and apps, architect websites (I love NextJS and TailwindCSS), and manage project dev teams. 
      </p>
      <Link to="/blog">Blog posts</Link>
    </section>
  </Layout>
)

export default IndexPage
