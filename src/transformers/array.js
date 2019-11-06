const format = value => value || []

const parse = value =>
    !value || (Array.isArray(value) && value.length === 0) ? undefined : value

export const array = { format, parse }
