export const getUserDetails = (userId) => {
    return async (dispatch) => {
        dispatch({ type: 'GET_USER_START' });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            dispatch({ type: 'GET_USER_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'GET_USER_ERROR', payload: error.toString() });
        }
    };
};
