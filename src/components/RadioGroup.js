import React from 'react'
import propTypes from 'prop-types'

import { FlexContainer, GroupLabel, InputSpacer } from './for-ui-core/index.js'
import { Help, Radio } from '@dhis2/ui-core'

const RadioGroup = ({
    input,
    meta,
    options,
    required,
    inline,
    label,
    ...rest
}) => {
    const hasError = meta.touched && meta.invalid
    const flexDirection = inline ? 'row' : 'column'

    return (
        <InputSpacer>
            <GroupLabel error={hasError} required={required}>
                {label}
            </GroupLabel>
            <FlexContainer direction={flexDirection}>
                {options.map(option => (
                    <InputSpacer inline={inline} key={option.value}>
                        <Radio
                            error={hasError}
                            name={input.name}
                            value={option.value}
                            label={option.label}
                            checked={input.value === option.value}
                            onChange={input.onChange}
                            {...rest}
                        />
                    </InputSpacer>
                ))}
            </FlexContainer>
            {hasError && <Help error>{meta.error}</Help>}
        </InputSpacer>
    )
}

RadioGroup.propTypes = {
    label: propTypes.string.isRequired,
    input: propTypes.shape({
        name: propTypes.string.isRequired,
        value: propTypes.any,
        onChange: propTypes.func,
    }),
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.any.isRequired,
        })
    ).isRequired,
    required: propTypes.bool,
    inline: propTypes.bool,
}

RadioGroup.defaultProps = {
    required: false,
    inline: true,
}

export { RadioGroup }
