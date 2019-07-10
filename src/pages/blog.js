import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>Blog posts:</h1>
      <ul>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
              <Link to={`${frontmatter.path}`}>{frontmatter.title}</Link>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Posts
