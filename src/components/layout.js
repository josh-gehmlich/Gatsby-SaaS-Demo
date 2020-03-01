/** @jsx jsx */
import React from "react"
import { jsx, Box, Text, Link } from 'theme-ui';

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
          maxWidth: 840,
          padding: 4,
          flex: 1,
        }}
      >
        <main>{children}</main>
      </Box>
      <Box sx={{
        padding: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        background: 'black',
      }}>
        <footer sx={{
          margin: `0 auto`,
          maxWidth: 840,
          background: 'black',
        }}>
          <Text variant="body" sx={{ color: 'white' }}>
            © {new Date().getFullYear()}, <Link sx={{ color: 'white' }} href="https://elliotbonneville.com">Elliot Bonneville</Link>
          </Text>
        </footer>
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
