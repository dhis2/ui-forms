import React from 'react'
import { Form } from '../../src'

const defaultOnSubmit = values => console.log(values)

export const createFormDecorator = ({
    onSubmit = defaultOnSubmit,
    mutators = {},
}) => fn => (
    <Form onSubmit={onSubmit} mutators={mutators}>
        {formProps => (
            <form onSubmit={formProps.handleSubmit}>
                {fn({ formProps })}
                <button type="submit">Submit</button>
            </form>
        )}
    </Form>
)

export const formDecorator = createFormDecorator({})
