/** @jsx jsx */
import React from "react"
import { jsx, Text, Input, Button, Box } from 'theme-ui';

export default function () {
  return (
    <form name="contact" method="POST" data-netlify="true" sx={{ mt: 3 }}>
      <Text variant="body">
        <label>
          <strong>Your Name:</strong>
          <Input sx={{ mt: 3 }} type="text" name="name" placeholder="Steve Jobs" />
        </label>
      </Text>
      <Text variant="body" sx={{ mt: 3 }}>
        <label>
          <strong>Your Email:</strong>
          <Input sx={{ mt: 3 }} type="email" name="email" placeholder="steve@apple.com" />
        </label>
      </Text>
      <Button type="submit" sx={{ mt: 3, float: 'right' }}>
        <Text variant="body">
          Join Now
        </Text>
      </Button>
    </form>
  )
}