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

const attachFormValuesToWindow = formSpyProps => {
    // formSpyProps.values will not include form values that have been set
    // via the Field's initialValue prop, but calling getState on the form
    // property does return an object which also includes these initial values
    const formState = formSpyProps.form.getState()
    window.formValues = formState.values
}

export const createFormDecorator = formProps => fn => (
    <Form {...defaultFormProps} {...formProps}>
        {formRenderProps => (
            <form onSubmit={formRenderProps.handleSubmit}>
                {formProps.addFormSpy && (
                    <FormSpy>
                        {formSpyProps => {
                            attachFormValuesToWindow(formSpyProps)
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
