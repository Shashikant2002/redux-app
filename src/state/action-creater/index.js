export const deposit = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        });
    }
}
export const widro = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'widro',
            payload: amount
        });
    }
}