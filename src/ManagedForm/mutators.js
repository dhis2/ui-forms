export const clear = ([name], state, { changeValue }) => {
    changeValue(state, name, () => undefined)
}
