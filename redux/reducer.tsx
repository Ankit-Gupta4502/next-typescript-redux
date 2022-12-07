
interface actionsFace {
    payload: any,
    type: string
}


const initialState = {
    todos: []
}


const reducer = (state = initialState, action: actionsFace) => {
    switch (action?.type) {
        case "GET_TODOS":
            return { ...state }
            break;

        default:
            return { ...state }
    }
}

export default reducer;