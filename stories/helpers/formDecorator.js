import React from 'react'
import { Button } from '@dhis2/ui-core'
import { Form } from '../../src'

const defaultFormProps = {
    onSubmit: values => {
        console.log(
            '++++++++++++++++\n',
            'Form was submitted with values:\n',
            values,
            '\n----------------'
        )
    },
    mutators: {},
}

export const createFormDecorator = formProps => fn => (
    <Form {...defaultFormProps} {...formProps}>
        {formRenderProps => (
            <form onSubmit={formRenderProps.handleSubmit}>
                {fn({ formRenderProps })}
                <Button primary type="submit">
                    Submit
                </Button>
            </form>
        )}
    </Form>
)

export const formDecorator = createFormDecorator({})
