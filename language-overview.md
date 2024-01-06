---
outline: [2, 3]
---

# Language Overview

## Introduction

Documenté is based on a language called Phrasé.
It is based on Behavior-Driven Development (BDD) with Given-When-Then keywords.
It is designed to be intuitive and easy to learn.

## Sections

### Given-When-Then section

An individual test case is structured with a Given-When-Then section.

#### Given

The `given` part is optional and serves to establish prerequisites for the test.
Prerequisites involve actions on the system, either in the form of user actions or system state changes.

- A user action starts with the `I` pronoun, followed by a verb. Actions may include a target, introduced by the `on` preposition.
The target is identified as a component, chosen by specifying a path in the System Under Test (SUT) tree representation. This path is a sequence of component names separated by spaces.
- A system state change is expressed by a free-form statement which can include arguments. System state changes are mapped to custom functions declared in the [Externals file](/externals-file).

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

This part adheres to the same structured approach employed in the `given` part for specifying user actions within the test scenario.
Likewise, actions within the `when` section can be connected using the `and` keyword.

Examples:

```
When I click on welcome page greet button

When I type "John" in welcome page name input
and click on welcome page greet button
```

#### Then

The `then` part, also mandatory, is used to express expectations regarding the system state, such as message visibility or the disabled status of a text input. Expectations can be linked with the `and` keyword.

These expectations are conveyed by selecting a component and defining an assertion to execute.

Assertions, whether built-in or custom, are consistently identified by the keyword should.

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

Note that custom actions can also include assertions. This is useful when you need to check the result of an action before continuing interacting with the application.

### Custom assertions

Custom assertions are used to group multiple assertions into a single statement.

Custom assertions are built with a header following the form `For $element to [assertion name]:`, followed by a bullet list of statements.

Just like custom actions, custom assertions can take named parameters using the mustache-like syntax <code v-pre>{{parameter name}}</code>.

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

The `its` keyword is used to refer to the component selected in the previous step for the purpose of selecting a child component.

Examples:

```
then login form should be visible
and its submit button should be disabled

then welcome message should be visible
and its close button should be focused
```
