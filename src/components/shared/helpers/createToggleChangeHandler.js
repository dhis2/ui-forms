// If the input is checked and has a value (checkedValue prop) that is used as the form value
// A checked input without a value produces true
// And an unchecked input always produces an empty string
const createToggleChangeHandler = input => ({ checked, value }) =>
    input.onChange(checked ? value || true : '')

export { createToggleChangeHandler }
