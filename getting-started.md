# Getting started

This guide will help you get started with Documenté. You will learn how to set up your project, write your first specification using the Phrasé language, and run your tests generated from your documentation.

## Set up your project

### Prerequisites

Documenté integrates into projects with a end-to-end testing framework installed. You can refer to [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) or [Playwright](https://playwright.dev/docs/intro) installation instructions to get started.

### Installation

Install Documenté generator as a dev dependency:

```bash
npm install --save-dev @documente/generator
```

You can also install Documenté globally:

```bash
npm install --global @documente/generator
```

### Configuration

Create a `documente.config.yml` file at the root of your project:

```yaml
runner: playwright # either "playwright" or "cypress"
input: docs/**/*.md # location of documentation to extract tests from
outputDir: tests # directory in which tests should be generated
selectors: documente/selectors.yaml # path to selectors file
```

You can find more information about the configuration file in the [dedicated section](/cli-configuration).

## Write your first specification

### Describing your application with a selectors file

Documenté expects a YAML file with a tree-like representation of your application.

Here is an example selectors file, describing a login form containing a login field, a password field and a confirm button, as well as error and welcome message containers.

Documenté uses the [standard HTML5 selectors](https://drafts.csswg.org/selectors/) which allow you to locate HTML elements by type, class, ID, attribute...

```yaml
login form:
  _selector: .login-form
  login field: input[type="text"]
  password field: input[type="password"]
  confirm button: button[type="submit"]
login error message: .error-message
welcome message: .welcome-message
```

### Writing specifications

Specifications are written in Markdown files, using the [Phrasé](https://github.com/documente/phrase) syntax.

::: tip
You can also read Phrasé code from other kind of files.
For example the [Kitchen sink](https://github.com/documente/documente/tree/main/packages/kitchen-sink) project extracts tests embedded in a JS file
by setting the [`testRegex`](/cli-configuration#testregex) option.
:::


Here is an example of a specification file:

````markdown
# How to use my awesome application

Login into the application to be greeted by a cool welcome message.

```phrase
when I login
then welcome message should be visible
and it should have text "Welcome, user01!"
```

In order to login, simply type your username and password in the login form
and click on the login button.

```phrase
In order to login:
- I type "user01" on login form login field
- I type "password" on password field
- I click on login form confirm button
```
````

You can place the specifications in any folder you want, as long as you specify the correct path in the `input` property of the `documente.config.yml` file.
A good practice is to place the specifications in a `docs` folder at the root of your project.

Take a look at the [Language Overview](/language-overview) section for more information about the test syntax.

The [example project](https://github.com/documente/example-sut) will also give you a good idea of how to write specifications.

## Run your first tests

### Extracting the specifications

To extract the specifications from the documentation files, run `documente` from the root of your project:

```bash
documente
```

This will generate test files in the output folder.

### Running the tests

You can run the tests just like you would run other Cypress or Playwright tests.

With Cypress:

```bash
cypress open
```

Or with Playwright:

```bash
playwright test --ui
```

## Example project

You can find an example repository [here](https://github.com/documente/example-sut) with a simple application, a Documenté configuration, and a set of specifications.
