# ui-form

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**[Online docs and demos (latest master
build)](https://d2-ci.github.io/ui-form/)**

## Building a form

This library offers a `<Form />` component with the same api as react-final-form's Form api.
It should always be used as `ui-forms` uses custom mutators behind the scenes to provide certain functionalities such as conditional fields.

### Validation

`ui-forms` provides basic validation functions and a `composeValidators`.
The validation functions have the same api as react-final-form's validators
