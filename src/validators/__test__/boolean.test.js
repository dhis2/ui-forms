import { boolean, invalidBooleanMessage } from '../boolean'

describe('validator: boolean', () => {
    it('should return undefined for an empty string', () => {
        expect(boolean('')).toBe(undefined)
    })

    it('should return undefined for a valid boolean', () => {
        const values = [true, false]
        for (const value of values) {
            expect(boolean(value)).toBe(undefined)
        }
    })

    it('should return an error for non-boolean values', () => {
        const values = ['text', 3, {}, [], () => {}]
        for (const value of values) {
            expect(boolean(value)).toBe(invalidBooleanMessage)
        }
    })
})
