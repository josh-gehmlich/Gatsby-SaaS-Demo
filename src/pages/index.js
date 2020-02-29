import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Form from '../components/form';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Seven Day SaaS</h1>
    <Form />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
