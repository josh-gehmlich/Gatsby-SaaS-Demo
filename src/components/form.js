/** @jsx jsx */
import { useRef } from "react"
import { jsx, Text, Input, Button } from 'theme-ui';
import { navigate } from "gatsby";
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default function () {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const handleSubmit = event => {
    event.preventDefault();
    if (!emailRef.current || !nameRef.current) {
      return;
    }

    const { value: email } = emailRef.current;
    const { value: FNAME } = nameRef.current;

    addToMailchimp(email, { FNAME }).then(() => {
      navigate('/welcome');
    }).catch(() => {
      navigate('/welcome');
    });
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      sx={{ mt: 3 }}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Text variant="body">
        <label>
          <strong>Your Name:</strong>
          <Input
            sx={{ mt: 2 }}
            type="text"
            name="name"
            ref={nameRef}
            placeholder="Steve"
          />
        </label>
      </Text>
      <Text variant="body" sx={{ mt: 3 }}>
        <label>
          <strong>Your Email:</strong>
          <Input
            sx={{ mt: 2 }}
            type="email"
            name="email"
            ref={emailRef}
            placeholder="steve@apple.com"
          />
        </label>
      </Text>
      <Button type="submit" sx={{ mt: 3, float: 'right' }}>
        <Text variant="body">
          Join now
        </Text>
      </Button>
    </form>
  )
}