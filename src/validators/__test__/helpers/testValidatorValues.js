const testValidatorValues = (validator, returnValue, values) => {
    const returnValueStr =
        returnValue === undefined ? 'undefined' : 'an error string'

    for (const value of values) {
        const type = typeof value
        const valueStr = type === 'object' ? JSON.stringify(value) : value

        it(`should return ${returnValueStr} for value \`${valueStr}\` of type ${type}`, () => {
            expect(validator(value)).toBe(returnValue)
        })
    }
}

export { testValidatorValues }
