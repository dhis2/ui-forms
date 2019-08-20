import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { resolve } from 'styled-jsx/css'

import { Help, Radio } from '@dhis2/ui-core'

import { theme } from '@dhis2/ui-core'
const spacers = {
    dp4: '4px',
    dp12: '12px',
}

const inlineRadio = resolve`
    margin-right: ${spacers.dp12};
`
const stackedRadio = resolve`
    margin-bottom: ${spacers.dp12};
`

const RadioGroup = ({
    className,
    error,
    helpText,
    inline,
    label,
    name,
    onChange,
    options,
    required,
    valid,
    value,
    warning,
}) => {
    const statusProps = { error, warning, valid }
    const radioStyle = inline ? inlineRadio : stackedRadio

    return (
        <div className={cx('container', className)}>
            <span className={cx('group-label', { ...statusProps, required })}>
                {label}
            </span>
            <div className={cx('group', { inline })}>
                {options.map(option => (
                    <Radio
                        key={option.value}
                        className={radioStyle.className}
                        name={name}
                        value={option.value}
                        label={option.label}
                        checked={value === option.value}
                        onChange={onChange}
                        {...statusProps}
                    />
                ))}
            </div>
            {helpText && <Help {...statusProps}>{helpText}</Help>}
            {radioStyle.styles}
            <style jsx>{`
                .container {
                    box-sizing: content-box;
                }

                .group-label {
                    display: block;
                    font-size: 16px;
                    line-height: 24px;
                    color: ${theme.default};
                    margin-bottom: ${spacers.dp12};
                }

                .group {
                    display: flex;
                    flex-direction: column;
                }

                .group.inline {
                    display: flex;
                    flex-direction: row;
                }

                .group-label.required::after {
                    padding-left: ${spacers.dp4};
                    content: '*';
                }

                .valid {
                    color: ${theme.valid};
                }

                .error {
                    color: ${theme.error};
                }

                .warning {
                    color: ${theme.warning};
                }
            `}</style>
        </div>
    )
}

RadioGroup.propTypes = {
    className: propTypes.string,
    // TODO: add prop-validation for different statusses (mutually exclusive)
    error: propTypes.bool,
    helpText: propTypes.string,
    inline: propTypes.bool,
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    onChange: propTypes.func,
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.any.isRequired,
        })
    ).isRequired,
    required: propTypes.bool,
    valid: propTypes.bool,
    value: propTypes.any,
    warning: propTypes.bool,
}

RadioGroup.defaultProps = {
    required: false,
    inline: true,
}

export { RadioGroup }
