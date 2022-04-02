// login reducer

import { LOGIN_FAILURE, LOGIN_REQUEST,LOGIN_SUCCESS } from "./action";

const initialState = {
    isLoading: false,
    isError: false,
    data: null
}

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        return {
            ...state,
            isLoading: true,
            isError: false,
            data: action.payload
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload
        };
        case LOGIN_FAILURE:
        return {
            ...state,
            isLoading: false,
            isError: true,
            data: action.payload
        };
        default:
        return state;
    }
}