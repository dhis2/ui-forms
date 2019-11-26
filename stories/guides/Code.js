import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import React from 'react'
import propTypes from '@dhis2/prop-types'

export const Code = ({ children, language, style }) => (
    <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{ margin: '16px 0 0' }}
    >
        {children.replace(/(^\n+|\n+(\s+)?$)/g, '')}
    </SyntaxHighlighter>
)

Code.propTypes = {
    children: propTypes.string,
    language: propTypes.string,
    style: propTypes.object,
}

Code.defaultProps = {
    language: 'jsx',
    style: solarizedlight,
}
