import { Form as RFFForm } from 'react-final-form'
import React from 'react'
import propTypes from 'prop-types'

import { clear } from './ManagedForm/mutators.js'

const defaultMutators = {
    clear,
}

export const ManagedForm = ({ children, mutators, ...props }) => {
    return (
        <RFFForm
            {...props}
            mutators={{
                ...defaultMutators,
                ...mutators,
            }}
        >
            {formArgs => (
                <form onSubmit={formArgs.handleSubmit}>
                    {children(formArgs)}
                </form>
            )}
        </RFFForm>
    )
}

ManagedForm.propTypes = {
    ...RFFForm.propTypes,
    children: propTypes.func.isRequired,
}

ManagedForm.defaultProps = {
    mutators: {},
}
