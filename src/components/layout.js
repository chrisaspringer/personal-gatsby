/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          minHeight: `100vh` /* will cover the 100% of viewport */,
          overflow: `hidden`,
          display: `block`,
          position: `relative`,
          paddingBottom: `100px`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              position: `absolute`,
              bottom: `0`,
              width: `100%`,
              textAlign: `left`,
            }}
          >
            <div
              style={{
                maxWidth: `960px`,
                padding: `1.45rem 0`,
              }}
            >
              © {new Date().getFullYear()} Chris Springer
            </div>
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
