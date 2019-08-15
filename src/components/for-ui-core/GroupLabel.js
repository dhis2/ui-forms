import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
// TODO: expose spacers etc in ui-core and use here
import { theme } from '@dhis2/ui-core'
const spacers = {
    dp12: '12px',
    dp16: '16px',
}

const GroupLabel = ({ children, required, valid, error, warning }) => (
    <span className={cx({ required, valid, error, warning })}>
        {children}
        <style jsx>{`
            span {
                font-size: 16px;
                line-height: 24px;
                color: ${theme.default};
            }

            .required::after {
                padding-left: ${spacers.dp4};
                content: '*';
            }

            .valid {
                color: ${theme.valid};
            }

            .error {
                color: ${theme.error};
            }

            .warning {
                color: ${theme.warning};
            }
        `}</style>
    </span>
)

GroupLabel.propTypes = {
    required: propTypes.bool,
    valid: propTypes.bool,
    error: propTypes.bool,
    warning: propTypes.bool,
}

export { GroupLabel }
