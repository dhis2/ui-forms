import React, { useCallback } from 'react'
import propTypes from 'prop-types'

import { adapterComponentProps } from './FieldAdapter.js'

const useChangeHandler = (value, onChange) =>
    useCallback(
        payload => {
            const activeIndex = value.indexOf(payload.value)
            const valueArray =
                activeIndex === -1
                    ? [...value, payload.value]
                    : value
                          .slice(0, activeIndex)
                          .concat(value.slice(activeIndex + 1))

            onChange({ value: valueArray }, null)
        },
        [value, onChange]
    )

const MultiToggleGroup = ({
    options,
    toggleComponent: ToggleComponent,
    toggleGroupComponent: ToggleGroupComponent,
    value,
    onChange,
    ...rest
}) => {
    const handleChange = useChangeHandler(value, onChange)

    return (
        <ToggleGroupComponent {...rest} value={value} onChange={handleChange}>
            {options.map(({ value, label }) => (
                <ToggleComponent key={value} label={label} value={value} />
            ))}
        </ToggleGroupComponent>
    )
}

const toggleGroupPropTypes = {
    ...adapterComponentProps,
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
        })
    ).isRequired,
}

MultiToggleGroup.propTypes = {
    ...toggleGroupPropTypes,
    toggleComponent: propTypes.func.isRequired,
    toggleGroupComponent: propTypes.func.isRequired,
}

export { MultiToggleGroup, toggleGroupPropTypes }
