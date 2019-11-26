/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { storiesOf } from '@storybook/react'

import { Code } from './guides/Code';
import { InlineCode } from './guides/InlineCode';
import { Field, Input, composeValidators, email, required } from '../src';
import { H2 } from './guides/Headline';
import { Text } from './guides/Text';
import { formDecorator } from '../.storybook/formDecorator'

storiesOf('Guides: Validation', module)
    .addDecorator(formDecorator)
    .add('"required" validator', () => (
        <>
            <H2>Required validator</H2>
            <Text>
                If one of your fields is required,
                you can use the <InlineCode>required</InlineCode> validator.<br />
                <br />
                <Text>
                    <b>Note:</b> If you want to display the "required" style
                    of the component, you will have to add custom props
                    to enable that.<br />
                    If you're using the built-in components of ui-forms,
                    you will have to add the "required" prop
                </Text>

                <Code>{`
<Field
    component={Input}
    name="input1"
    label="This is a required input without the required prop"
    validate={required}
/>

<Field
    required
    component={Input}
    name="input2"
    label="This is a required input with the required prop"
    validate={required}
/>
                `}</Code>
            </Text>

            <Field
                component={Input}
                name="input1"
                label="This is a required input without the required prop"
                validate={required}
            />

            <Field
                required
                component={Input}
                name="input2"
                label="This is a required input with the required prop"
                validate={required}
            />
        </>
    ))
    .add('"email" validator', () => (
        <>
            <H2>E-mail validator</H2>
            <Text>
                If one of your fields has to be a valid e-mail address,
                you can use the <InlineCode>email</InlineCode> validator.<br />
                <Code>{`
<Field
    component={Input}
    name="e-mail"
    label="Please enter a valid e-mail"
    validate={email}
/>
                `}</Code>
            </Text>

            <Field
                component={Input}
                name="e-mail"
                label="Please enter a valid e-mail"
                validate={email}
            />
        </>
    ))
    .add('Multiple validators', () => (
        <>
            <H2>Multiple validators</H2>
            <Text>
                If you want to use multiple validators,
                you can use the <InlineCode>composeValidators</InlineCode> helper<br />
                <br />
                <Code>{`
<Field
    required
    component={Input}
    name="e-mail"
    label="It's required that you enter a valid e-mail"
    validate={composeValidators(required, email)}
/>
                `}</Code>
            </Text>

            <Field
                required
                component={Input}
                name="e-mail"
                label="It's required that you enter a valid e-mail"
                validate={composeValidators(required, email)}
            />
        </>
    ))
