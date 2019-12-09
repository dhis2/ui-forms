import { email, invalidEmailMessage } from '../email'

describe('validator: email', () => {
    it('should return undefined for an empty string', () => {
        expect(email('')).toBe(undefined)
    })

    it('should return undefined for a valid email address', () => {
        expect(email('test@dhis2.org')).toBe(undefined)
    })

    it('should return undefined for an uppercase email address', () => {
        expect(email('TEST@DHIS2.ORG')).toBe(undefined)
    })

    it('should return an error message for a malformed email address', () => {
        expect(email('test@dhis2.')).toBe(invalidEmailMessage)
    })
})
