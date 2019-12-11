export const isEmpty = value =>
    typeof value === 'undefined' || value === null || value === ''

export const isString = value => typeof value === 'string'

export const isBoolean = value => typeof value === 'boolean'

export const isArray = value => Array.isArray(value)

export const isObject = value => typeof value === 'object' && !isArray(value)

export const isInteger = value => Number.isSafeInteger(value)

export const isNumeric = value =>
    (isString(value) || isNumber(value)) && !isNaN(value)

export const isNumber = value => typeof value === 'number'

export const toNumber = value => Number(value)
