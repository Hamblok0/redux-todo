const authenticated = (state = "UNAUTHENTICATED", action) => {
    switch(action.type) {
        case "USER_AUTHENTICATED":
            return "AUTHENTICATED"
        default: 
            return state;
    }

}

export default authenticated