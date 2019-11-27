import { useFormState } from 'react-final-form'
import React from 'react'

import { storiesOf } from '@storybook/react'

import { formDecorator } from '../.storybook/formDecorator'
import {
    Checkbox,
    CheckboxGroup,
    Field,
    Input,
    MultiSelect,
    RadioGroup,
    SingleSelect,
    Switch,
    composeValidators,
    email,
    required,
} from '../src'

const StandardForm = () => {
    const { values } = useFormState()

    return (
        <div style={{ maxWidth: 830 }}>
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
                    {
                        value: 'unknown',
                        label: "I'd rather not say",
                    },
                ]}
            />

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

            <Field
                name="subscribe"
                checkedValue="yes"
                label="I want to receive updated and notifications about the latest changes?"
                component={Switch}
            />

            {values.subscribe && (
                <Field
                    required={values.subscribe}
                    label="E-mail address"
                    name="email1"
                    validate={composeValidators(email, value => {
                        if (values.subscribe && !value) {
                            return 'You need to provide an e-mail address'
                        }
                    })}
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
            )}

            <Field
                name="food"
                label="Food"
                component={RadioGroup}
                options={[
                    { value: '', label: "Don't care" },
                    { value: 'vegan', label: 'Vegan' },
                    { value: 'veggie', label: 'Vegetarian' },
                    { value: 'fish', label: 'Fish' },
                    { value: 'halal', label: 'Halal' },
                ]}
                helpText="If we ever gather for food, what meal type would you like to eat"
            />

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

            <Field
                required
                name="tnc"
                checkedValue="yes"
                label="I accept the terms and conditions"
                validate={required}
                component={Checkbox}
            />
        </div>
    )
}

storiesOf('Testing: Forms', module)
    .addDecorator(formDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Standard form', () => <StandardForm />)
