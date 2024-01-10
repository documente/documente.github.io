---
outline: [2, 3]
---

# Language Overview

Documenté is based on a language called Phrasé.
It is based on Behavior-Driven Development (BDD) with Given-When-Then keywords.
It is designed to be intuitive and easy to learn.

## Fluent Component Selection

Within test sentences, component selection is facilitated by traversing the System Under Test (SUT) tree representation
defined in the selectors file.

For instance, consider the following selectors tree:

```yaml
foo:
  _selector: "#foo"
  bar: "#bar"
  baz: "#baz"
```

You can select the `bar` component by specifying the path "foo bar". (e.g. `when I click on foo bar`).

In a given section, the most recently selected node is remembered,
allowing you to omit parts of the hierarchy in subsequent paths.
Node resolution follows these rules:

- Search among the children of the most recently selected node.
- Explore among the siblings of the most recently selected node.
- Resolve a node starting from the root and navigating down.

It allows you to write test sentences like this:

```
Given I click on foo bar
when I click on baz
then foo should be hidden
```

Note that the `foo` component is not explicitly selected in the `when` sections.

This fluent selection mechanism enhances the ease with which components can be identified and interacted with in your
test sentences.

## Statements

A **statement** is a sentence that describes an action or an assertion. They can take multiple forms:
- [User actions](#user-actions)
- [System state changes](#system-state-changes)
- [Assertions](#assertions)

### Actions

An **action** refers to a specific interaction or operation performed on the application under test (SUT). Actions can
take two forms:

- User actions
- System state changes

#### User actions

These interactions typically mirror user actions, such as clicking buttons, entering text, navigating through pages,
or interacting with various elements.

Actions are integral components of test scenarios, encapsulating the steps required to simulate user behavior and
interactions with the application. They serve as the building blocks for constructing meaningful and comprehensive test
cases.

The library provides a range of built-in user actions, simplifying the testing process for common operations, including:

- visit
- click
- type
- clear
- hover

You can also define [custom user actions](#custom-actions). This allows you to define actions that are specific to 
your application requirements or to encapsulate complex sequences of interactions.

#### System state changes

System state changes are used to define the initial state of the application under test (SUT) or to simulate changes in
the system state. These changes can be used to set up the application for testing or to simulate specific scenarios.

They are mapped to a custom function defined in the [Externals file](/externals-file).

### Assertions

Assertions refer to statements or conditions that validate the expected outcomes of specific actions or interactions
within your test scenarios. These statements act as checkpoints, ensuring that the application under test behaves as
anticipated.

The library provides built-in assertions such as :

- should be visible
- should exist
- should have text

As every application is different and encourage reusability, you can also define custom assertions with
[custom assertion sections](#custom-assertions).

## Sections

Test cases are structured and organized into sections. There are two main types of sections:

- Test scenario sections that are built with a Given-When-Then structure
- Reusable sections that are built with a header followed by a bullet list of statements

Reusable sections are declined in two forms:

- Custom actions
- Custom assertions

Test scenario sections are used to define the test cases that will be executed against the application under test (SUT).
They may use one or more custom statements defined as custom actions and assertions.

### Given-When-Then section

An individual test case is structured with a Given-When-Then section that describes the test scenario.

Examples of test scenarios:

```
Given I visit "http://localhost:3000/myapp"
When I login as "user1"
Then welcome message should be visible
and it should have text "Welcome, user1!"

Given I visit "http://localhost:3000/myapp"
When I click on About menu item
Then About page should be visible
```

#### Given

The `given` part is optional and serves to establish prerequisites for the test.
Prerequisites involve actions on the system, either in the form of [user actions](#user-actions) or
[system state changes](#system-state-changes).

User actions and system state changes can be linked using the `and` keyword.

Examples:

```
Given I visit "http://localhost:3000/myapp"

Given I login as "user1"

Given the compact layout mode is enabled
and I click on navigation menu
and I click on dropdown menu item "About"

Given the task list has 3 tasks
```

#### When

The `when` part is a mandatory component that specifically outlines user actions crucial for the test scenario.

This part adheres to the same structured approach employed in the `given` part for specifying user actions within the
test scenario. Likewise, actions within the `when` section can be connected using the `and` keyword.

Examples:

```
When I click on welcome page greet button

When I type "John" in welcome page name input
and click on welcome page greet button
```

#### Then

The `then` part, also mandatory, is used to express expectations regarding the system state, such as message visibility
or the disabled status of a text input. Expectations can be linked with the `and` keyword.

These expectations are conveyed by selecting a component and defining an assertion to execute.

Assertions, whether built-in or [custom](#custom-assertions), are consistently identified by the keyword `should`.

Examples:

```
then welcome message should be visible

then welcome message should be visible
and it should have fragment highlighted "John"

then welcome page name input should be disabled

then login form should be visible
and it should display the error message "Invalid credentials"
```

### Custom actions

Custom actions are used to encapsulate complex or repetitive sequences of interactions.

Custom actions are structured with a header following the form `In order to [action name]:`,
followed by a bullet list of statements detailing the steps required for the action to complete.

Custom actions can apply to a specific component by using the `$element` placeholder.

Custom actions can also define named parameters using the mustache-like syntax <code v-pre>{{parameter name}}</code>.

Examples:

```
In order to toggle compact layout mode:
- I click on navigation menu
- I click on dropdown menu item "Layout"
- I click on layout selector item "Compact"

In order to login as {{username}} with password {{password}}:
- I type "{{username}}" in login form username input
- I type "{{password}}" in password input
- I click on confirm button

In order to enter {{text}} in $element:
- I click on its edit button
- I type "{{text}}" into input
- I click confirm button
```

Custom actions can then be used in the `given` and `when` sections or in other custom actions.

Examples:

```
Given I toggle compact layout mode

When I login as "user1" with password "123456"

In order to send message {{message}}:
- I enter "{{message}}" in message field
- I click on send button
```

Note that custom actions can also include assertions. This is useful when you need to check the result of an action
before continuing interacting with the application.

### Custom assertions

Custom assertions are used to group multiple assertions into a single statement.

Custom assertions are built with a header following the form `For $element to [assertion name]:`, followed by a bullet
list of statements.

Just like custom actions, custom assertions can take named parameters using the mustache-like syntax
<code v-pre>{{parameter name}}</code>.

Examples:

```
For $element to show error message {{message}}:
- its error message container should be visible
- it should contain text "{{message}}"
```

Custom assertions can then be used in the `then` section or in other custom assertions.

Examples:

```
Then login form should show error message "Invalid credentials"
```

## Quoted text and numbers

Quoted text and numbers are used to specify values for parameters in the test sentences.

Quoted text uses double quotes (e.g. `"John"`). Numbers are not quoted and must be sequences of characters that can be
parsed as a number (e.g. `123.456`).

Parameters can be used in selectors, actions, and assertions.

Examples:

```
given I visit "http://localhost:3000/myapp"

when I click on menu item with text "edit"

then task with title "Buy milk" should exist

then task list should have 3 tasks
```

## Keywords

### `it`

The `it` keyword is used to refer to the component selected in the previous step.

Examples:

```
then welcome message should be visible
and it should have fragment highlighted "John"

then logout button should be visible
and it should be disabled
```

### `its`

The `its` keyword is used to refer to the component selected in the previous step for the purpose of selecting a child
component.

Examples:

```
then login form should be visible
and its submit button should be disabled

then welcome message should be visible
and its close button should be focused
```

## Environment variables

Environment variables are accessed in quoted text with the Moustache-like syntax <code v-pre>{{variable name}}</code>.

They are defined in the [environment file](/environment-file).
