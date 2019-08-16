import { fileParser } from '../fileParser'

describe('parsers - fileParser', () => {
    const file = new File([], 'file_name.ext')
    const payload = { target: { files: [file] } }

    it('should extract the first file from the event', () => {
        expect(fileParser.parse(payload)).toBe(file)
    })

    it('should return the passed value', () => {
        expect(fileParser.format(file)).toBe(file)
    })
})
