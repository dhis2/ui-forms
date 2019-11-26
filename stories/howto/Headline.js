import React from 'react'
import propTypes from '@dhis2/prop-types'

export const H2 = ({ children }) => (
    <h2>
        {children}

        <style jsx>{`
            h2 {
                margin: 50px 0 20px;
            }

            h2:first-child {
                margin-top: 0;
            }
        `}</style>
    </h2>
)

H2.propTypes = {
    children: propTypes.node,
}
