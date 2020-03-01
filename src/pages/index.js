/** @jsx jsx */
import React from "react"
import { jsx, Text, Heading, Link } from 'theme-ui';

import Layout from "../components/layout"
import Form from '../components/form';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h2">What is the Seven Day SaaS challenge?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      The 7DSaaS challenge is a software jam designed to help you, an entrepreneurially minded developer, build a fully-functional MVP for your next SaaS idea. And no more than that.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>Why is this a thing?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      I was planning for a <Link href="https://itch.io/jam/7drl-challenge-2020">week-long game jam</Link>, and realized I'd rather spend the time building a product.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      As developers, the biggest challenge facing us is to avoid coding, because software is only 10% of what constitutes a successful SaaS -- the rest lies in finding a good problem, determining product-market fit, sales, and all of the other not-so-fun stuff that we like to pretend doesn't have to happen.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      But it does have to happen. And I wanted a community to hold me accountable to spending no longer than a week building my MVP.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      So... welcome to 7DSaaS -- a game jam for building a profitable software product.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>Join Us</Heading>
    <Text variant='body' sx={{ mt: 2 }}>
      Sign up below to get instant access to the Slack and to be added to the mailing list.
    </Text>
    <Form />
  </Layout>
)

export default IndexPage
