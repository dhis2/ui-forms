import { FormSpy } from 'react-final-form'
import React, { Fragment } from 'react'
import propTypes from 'prop-types'

export const conditional = Input => {
    const Conditional = ({ condition, ...props }) => (
        <Fragment>
            {condition && <Input {...props} />}

            <FormSpy
                render={({ form, values }) => {
                    if (!form.mutators.clear) return <Fragment />

                    if (!condition && values[props.name]) {
                        form.mutators.clear(props.name)
                    }

                    return <Fragment />
                }}
            />
        </Fragment>
    )

    Conditional.propTypes = {
        ...Input.propTypes,
        condition: propTypes.bool,
    }

    Conditional.defaultProps = {
        condition: true,
    }

    Conditional.displayName = `conditional(${Input.displayName})`

    return Conditional
}
