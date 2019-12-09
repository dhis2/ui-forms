import { composeValidators } from '../composeValidators'
import { required, requiredMessage } from '../required'
import { email, invalidEmailMessage } from '../email'

describe('composeValidators', () => {
    const validator = composeValidators(required, email)

    it('should return undefined for valid values', () => {
        expect(validator('test@dhis2.org')).toBe(undefined)
    })

    it('should return the required message for empty values', () => {
        const validator = composeValidators(required, email)

        expect(validator('')).toBe(requiredMessage)
    })

    it('should return invalid e-mail message for malformed strings', () => {
        const validator = composeValidators(required, email)

        expect(validator('test@dhis2.')).toBe(invalidEmailMessage)
    })
})
