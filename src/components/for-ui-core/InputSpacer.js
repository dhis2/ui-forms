import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
// TODO: expose spacers etc in ui-core and use here
// import { spacers } from '@dhis2/ui-core'
const spacers = {
    dp12: '12px',
    dp16: '16px',
}

const InputSpacer = ({ children, inline }) => (
    <div className={cx({ inline, stacked: !inline })}>
        {children}
        <style jsx>{`
            .stacked {
                display: block;
                margin: 0 0 ${spacers.dp12} 0;
            }
            .inline {
                display: inline-block;
                margin: 0 ${spacers.dp16} 0 0;
            }
        `}</style>
    </div>
)

InputSpacer.propTypes = {
    inline: propTypes.bool,
}

InputSpacer.defaultProps = {
    inline: false,
}

export { InputSpacer }
