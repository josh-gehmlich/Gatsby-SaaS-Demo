/** @jsx jsx */
import React from "react"
import { jsx, Box } from 'theme-ui';

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: 4,
          flex: 1,
        }}
      >
        <main>{children}</main>
      </Box>
      <Box sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
        <footer>
          © {new Date().getFullYear()}, Elliot Bonneville
        </footer>
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
