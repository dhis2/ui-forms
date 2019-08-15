import React from 'react'
import propTypes from 'prop-types'

const FlexContainer = ({
    children,
    direction,
    wrap,
    justifyContent,
    alignItems,
    alignContent,
}) => (
    <div>
        {children}
        <style jsx>{`
            div {
                display: flex;
                flex-direction: ${direction};
                flex-wrap: ${wrap};
                justify-content: ${justifyContent};
                align-items: ${alignItems};
                align-content: ${alignContent};
            }
        `}</style>
    </div>
)

FlexContainer.propTypes = {
    children: propTypes.node,
    direction: propTypes.oneOf([
        'row',
        'row-reverse',
        'column',
        'column-reverse',
    ]),
    wrap: propTypes.oneOf(['nowrap', 'wrap', 'wrap']),
    justifyContent: propTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
    ]),
    alignItems: propTypes.oneOf([
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
    ]),
    alignContent: propTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'stretch',
    ]),
}

FlexContainer.defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
}

export { FlexContainer }
