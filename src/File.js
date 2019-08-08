import { useField } from 'react-final-form'
import { Help } from '@dhis2/ui-core'
import React, { useRef, useCallback } from 'react'
import propTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'

import { styles } from './File/styles.js'
import { FileUploadIcon } from './File/FileUploadIcon.js'

const useFileField = ({ name, ref, validate }) => {
    return useField(name, {
        type: 'file',
        parse: () => ref.current.files[0],
        validate,
    })
}

const useOnClick = ({ ref }) => {
    return useCallback(() => {
        ref.current.click()
    }, [ref])
}

export const File = ({ name, label, validate }) => {
    const ref = useRef()
    const onClick = useOnClick({ ref })
    const { input, meta } = useFileField({ name, ref, validate })

    const { value, ...withoutValue } = input

    return (
        <div className="container">
            <input {...withoutValue} ref={ref} className="input" />

            <button onClick={onClick} className="button">
                <FileUploadIcon />
                <span className="label">{label}</span>
            </button>

            {meta.touched && meta.error && (
                <div className="error">
                    <Help error>{meta.error}</Help>
                </div>
            )}

            <style jsx>{styles}</style>
        </div>
    )
}

File.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    validate: propTypes.func,
}

File.propTypes = {
    name: propTypes.string,
    validate: propTypes.func,
}
