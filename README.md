<img width="100%" src="https://assets.solidjs.com/banner?type=solid-jsx-email&background=tiles&project=%20" alt="Solid JSX Email">

# Solid JSX Email

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

Build emails with Solidjs and JSX

Inspired from [jsx-email](https://jsx.email)

## Quick start

Install it:

```bash
npm i solid-jsx-email
# or
yarn add solid-jsx-email
# or
pnpm add solid-jsx-email
```

Use it:

1. Build emails using components from `solid-jsx-email`

```tsx
import { Html, Body, Section, Container, Button } from 'solid-jsx-email'

export function MyEmail(props) {
  return (
    <Html lang='en'>
      <Body style={mainStyle}>
        <Section>
          <Container>
            <Button
              href='https://example.com'
              width={160}
              height={60}
              target='_blank'
              textColor={"#fff"}
              align='center'
              backgroundColor={"#777"}
              borderRadius={5}
              fontSize={16}
            >
              {props.text}
            </Button>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}
```

2. Render email on the server

```ts
import { renderToString } from 'solid-js/web'
import { MyEmail } from '~/emails/MyEmail'

const getEmailHtml = query(async () => {
  'use server'
  return renderToString(() => <MyEmail />)
}, 'my-email')
```

3. Use the produced HTML to display on the browser (via an iframe) or to send emails using an Email Provider

## Styling

Currently only inline styling is supported via passing a `style` object prop to the component
