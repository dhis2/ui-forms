import { email, invalidEmailMessage } from '../email'

describe('validator: email', () => {
    it('should return undefined', () => {
        expect(email('test@dhis2.org')).toBe(undefined)
    })

    it('should return invalid message', () => {
        expect(email('test@dhis2.')).toBe(invalidEmailMessage)
    })
})
