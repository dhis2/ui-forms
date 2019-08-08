import { Form as RFFForm } from 'react-final-form'
import React from 'react'

import { clear } from './mutators.js'

const defaultMutators = {
    clear,
}

export const Form = ({ mutators, ...props }) => {
    return (
        <RFFForm
            {...props}
            mutators={{
                ...defaultMutators,
                ...mutators,
            }}
        />
    )
}

Form.propTypes = {
    ...RFFForm.propTypes,
}

Form.defaultProps = {
    mutators: {},
}
