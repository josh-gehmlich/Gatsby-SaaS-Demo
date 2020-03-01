/** @jsx jsx */
import React from "react"
import { jsx, Heading } from 'theme-ui';
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: [3, 4],
      background: 'black',
    }}
  >
    <Heading as='h1' sx={{ color: 'white' }}>
      {siteTitle}
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
