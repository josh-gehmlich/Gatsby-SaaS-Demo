/** @jsx jsx */
import React from "react"
import { jsx, Heading } from 'theme-ui';
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      marginBottom: `1.45rem`,
      display: 'flex',
      justifyContent: 'center',
      padding: [3, 4],
    }}
  >
    <Heading as='h1'>
      <Link
        to="/"
        style={{
          color: 'black',
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Heading>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
