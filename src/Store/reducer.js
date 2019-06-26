const initialState = {
    employeeList: []
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "EMPLIST":
            return {
                ...state,
                employeeList: action.employeeList
            };
        default:
            return state;
    }
};
export default reducers;