import { Help } from '@dhis2/ui-core'
import { useField } from 'react-final-form'
import React, { useRef, useCallback } from 'react'
import propTypes from 'prop-types'

import { FileUploadIcon } from './File/FileUploadIcon.js'
import { conditional } from './conditional'
import { styles } from './File/styles.js'

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

const File = ({ name, label, validate }) => {
    const ref = useRef()
    const onClick = useOnClick({ ref })
    const { input, meta } = useFileField({ name, ref, validate })

    const { value, ...withoutValue } = input
    const realLabel = value ? value.name : label

    return (
        <div className="container">
            <input {...withoutValue} ref={ref} className="input" />

            <button onClick={onClick} className="button">
                <FileUploadIcon />
                <span className="label">{realLabel}</span>
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

const ConditionalFile = conditional(File)

export { ConditionalFile as File }
