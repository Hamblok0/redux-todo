const current = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_CURRENT":
            return action.payload
        default: 
            return state
    }
}

export default current