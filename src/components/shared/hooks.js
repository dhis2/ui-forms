import { useCallback } from 'react'

// If the input has a value (checkedValue prop) the form value is: checkedValue || ''
// Otherwise the form-value is: true || false
const getToggleValue = ({ checked, value }) => {
    if (value) {
        return checked ? value : ''
    }
    return checked
}

const useToggleChangeHandler = onChange =>
    useCallback(payload => {
        onChange(getToggleValue(payload)), [onChange]
    })

const useToggleGroupChangeHandler = (currentValues, onChange) =>
    useCallback(
        payload => {
            const activeIndex = currentValues.indexOf(payload.value)
            const valueArray =
                activeIndex === -1
                    ? [...currentValues, payload.value]
                    : currentValues
                          .slice(0, activeIndex)
                          .concat(currentValues.slice(activeIndex + 1))
            const value = valueArray.length === 0 ? '' : valueArray

            onChange({ value }, null)
        },
        [currentValues, onChange]
    )

export { useToggleChangeHandler, useToggleGroupChangeHandler }
