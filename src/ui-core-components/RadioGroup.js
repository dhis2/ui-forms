import React from 'react'
import propTypes from 'prop-types'

import { Radio } from '../components/Radio.js'

const RadioGroup = ({ label, name, options, validate, defaultValue }) => {
    return (
        <div className="container">
            <span className="label">{label}</span>

            <div className="inputs">
                {options.map(option => (
                    <div className="input" key={option.value}>
                        <Radio
                            name={name}
                            value={option.value}
                            label={option.label}
                            validate={validate}
                            defaultValue={defaultValue}
                        />
                    </div>
                ))}
            </div>

            {
                /*
                For whatever reason styled-jsx had problems when all styles where in one tag
            */ ''
            }
            <style jsx>{`
                .container {
                    margin-bottom: 15px;
                }
            `}</style>

            <style jsx>{`
                .label {
                    display: block;
                    color: #000;
                    font-size: 13px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin: 0 0 10px;
                }
            `}</style>

            <style jsx>{`
                .inputs {
                    display: flex;
                }
            `}</style>

            <style jsx>{`
                .input {
                    margin-right: 15px;
                }
            `}</style>
        </div>
    )
}

RadioGroup.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    options: propTypes.arrayOf(
        propTypes.shape({
            value: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
        })
    ).isRequired,

    validate: propTypes.func,
    defaultValue: propTypes.string,
}

export { RadioGroup }
