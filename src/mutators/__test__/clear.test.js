import { Form, Field } from 'react-final-form'
import { mount } from 'enzyme'
import React from 'react'

import { clear } from '../clear'

const onSubmit = jest.fn()
const TestForm = () => (
    <Form
        onSubmit={onSubmit}
        mutators={{ clear }}
        initialValues={{ foo: 'bar', bar: 'baz' }}
    >
        {({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
                <Field type="input" name="bar" component="input" />

                <Field type="input" name="foo" component="input" />

                <button
                    id="button"
                    type="button"
                    onClick={() => form.mutators.clear('foo')}
                >
                    clear on click
                </button>

                <button id="submit" type="submit">
                    Submit
                </button>
            </form>
        )}
    </Form>
)

describe('mutators - clear', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should unset the state of "foo"', () => {
        const mountedForm = mount(<TestForm />)
        const clearButton = mountedForm.find('#button')
        const form = mountedForm.find('form')

        form.simulate('submit')
        const [valuesFirstSubmit] = onSubmit.mock.calls[0]

        clearButton.simulate('click')
        form.simulate('submit')
        const [valuesSecondSubmit] = onSubmit.mock.calls[1]

        expect(valuesFirstSubmit.foo).toBe('bar')
        expect(valuesSecondSubmit.foo).toBe(undefined)
    })

    it('should not unset the state of "bar"', () => {
        const mountedForm = mount(<TestForm />)
        const clearButton = mountedForm.find('#button')
        const form = mountedForm.find('form')

        form.simulate('submit')
        const [valuesFirstSubmit] = onSubmit.mock.calls[0]

        clearButton.simulate('click')
        form.simulate('submit')
        const [valuesSecondSubmit] = onSubmit.mock.calls[1]

        expect(valuesFirstSubmit.bar).toBe('baz')
        expect(valuesSecondSubmit.bar).toBe('baz')
    })
})
