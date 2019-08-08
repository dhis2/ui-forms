import { Form } from 'react-final-form'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

const FormWrapper = fn => (
    <Form onSubmit={values => console.log(JSON.stringify(values, null, 2))}>
        {({ handleSubmit }) => <form onSubmit={handleSubmit}>{fn()}</form>}
    </Form>
)

export { FormWrapper }
