import { composeValidators } from '../composeValidators'
import { required, requiredMessage } from '../required'
import { email, invalidEmailMessage } from '../email'

describe('composeValidators', () => {
    it('should return undefined', () => {
        const validator = composeValidators(required, email)

        expect(validator('test@dhis2.org')).toBe(undefined)
    })

    it('should return required', () => {
        const validator = composeValidators(required, email)

        expect(validator('')).toBe(requiredMessage)
    })

    it('should return invalid e-mail', () => {
        const validator = composeValidators(required, email)

        expect(validator('test@dhis2.')).toBe(invalidEmailMessage)
    })
})
