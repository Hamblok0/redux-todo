export const loadState = () => {
    try {
        const serialized = localStorage.getItem('state')
        if (serialized == null) {
            return {
                todos: [],
                current: ""
              };
            }
        return JSON.parse(serialized)
    } catch (err) {
        console.log(err);
        return {
            todos: [],
            current: ""
          };
    }
};

export const saveState = (state) => {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('state', serialized);
    } catch (err){
        console.log(err);
    }
};