import { composeValidators } from '../composeValidators'
import { hasValue, hasValueMessage } from '../hasValue'
import { email, invalidEmailMessage } from '../email'

describe('composeValidators', () => {
    const validator = composeValidators(hasValue, email)

    it('should return undefined for valid values', () => {
        expect(validator('test@dhis2.org')).toBe(undefined)
    })

    it('should return the required message for empty values', () => {
        const validator = composeValidators(hasValue, email)

        expect(validator('')).toBe(hasValueMessage)
    })

    it('should return invalid e-mail message for malformed strings', () => {
        const validator = composeValidators(hasValue, email)

        expect(validator('test@dhis2.')).toBe(invalidEmailMessage)
    })
})
