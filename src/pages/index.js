/** @jsx jsx */
import React from "react"
import { jsx, Text, Heading, Link, Button, Box } from 'theme-ui';

import Layout from "../components/layout"
import Form from '../components/form';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text variant="body" sx={{ mt: 2 }}>
      From <strong>March 8th</strong> to <strong>March 15th 2020</strong>, join me and the rest of the community here in building your next SaaS startup MVP in the Seven Day Software-as-a-Service challenge.
    </Text>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Link href="#sign-up">
        <Button sx={{ mt: 2 }}>
          <Text variant="body">Join us!</Text>
        </Button>
      </Link>
    </Box>
    <Heading as="h2" sx={{ mt: 4 }}>What is the Seven Day SaaS challenge?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      The 7DSaaS challenge is a software development jam designed to help you, an <i>entrepreneurially minded full-stack web developer</i>, build a fully-functional MVP for your next SaaS idea in a seven day period.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      And then to stop building it after that, so you can focus on marketing, sales, and the other 90% of the work required to turn that first dollar.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      If you're serious about launching a successful SaaS, you should validate your current problem / solution quickly, so you can either sell it or move on to the next product.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>March 8th is too soon. What's the schedule?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      I'm planning a jam every quarter, so if you can't make this jam, the next one is coming up soon – feel free to <Link href="#sign-up">sign up below</Link> to stay updated on that. Besides, even if you can't participate, it's always fun to watch other people work – you might learn something!
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>Why is this a thing?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      I was planning for a <Link href="https://itch.io/jam/7drl-challenge-2020">week-long game jam</Link>, and realized I'd rather spend the time building a product.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      As developers, the biggest challenge facing us is to avoid coding, because software is only 10% of what constitutes a successful SaaS (possibly even less, depending on who you ask) – the rest lies in finding a good problem, determining product-market fit, sales, and all of the other not-so-fun stuff that we like to pretend doesn't have to happen.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      But it does have to happen. And I wanted a community to hold me accountable to spending no longer than a week building my MVP, so that after doing the "fun stuff", I could be freed up to focus on what <i>really</i> mattered.
    </Text>
    <Text variant="body" sx={{ mt: 2 }}>
      So... welcome to 7DSaaS – a jam for building a <strong>profitable software product</strong>.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>Who are you, anyway?</Heading>
    <Text variant="body" sx={{ mt: 2 }}>
      Glad you asked! I'm a <Link href="https://elliotbonneville.com/">full-stack software developer and startup consultant</Link> based in Providence, RI. I've launched three non-software-related startups, and now I'm focusing on leveraging my developer knowledge to build a SaaS.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }}>Do you want money?</Heading>
    <Text variant='body' sx={{ mt: 2 }}>
      Heck no, I can't afford to pay for something like this right now – I'm trying to bootstrap a SaaS here! It's only reasonable to expect that's the case for you, too. So, the challenge is completely free to join.
    </Text>
    <Heading as="h2" sx={{ mt: 4 }} id="sign-up">Join Us</Heading>
    <Text variant='body' sx={{ mt: 2 }}>
      Sign up below to get instant access to our Slack. You'll also get added to my mailing list, but don't worry – it's really easy to opt out. Also, I don't send you 💩 emails.
    </Text>
    <Form />
  </Layout >
)

export default IndexPage
