# Environment file

The environment file allows you to define variables that can be used anywhere in the test files using the Moustache-like syntax <code v-pre>{{variable name}}</code>.

It's a YAML file that defines a map of key-value pairs. Values must be strings.

The environment file is specified with the `env` property in the configuration file. It is optional.

## Example

Here is an example of an environment file:

```yaml
baseUrl: http://localhost:3000
apiUrl: http://localhost:3001/api
defaultUser: John.Doe
defaultPassword: secret
```
