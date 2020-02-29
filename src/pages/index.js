/** @jsx jsx */
import React from "react"
import { jsx, Text } from 'theme-ui';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Form from '../components/form';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text variant='body'><a href="https://join.slack.com/t/sevendaysaas/shared_invite/enQtOTc3NzcxNDY2ODcwLTc0ZTBhNWJiMjVlOGU1YTk2ZDEzNjc5NjA2NTJjNDcyZDIwZmNlMWJiYWI5M2IyYmVmM2EwMGI0ZDQzNDY5OGI">Join us in Slack</a>, and sign up below to be added to the email list for this community.</Text>
    <Form />
  </Layout>
)

export default IndexPage
