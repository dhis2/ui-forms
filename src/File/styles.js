import css from 'styled-jsx/css'

export const styles = css`
    .container {
        margin-bottom: 15px;
        padding: 15px 10px 15px 0;
    }

    .input {
        display: none;
    }

    .svg {
        height: 24px;
        width: 24px;
        display: block;
        margin-right: 10px;
    }

    .button {
        display: flex;
        align-items: center;
        padding: 0 15px 0 0;
        border: 0;
        background: none;
        outline: 0;
        cursor: pointer;
        border: 2px solid transparent;
    }

    .button:focus {
        border-color: #147cd7;
        border-radius: 4px;
    }

    .label {
        display: block;
        line-height: 1.5;
    }

    .error {
        margin-left: 20px;
    }
`
