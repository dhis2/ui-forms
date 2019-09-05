# ui-form

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**[Online docs and demos (latest master
build)](https://ui-forms.dhis2.nu)**

## Known issues

#### ui-core

Currently ui-forms relies on some components that are not available yet in the published version of ui-core. So builds are failing and to get things to work locally you have to build ui-core locally:

```bash
cd node_modules/@dhis2/ui-core
yarn install && yarn build
```

#### prop-types

Currently some of the custom prop-type validations (i.e. `FileList` prop `children`) are throwing errors they shouldn't be. This issue cannot be reproduced in ui-core, and needs to be investigated further.

## Building a form

This library offers a `<Form />` component with the same api as react-final-form's Form api.
It should always be used as `ui-forms` uses custom mutators behind the scenes to provide certain functionalities such as conditional fields.

### Validation

`ui-forms` provides basic validation functions and a `composeValidators`.
The validation functions have the same api as react-final-form's validators

### Reserved property names

The react-final-form `Field` component will forward all props not part of its own API onto whatever component has been assigned to the `component` prop. However, the docs are not complete in that respect, so it might seem like some properties are mysteriously swallowed by a `Field`. Please find a full list of reserved prop names below, and find the original source [here](https://github.com/final-form/react-final-form/blob/master/src/Field.js#L7-L26):

-   afterSubmit
-   allowNull
-   beforeSubmit
-   children
-   component
-   defaultValue
-   format
-   formatOnBlur
-   initialValue
-   isEqual
-   multiple
-   name
-   parse
-   subscription
-   type
-   validate
-   validateFields
-   value
