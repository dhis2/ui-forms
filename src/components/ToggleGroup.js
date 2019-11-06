import React, { Component } from 'react'
import propTypes from 'prop-types'

import { adapterComponentProps } from './FieldAdapter.js'

class MultiToggleGroup extends Component {
    onChange = ({ target }) => {
        this.props.onChange(this.getUpdatedValueArray(target.value))
    }

    getUpdatedValueArray(activeValue) {
        const currentValues = this.props.value
        const activeIndex = currentValues.indexOf(activeValue)

        if (activeIndex === -1) {
            return [...currentValues, activeValue]
        }

        return currentValues
            .slice(0, activeIndex)
            .concat(currentValues.slice(activeIndex + 1))
    }

    render() {
        const {
            options,
            onChange,
            toggleComponent: ToggleComponent,
            toggleGroupComponent: ToggleGroupComponent,
            ...rest
        } = this.props

        return (
            <ToggleGroupComponent {...rest} onChange={this.onChange}>
                {options.map(({ value, label }) => (
                    <ToggleComponent key={value} label={label} value={value} />
                ))}
            </ToggleGroupComponent>
        )
    }
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
