/* eslint-disable react/no-unescaped-entities, react/prop-types */

import { Button } from '@dhis2/ui-core'
import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  CheckboxGroup,
  Field,
  Form,
  Input,
  MultiSelect,
  RadioGroup,
  SingleSelect,
  Switch,
  composeValidators,
  email,
  required,
} from '../src';

const H2 = ({ children, style }) => (
    <h2 style={{ margin: '50px 0 20px', ...style }}>
        {children}
    </h2>
)

const Text = ({ children }) => (
    <div style={{ borderLeft: '4px solid blue', paddingLeft: 10 }}>
        {children}
    </div>
)

storiesOf('Guides: Forms', module)
    .addParameters({ options: { showPanel: false } })
    .add('Standard form', () => {
        return (
            <Form
                onSubmit={values => console.log(JSON.stringify(values, null, 2))}
            >
                {({ handleSubmit, values }) => (
                    <form
                        onSubmit={handleSubmit}
                        style={{ maxWidth: 830 }}
                    >
                        <H2 style={{ marginTop: 0 }}>The current values are:</H2>
                        <Text>
                            As you can see, there's only one prop on the values object.
                            That's the case because the "gender" field is the only one with
                            an "initialValue" prop.

                            <code><pre>{JSON.stringify(values, null, 2)}</pre></code>
                        </Text>

                        <H2>Standard SingleSelect field</H2>
                        <Text>
                            If it's reuired to have the "gender" property on the values
                            object, even when it's empty, the "Field" requires an "initialValue"
                            prop, otherwise the "gender" property is missing until this field is
                            changed.

                            <code><pre>{`
<Field
    name="gender"
    label="Gender"
    component={SingleSelect}
    initialValue=""
    options={[
        { value: '', label: 'Please choose' },
        { value: 'mr', label: 'Mr.' },
        { value: 'ms', label: 'Ms.' },
        { value: 'other', label: 'Other' },
        { value: 'unknown', label: 'I'd rather not say' },
    ]}
/> `}</pre></code>
                        </Text>

                        <Field
                            name="gender"
                            label="Gender"
                            component={SingleSelect}
                            initialValue=""
                            options={[
                                { value: '', label: 'Please choose' },
                                { value: 'mr', label: 'Mr.' },
                                { value: 'ms', label: 'Ms.' },
                                { value: 'other', label: 'Other' },
                                { value: 'unknown', label: 'I\'d rather not say' },
                            ]}
                        />

                        <H2>Standard Input fields</H2>
                        <Text>
                            The next two fields are required input fields.
                            In order to make the required, you just need to add the "required" validator.
                            But if you also want to show the required asterix, you also need to provide
                            the "required" prop.

                            <code><pre>{`
<Field
    required
    label="First name"
    name="fname"
    validate={required}
    component={Input}
    helpText="Please enter your first name, excluding middle names"
/>

<Field
    required
    label="Last name"
    name="lname"
    validate={required}
    component={Input}
    helpText="Please enter your first name, excluding middle names"
/> `}</pre></code>
                        </Text>
                        <Field
                            required
                            label="First name"
                            name="fname"
                            validate={required}
                            component={Input}
                            helpText="Please enter your first name, excluding middle names"
                        />

                        <Field
                            required
                            label="Last name"
                            name="lname"
                            validate={required}
                            component={Input}
                            helpText="Please enter your first name, excluding middle names"
                        />

                        <H2>Conditionally display fields</H2>
                        <Text>
                            The next field, which is a regular Switch field,
                            will trigger the form to display two other field when set to active.
                            Note: If you change one or both condition fields and disable the switch,
                            their values will still be on the values object.
                            An example of how to remove these values will be added later.

                            <code><pre>{`
<Field
    name="subscribe"
    label="I want to receive updated and notifications about the latest changes?"
    component={Switch}
/>

{values.subscribe && (
    <Field
        required={values.subscribe}
        label="E-mail address"
        name="email1"
        validate={composeValidators(
            email,
            value => {
                if (values.subscribe && !value) {
                    return "You need to provide an e-mail address"
                }
            }
        )}
        component={Input}
        helpText="Please enter the e-mail address you want us to send the updates to"
    />
)}

{values.subscribe && (
    <Field
        disabled={!values.subscribe}
        required={values.subscribe}
        label="E-mail address confirmation"
        name="email2"
        validate={composeValidators(email, required)}
        component={Input}
        helpText="Please confirm your e-mail address"
    />
)} `}</pre></code>
                        </Text>
                        <Field
                            name="subscribe"
                            label="I want to receive updated and notifications about the latest changes?"
                            component={Switch}
                        />

                        {values.subscribe && (
                            <>
                                <h3>Required e-mail fields</h3>
                                <Text>
                                    The e-mail address fields are both required and
                                    have to be valid e-mails. In order to have the proper validator
                                    function, you can use the "composeValidators" helper function.
                                    In this case we're providing the available "email" and "required"
                                    validator functions to the "composeValidators" helper.
                                </Text>
                                <Field
                                    required={values.subscribe}
                                    label="E-mail address"
                                    name="email1"
                                    validate={composeValidators(
                                        email,
                                        value => {
                                            if (values.subscribe && !value) {
                                                return "You need to provide an e-mail address"
                                            }
                                        }
                                    )}
                                    component={Input}
                                    helpText="Please enter the e-mail address you want us to send the updates to"
                                />
                            </>
                        )}

                        {values.subscribe && (
                            <Field
                                disabled={!values.subscribe}
                                required={values.subscribe}
                                label="E-mail address confirmation"
                                name="email2"
                                validate={composeValidators(email, required)}
                                component={Input}
                                helpText="Please confirm your e-mail address"
                            />
                        )}

                        <H2>Radio groups</H2>
                        <Text>
                            To help not having to write a render function, contrary to the
                            ui-core component, you can provide the options as an array and
                            the component will use ui-core's Radio component for each option
                            specified.

                            <code><pre>{`
<Field
    label="Food"
    component={RadioGroup}
    options={[
        { value: '', label: 'Don't care' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'veggie', label: 'Vegetarian' },
        { value: 'veggie', label: 'Vegetarian' },
        { value: 'fish', label: 'Fish' },
        { value: 'halal', label: 'Halal' },
    ]}
    helpText="If we ever gather for food, what meal type would you like to eat"
/> `}</pre></code>
                        </Text>
                        <Field
                            label="Food"
                            component={RadioGroup}
                            options={[
                                { value: '', label: 'Don\'t care' },
                                { value: 'vegan', label: 'Vegan' },
                                { value: 'veggie', label: 'Vegetarian' },
                                { value: 'veggie', label: 'Vegetarian' },
                                { value: 'fish', label: 'Fish' },
                                { value: 'halal', label: 'Halal' },
                            ]}
                            helpText="If we ever gather for food, what meal type would you like to eat"
                        />

                        <H2>Checkbox group</H2>
                        <Text>
                            This behaves similar to the RadioGroup.
                            The apis of these two components are identical.

                            <code><pre>{`
<Field
    label="Pizza toppings"
    name="pizzaToppings"
    component={CheckboxGroup}
    options={[
        { value: '', label: 'All of the options' },
        { value: 'ham', label: 'Ham' },
        { value: 'salami', label: 'Salami' },
        { value: 'pineapple', label: 'Pineapple' },
        { value: 'bellpepper', label: 'Bellpepper' },
    ]}
    helpText="If we ever order pizza, what ingredients would you like on top"
/> `}</pre></code>
                        </Text>
                        <Field
                            label="Pizza toppings"
                            name="pizzaToppings"
                            component={CheckboxGroup}
                            options={[
                                { value: '', label: 'All of the options' },
                                { value: 'ham', label: 'Ham' },
                                { value: 'salami', label: 'Salami' },
                                { value: 'pineapple', label: 'Pineapple' },
                                { value: 'bellpepper', label: 'Bellpepper' },
                            ]}
                            helpText="If we ever order pizza, what ingredients would you like on top"
                        />

                        <H2>MultiSelect</H2>
                        <Text>
                            MultiSelect bla bla
                        </Text>
                        <Field
                            label="Sandwich toppings"
                            name="sandwhichToppings"
                            component={MultiSelect}
                            options={[
                                { value: '', label: 'All of the options' },
                                { value: 'ham', label: 'Ham' },
                                { value: 'salami', label: 'Salami' },
                                { value: 'pineapple', label: 'Pineapple' },
                                { value: 'bellpepper', label: 'Bellpepper' },
                            ]}
                            helpText="If we ever order sandwiches, what ingredients would you like on top"
                        />

                        <H2>Submitting forms</H2>
                        <Text>
                            If you want to submit forms, you don't need any special field.
                            Any button or input with type="submit" will suffice.

                            <code><pre>{`
<Button
    primary
    type="submit"
>
    Submit
</Button> `}</pre></code>
                        </Text>
                        <Button
                            primary
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                )}
            </Form>
        )
    })
