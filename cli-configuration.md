---
outline: [2, 3]
---

# CLI Configuration

The configuration file is a YAML file containing the options used by the CLI.

It's specified with the `config` option of the `documente` command. For example:

```bash
documente --config ./documente/config.yml
```

If not specified, a file named `documente.config.yml` will be searched in the current directory and its parent directories.

## Example configuration

The following example shows the configuration for a project using Cypress as a test runner.

```yaml
input: [docs/**/*.md, user-guide/**/*.md]
selectors: tests/selectors.yml
runner: cypress
outputDir: cypress/integration
testRegex: '```test(\[^`]*)```'
env: tests/env.yml
```

## Options

### input

(Required) A glob pattern (or an array of glob patterns) specifying the files to extract the test cases from.

### selectors

(Required) A path to a YAML file containing the selectors used in the test files.

### externals

(Optional) A path to a Javascript file containing custom functions visible to the test files.
See [External file](/externals-file) for more details.

### runner

(Required) The test runner to use. Possible values are `cypress` and `playwright`.

### outputDir

(Optional) A path to a directory where the generated test files will be written.

For Cypress, the default value is `cypress/e2e`.

For Playwright, the default value is `tests`.

### testRegex

(Optional) A regular expression used to extract the test cases from the input files.

The default value is <code v-pre>\```phras\[ée](\[^`]*)```</code>.
This regex matches the following Markdown code block:

````
```phrasé
When I visit the homepage
then the title should be visible
```

```phrase
When I visit the login page
then the login form should be visible
```
````

### env

(Optional) A path to a YAML file containing the environment variables used in the test files.

The YAML file must contain a dictionary of strings.

See [Environment file](/environment-file) for more details.
