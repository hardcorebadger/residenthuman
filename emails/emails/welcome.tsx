import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Button
} from '@react-email/components';
import * as React from 'react';

import serviceAccount from "../key.json";
const baseUrl = `https://${serviceAccount['project_id']}.web.app`

export const WelcomeEmail = ({}) => (
  <Html>
    <Head />
    <Preview>Welcome to Indiestack</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{"Welcome, {{name}}"}</Heading>
        <Text style={paragraph}>
          Thanks for signing up for Indiestack's waitlist! 
          We'll be sure to notify you when we launch, in the meantime you can follow the journey on twitter.
        </Text>
        <Button href="https://twitter.com/jaketref" style={button} >
        Follow the journey
        </Button>
        <Img
          src={`${baseUrl}/logo192.png`}
          width="32"
          height="32"
          alt="Logo"
          style={{ marginTop:"24px" }}
        />
        <Text style={footer}>
          <Link
            href="https://indiestack.xyz"
            target="_blank"
            style={{ ...link, color: '#898989'}}
          >
            Indiestack.xyz
          </Link>
          <br />
          The MVP toolkit for indie hackers
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter,sans-serif',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const footer = {
  color: '#898989',
  fontSize: '12px',
  marginTop: '12px',
  marginBottom: '24px',
};

const link = {
  color: '#309795',
  fontSize: '14px',
  textDecoration: 'underline',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '30px 0',
  padding: '0',
};

const paragraph = {
  color: '#444',
  fontSize: '15px',
  margin: '10px 0',
};

const button = {
  backgroundColor: '#309795',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  width: "100%",
  paddingTop: "10px",
  paddingBottom: "10px",
  margin: '10px 0'
};