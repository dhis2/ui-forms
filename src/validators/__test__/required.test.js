import { required, requiredMessage } from '../required'

describe('validator: required', () => {
    it('should return undefined', () => {
        expect(required('not empty')).toBe(undefined)
    })

    it('should return Required', () => {
        expect(required('')).toBe(requiredMessage)
    })
})
