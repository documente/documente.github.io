# Externals file

The externals file allows you to extend the built-in API with your own functions.

It's a Javascript file that exports a dictionary of functions.

The externals file is specified with the `externals` property in the configuration file.

## Example

Here is an example of an externals file that exposes a function to call a REST API endpoint using Cypress:

```js
// externals.js
module.exports = {
  'task list is empty': () => {
    cy.request('DELETE', 'http://localhost:5000/api/all-tasks');
  }
};
```

In your test files, you can now use this function:

```
Given task list is empty
```

## Function naming conventions

Function names can contain whitespaces or use the camelCase convention.
For example, the previous function can be named `task list is empty` or `taskListIsEmpty` but its usage will be the same.

## Arguments

You can pass parameters to your functions. The parameters are passed in the order they are defined in the
test sentence. Numbers and quoted text are considered parameters.