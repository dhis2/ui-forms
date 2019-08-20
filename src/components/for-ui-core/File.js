import { Button, theme } from '@dhis2/ui-core'
import React, { useRef, useCallback } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { FileUploadIcon } from './File/FileUploadIcon.js'
const spacers = {
    dp4: '4px',
    dp12: '12px',
}

const useOnClick = ref =>
    useCallback(() => {
        ref.current.click()
    }, [ref])

const useOnChange = (ref, onChange) =>
    useCallback(() => {
        onChange(ref.current.files[0])
    }, [ref, onChange])

const File = ({ error, label, onChange, required, valid, value, warning }) => {
    const ref = useRef()
    const onClick = useOnClick(ref)
    const memoizedOnChange = useOnChange(ref, onChange)
    const displayLabel = value ? value.name : label

    return (
        <div
            className={cx({
                error,
                valid: valid,
                warning: warning,
                required: required && !value,
            })}
        >
            <input type="file" ref={ref} onChange={memoizedOnChange} />

            <Button onClick={onClick} type="button" icon={<FileUploadIcon />}>
                <span className="label">{displayLabel}</span>
            </Button>

            <style jsx>{`
                input {
                    display: none;
                }

                .valid .label {
                    color: ${theme.valid};
                }

                .error .label {
                    color: ${theme.error};
                }

                .warning .label {
                    color: ${theme.warning};
                }

                .required .label::after {
                    padding-left: ${spacers.dp4};
                    content: '*';
                }

                .valid {
                    fill: ${theme.valid};
                }

                .error {
                    fill: ${theme.error};
                }

                .warning {
                    fill: ${theme.warning};
                }
            `}</style>
        </div>
    )
}

File.propTypes = {
    error: propTypes.bool,
    label: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    required: propTypes.bool,
    valid: propTypes.bool,
    value: propTypes.any,
    warning: propTypes.bool,
}

export { File }
