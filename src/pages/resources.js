import React from "react"
import { Link, Button, Heading, Box, Text } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resources = () => (
  <Layout>
    <SEO title="Resources" />
    <Heading as="h2">Resources</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      I've put together a list of resources to help you on your journey. This is really a list of everything that I've found helpful to me so far, from blog posts to frameworks and UI libraries. YMMV, but I hope you find some of it as helpful as I have.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>Platforms</Heading>
    <ul sx={{ mt: 2 }}>
      <li>
        <Text variant="body">
          <Link href="https://firebase.google.com/">Google Firebase</Link>
        </Text>
        <Text variant="body">
          It's so fast to get a whole app running with Google Firebase. Grab one SDK from npm, create your project, and you're off to the races. Database, file storage, everything is built in.
        </Text>
      </li>
      <li>
        <Text variant="body">
          <Link href="https://www.netlify.com/">Netlify</Link>
        </Text>
        <Text variant="body">
          Fastest and easiest way to set up hosting and a deployment pipeline for your app.
        </Text>
      </li>
    </ul>
    <Heading as="h2" sx={{ mt: 4 }}>Books</Heading>
    <ul sx={{ mt: 2 }}>
      <li>
        <Text variant="body">
          <Link href="https://www.amazon.com/Mom-Test-customers-business-everyone-ebook/dp/B01H4G2J1U">The Mom Test</Link>
        </Text>
      </li>
      <li>
        <Text variant="body">
          <Link href="https://www.amazon.com/The-War-of-Art/dp/B07PTBYH2G">The War of Art</Link>
        </Text>
      </li>
    </ul>
    <Heading as="h2" sx={{ mt: 4 }}>Blog Posts</Heading>
    <ul sx={{ mt: 2 }}>
      <li>
        <Text variant="body">
          <Link href="https://blog.gettamboo.com/the-epic-guide-to-bootstrapping-a-saas-startup-from-scratch-by-yourself-part-1-4d834e1df8c1">The Epic Guide to Bootstrapping a SaaS Startup from Scratch — By Yourself</Link>
        </Text>
      </li>
      <li>
        <Text variant="body">
          <Link href="https://www.indiehackers.com/post/how-to-brainstorm-great-business-ideas-ab51c3d51c">How to brainstorm great business ideas</Link>
        </Text>
      </li>
      <li>
        <Text variant="body">
          <Link href="https://www.indiehackers.com/@Louis_Grenier/how-seth-godin-would-launch-a-business-with-a-1-000-budget-2cc8c6c79c">How Seth Godin Would Launch a Business With a $1,000 Budget</Link>
        </Text>
      </li>
    </ul>

  </Layout>
)

export default Resources
