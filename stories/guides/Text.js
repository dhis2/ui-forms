import { colors } from '@dhis2/ui-core'
import React from 'react'
import propTypes from '@dhis2/prop-types'

export const Text = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div {
                border-left: 4px solid ${colors.blue400};
                padding: 5px 0 5px 10px;
                margin-bottom: 10px;
            }
        `}</style>
    </div>
)

Text.propTypes = {
    children: propTypes.node,
}
