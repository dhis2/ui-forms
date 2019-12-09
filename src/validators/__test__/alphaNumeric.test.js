import { alphaNumeric, invalidAlphaNumericMessage } from '../alphaNumeric'

describe('validator: alphaNumeric', () => {
    it('should return undefined for an empty string', () => {
        expect(alphaNumeric('')).toBe(undefined)
    })

    it('should return undefined for a valid alphaNumeric values', () => {
        const values = ['123456', 'abcdef', 'a1b2c3', 'A1B2C3d4e5']
        for (const value of values) {
            expect(alphaNumeric(value)).toBe(undefined)
        }
    })

    it('should return undefined for a valid alphaNumeric values', () => {
        const values = ['.,/|~', 'I have spaces']
        for (const value of values) {
            expect(alphaNumeric(value)).toBe(invalidAlphaNumericMessage)
        }
    })
})
