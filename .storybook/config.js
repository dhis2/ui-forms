import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { CssResetWrapper } from './css-reset-decorator'

import 'typeface-roboto'

addDecorator(jsxDecorator)
addDecorator(withPropsTable)
addDecorator(CssResetWrapper)

const includeTesting = 'STORYBOOK_INCLUDE_TESTING' in process.env

function loadStories() {
    const components = require.context(
        '../stories',
        true,
        /\/component\.[^.]+\.js/
    )
    components.keys().forEach(filename => components(filename))

    const howto = require.context('../stories', true, /\/howto\.[^.]+\.js/)
    howto.keys().forEach(filename => howto(filename))
}

function loadStoriesInclTesting() {
    loadStories()

    const testing = require.context('../stories', true, /\/testing\.[^.]+\.js/)
    testing.keys().forEach(filename => testing(filename))
}

configure(includeTesting ? loadStoriesInclTesting : loadStories, module)
