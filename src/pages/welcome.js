import React from "react"
import { Link, Button, Heading, Box, Text } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Welcome = () => (
  <Layout>
    <SEO title="Welcome" />
    <Heading as="h2">Welcome to the 7 Day SaaS challenge</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      Thanks for joining! It's great to have you with us. Check your inbox – you should be getting a welcome email any minute. 🙂 (For future reference, the resources on this page can be found in that email as well.)
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      To kickstart your planning, just click the button below to add this event to your calendar.
    </Text>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      mt: 3,
    }}>
      <Link href="/SevenDaySaaS.ics">
        <Button>
          <Text variant="body">
            Add to calendar
          </Text>
        </Button>
      </Link>
    </Box>
    <Heading as="h2" sx={{ mt: 4 }}>Get access to the Slack channel</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      Jump in our Slack channel as well by clicking the button below. This is our community home, where we'll share ideas, support each other during the challenge week, and celebrate finished results.
    </Text>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      mt: 3,
    }}>
      <Link target="_blank" href="https://join.slack.com/t/sevendaysaas/shared_invite/enQtOTc3NzcxNDY2ODcwLTc0ZTBhNWJiMjVlOGU1YTk2ZDEzNjc5NjA2NTJjNDcyZDIwZmNlMWJiYWI5M2IyYmVmM2EwMGI0ZDQzNDY5OGI">
        <Button>
          <Text variant="body">
            Join Slack
          </Text>
        </Button>
      </Link>
    </Box>
    <Heading as="h2" sx={{ mt: 4 }}>Pre-challenge checklist:</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      Before you begin, think through what you want to build carefully. You can refer to this checklist to help validate your idea and make sure you're on track before the challenge starts.
    </Text>
    <ul>
      <li>
        <Text variant="body">Decide on a niche to pursue</Text>
      </li>
      <li>
        <Text variant="body">Reach out to a number of people within this niche</Text>
      </li>
      <li>
        <Text variant="body">Document their input and pain points</Text>
      </li>
      <li>
        <Text variant="body">Formulate a hypothetical product solution to one of these pain points</Text>
      </li>
      <li>
        <Text variant="body">Read <Link href="https://www.amazon.com/Mom-Test-customers-business-everyone/dp/1492180742">The Mom Test</Link> and validate your idea against it</Text>
      </li>
      <li>
        <Text variant="body">Repeat this process until you have a list of a few ideas, and pick the best one</Text>
      </li>
      <li>
        <Text variant="body">Scope out your minimum viable product – make sure you can build it in a week</Text>
      </li>
      <li>
        <Text variant="body">Draft a rough to-do list in your favorite task manager to make sure there aren't any blockers you may be missing</Text>
      </li>
      <li>
        <Text variant="body">Congratulations, you're set to go!</Text>
      </li>
    </ul>
    <Text variant="body" sx={{ mt: 2 }}>
      I've also put together some additional resources for you to go over while you're in the planning phase. You can find them <Link href="/resources" target="_blank">here</Link>.
    </Text>
    <Box sx={{
      mt: 4,
    }}>
      <Link href="/">
        <Text variant="body">Go back to the homepage.</Text>
      </Link>
    </Box>
  </Layout>
)

export default Welcome
