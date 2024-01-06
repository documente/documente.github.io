---
outline: [2, 3]
---

# Testing API

Documenté comes with pre-defined actions and assertions that cover most of the common use cases.

## Built-in actions

### visit

Triggers a navigation to the given URL.

#### Patterns

- `visit {{url}}`

#### Examples

```
When I visit "https://example.com"
then title should have text "Example Domain"
```

### click

Triggers a `click` event on the given element.

#### Patterns

- `click <selector>`
- `click on <selector>`

#### Examples

```
When I click confirm button
When I click on confirm button
```

### double click

Triggers a `dblclick` event on the given element.

#### Patterns

- `double click <selector>`
- `double click on <selector>`
- `double-click <selector>`
- `double-click on <selector>`
- `doubleclick <selector>`
- `doubleclick on <selector>`

#### Examples

```
When I double click confirm button
When I double click on confirm button
When I double-click confirm button
When I double-click on confirm button
When I doubleclick confirm button
When I doubleclick on confirm button
```

### right click

Triggers a `contextmenu` event on the given element.

#### Patterns

- `right click <selector>`
- `right click on <selector>`
- `right-click <selector>`
- `right-click on <selector>`
- `rightclick <selector>`
- `rightclick on <selector>`

#### Examples

```
When I right click confirm button
When I right click on confirm button
When I right-click confirm button
When I right-click on confirm button
When I rightclick confirm button
When I rightclick on confirm button
```

### type

Types the given text into the given element.

The target element must accept text input, e.g. `<input>`, `<textarea>` or `[contenteditable]`.

#### Patterns

- `type <text> on <selector>`
- `type <text> into <selector>`
- `type <text> in <selector>`

#### Examples

```
When I type "Hello World" on input field
When I type "Hello World" into input field
When I type "Hello World" in input field
```

### clear

Clears the given element.

The target element must accept text input, e.g. `<input>`, `<textarea>` or `[contenteditable]`.

#### Patterns

- `clear <selector>`

#### Examples

```
When I clear input field
```

### check

Checks the given checkbox.

#### Patterns

- `check <selector>`

#### Examples

```
When I check "I agree" checkbox
```

### uncheck

Unchecks the given checkbox.

#### Patterns

- `uncheck <selector>`

#### Examples

```
When I uncheck "I agree" checkbox
```

### select

Selects the given option from the given select element.

#### Patterns

- `select <option> in <selector>`
- `select <option> from <selector>`

#### Examples

```
When I select "Option 1" in select field
When I select "Option 1" from select field
```

### scroll

Scrolls the given element into view.

#### Patterns

- `scroll to <selector>`
- `scroll <selector> into view`

#### Examples

```
When I scroll to confirm button
When I scroll confirm button into view
```

### go back

Navigates back in history.

#### Patterns

- `go back`

#### Examples

```
When I go back
```

### go forward

Navigates forward in history.

#### Patterns

- `go forward`

#### Examples

```
When I go forward
```

## Built-in assertions

### exist

Asserts that the given element exists.

#### Patterns

- `exist`

#### Examples

```
Then confirm button should exist
```

### not exist

Asserts that the given element does not exist.

#### Patterns

- `not exist`

#### Examples

```
Then confirm button should not exist
```

### have occurrence(s)

Asserts that the given selector has a given number of occurrences.

For example, if the selector matches 3 elements, then the following assertion is valid:

```it should have 3 occurrences```

#### Patterns

- `have <number> occurrences`
- `have <number> occurrence`
- `have <number> occurrence(s)`

#### Examples

```
Then confirm button should have 1 occurrence
Then confirm button should have 2 occurrences
Then confirm button should have 3 occurrence(s)
```

### be visible

Asserts that the given element is visible.

#### Patterns

- `be visible`

#### Examples

```
Then confirm button should be visible
```

### be hidden

Asserts that the given element is hidden.

#### Patterns

- `be hidden`

#### Examples

```
Then confirm button should be hidden
```

### have text

Asserts that the given element has the given text.

#### Patterns

- `have text <text>`

#### Examples

```
Then title should have text "Example Domain"
```

### contain text

Asserts that the given element contains the given text.

#### Patterns

- `contain text <text>`

#### Examples

```
Then title should contain text "Example"
```

### have value

Asserts that the given element has the given value.

The target element should have a `value` attribute, e.g. `<input>` or `<textarea>`.

#### Patterns

- `have value <value>`

#### Examples

```
Then input field should have value "Hello World"
```

### have class

Asserts that the given element has the given CSS class.

#### Patterns

- `have class <class>`

#### Examples

```
Then confirm button should have class "btn"
```

### be checked

Asserts that the given checkbox is checked.

#### Patterns

- `be checked`

#### Examples

```
Then "I agree" checkbox should be checked
```

### be unchecked

Asserts that the given checkbox is unchecked.

#### Patterns

- `be unchecked`

#### Examples

```
Then "I agree" checkbox should be unchecked
```

### be enabled

Asserts that the given element is enabled.

The target element could be an `<input>`, `<textarea>` or `<button>`.

#### Patterns

- `be enabled`

#### Examples

```
Then confirm button should be enabled
```

### be disabled

Asserts that the given element is disabled.

The target element could be an `<input>`, `<textarea>` or `<button>`.

#### Patterns

- `be disabled`

#### Examples

```
Then confirm button should be disabled
```
