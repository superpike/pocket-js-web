import * as Constants from '../constants';

const initialState = {
    token: localStorage.getItem('token'),
    is_loading_user: false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.LOGIN_PENDING: {
            return {
                ...state,
                is_loading_user: true
            };
        }
        case Constants.LOGIN_FULFILLED: {
            localStorage.setItem('token', action.payload.data.token);
            return {
                ...state,
                token: action.payload.data.token,
                is_loading_user: false
            };
        }
        case Constants.LOGIN_REJECTED: {
            return {
                ...state,
                is_loading_user: false,
                error_message: action.payload.message
            };
        }
        case Constants.REGISTER_USER_PENDING: {
            return {
                ...state,
                is_loading_user: true
            };
        }
        case Constants.REGISTER_USER_FULFILLED: {
            localStorage.setItem('token', action.payload.data.token);
            return {
                ...state,
                token: action.payload.data.token,
                user: action.payload.data.user,
                is_loading_user: false
            };
        }
        case Constants.REGISTER_USER_REJECTED: {
            return {
                ...state,
                is_loading_user: false,
                error_message: action.payload.message
            };
        }
        case Constants.LOGOUT: {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null
            };
        }
        case Constants.LOGOUT_FULFILLED: {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null
            };
        }
        default:
            return state;
    }
}

