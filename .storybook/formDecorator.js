import React from 'react'
import { Button } from '@dhis2/ui-core'
import { Form, FormSpy } from '../src'

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
                {formProps.addFormSpy && (
                    <FormSpy>
                        {({ values }) => {
                            window.formValues = values
                            return <span className="form-spy-internal" />
                        }}
                    </FormSpy>
                )}
                {fn({ formRenderProps })}
                <Button primary type="submit">
                    Submit
                </Button>
            </form>
        )}
    </Form>
)

export const formDecorator = createFormDecorator({})
export const testingFormDecorator = createFormDecorator({ addFormSpy: true })
