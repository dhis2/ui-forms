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

const useToggleGroupChangeHandler = (value, onChange) =>
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

export { useToggleChangeHandler, useToggleGroupChangeHandler }
