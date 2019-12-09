import { required, requiredMessage } from '../required'

describe('validator: required', () => {
    it('should return undefined for allowed values', () => {
        const values = ['test', false, true, 0, 1, {}, [], new Date()]
        for (const value of values) {
            expect(required(value)).toBe(undefined)
        }
    })

    it('should return the error message for disallowed values', () => {
        const values = ['', undefined, null]
        for (const value of values) {
            expect(required(value)).toBe(requiredMessage)
        }
    })
})
