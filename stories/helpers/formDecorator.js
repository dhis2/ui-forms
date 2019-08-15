import React from 'react'
import { Form } from '../../src'

const defaultFormProps = {
    onSubmit: values => console.log(values),
    mutators: {},
}

export const createFormDecorator = formProps => fn => (
    <Form {...{ ...defaultFormProps, ...formProps }}>
        {formProps => (
            <form onSubmit={formProps.handleSubmit}>
                {fn({ formProps })}
                <button type="submit">Submit</button>
            </form>
        )}
    </Form>
)

export const formDecorator = createFormDecorator({})
