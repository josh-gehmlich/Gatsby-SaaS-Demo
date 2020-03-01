/** @jsx jsx */
import React from "react"
import { jsx, Text, Input, Button, Box } from 'theme-ui';

export default function () {
  return (
    <form name="contact" method="POST" data-netlify="true" sx={{ mt: 3 }}>
      <Text variant="body">
        <label>Your Name: <Input sx={{ mt: 3 }} type="text" name="name" /></label>
      </Text>
      <Text variant="body" sx={{ mt: 3 }}>
        <label>Your Email: <Input sx={{ mt: 3 }} type="email" name="email" /></label>
      </Text>
      <Button type="submit" sx={{ mt: 3, float: 'right' }}><Text variant="body">Join Now</Text></Button>
    </form>
  )
}