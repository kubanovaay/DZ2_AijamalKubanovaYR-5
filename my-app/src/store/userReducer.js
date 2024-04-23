const initialState = {
    userDetails: {},
    loading: false,
    error: null
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_START':
            return { ...state, loading: true, error: null };
        case 'GET_USER_SUCCESS':
            return { ...state, loading: false, userDetails: action.payload };
        case 'GET_USER_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default userReducer;

