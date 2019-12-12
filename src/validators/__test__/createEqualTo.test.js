import { createEqualTo } from '../createEqualTo.js'
import { testValidatorValues } from './helpers/testValidatorValues.js'

describe('validator: equalTo', () => {
    const equalToFoo = createEqualTo('foo')

    it('should create a function', () => {
        expect(typeof equalToFoo).toEqual('function')
    })

    describe('allows empty values', () => {
        testValidatorValues(equalToFoo, undefined, ['', null, undefined])
    })

    it('should return undefined for empty values on the equalTo field', () => {
        expect(equalToFoo('not foo', { foo: '' })).toEqual(undefined)
        expect(equalToFoo('not foo', { foo: null })).toEqual(undefined)
        expect(equalToFoo('not foo', {})).toEqual(undefined)
    })

    it('should return undefined when the fields have equal values', () => {
        const sameValue = 'abcde'

        expect(equalToFoo(sameValue, { foo: sameValue })).toEqual(undefined)
    })

    it('should return an error string when the fields have inequal values', () => {
        const inValidFooMsg =
            'Please make sure the value of this input matches the value in foo.'

        expect(equalToFoo('this', { foo: 'that' })).toEqual(inValidFooMsg)
    })

    it('should use the property description in the error string if provided', () => {
        const equalToBar = createEqualTo('bar', 'Barista')
        const inValidBarMsg =
            'Please make sure the value of this input matches the value in Barista.'

        expect(equalToBar('this', { bar: 'that' })).toEqual(inValidBarMsg)
    })
})
