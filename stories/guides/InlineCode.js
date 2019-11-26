import { colors } from '@dhis2/ui-core'
import React from 'react'
import propTypes from '@dhis2/prop-types'

export const InlineCode = ({ children }) => (
    <code>
        {children}

        <style jsx>{`
            code {
                background: ${colors.grey400};
                display: inline-block;
                padding: 0 4px;
            }
        `}</style>
    </code>
)

InlineCode.propTypes = {
    children: propTypes.string,
}
