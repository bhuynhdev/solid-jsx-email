## Repo Info

The `solid-jsx-email` repository is heavily inspired by [`jsx-email`](https://github.com/shellscape/jsx-email). I wanted to create a way to build server-rendered emails using Solidjs components so I have been adapting code in the `jsx-email` repo into SolidJS code

I used the SolidJS Community's Solid lib starter, and thus consequently use `pnpm` for package management, `tsup` to build the packages, and `prettier` and `eslint` for code styling/linting

### Current goals

Currently I've completed most basic components so that emails can be built

The ultimate goal is to match feature parity with the `jsx-email` repo. I'm personally prioritizing these goals first:

- Implement a preview server
  - I want to explore making the preview dashboard a generic Component that can be thrown into any Solid Start application
- Implement tests
- Add TailwindCSS support

## Project structure

The `src` folder is code for the library to be packaged, with `src/components` for the email components

The `dev` folder is for working and testing the components in development

## Submitting Code

Any code change should be submitted as a pull request.

Before submitting, run `pnpm format` and `pnpm lint` to format/lint the code and fix any potential errors
