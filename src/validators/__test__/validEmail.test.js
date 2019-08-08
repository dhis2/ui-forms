import { validEmail, invalidEmailMessage } from '../validEmail'

describe('validator: validEmail', () => {
    it('should return undefined', () => {
        expect(validEmail('test@dhis2.org')).toBe(undefined)
    })

    it('should return invalid message', () => {
        expect(validEmail('test@dhis2.')).toBe(invalidEmailMessage)
    })
})
