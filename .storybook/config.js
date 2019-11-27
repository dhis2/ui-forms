import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { CssResetWrapper } from './css-reset-decorator'

import 'typeface-roboto'

const includeTesting = 'STORYBOOK_INCLUDE_TESTING' in process.env

addDecorator(jsxDecorator)
addDecorator(withPropsTable)
addDecorator(CssResetWrapper)

function loadStories() {
    const req = require.context('../stories', true, /\.stories\.js/)
    req.keys().forEach(filename => req(filename))
}

function loadStoriesInclTesting() {
    loadStories()

    const req = require.context('../stories', true, /\.stories\.testing\.js/)
    req.keys().forEach(filename => req(filename))
}

configure(includeTesting ? loadStoriesInclTesting : loadStories, module)
