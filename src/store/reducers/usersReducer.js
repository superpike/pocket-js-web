import * as Constants from '../constants';

// import ContactsAPI from './contactsStub'

// let users = ContactsAPI.getUsers();

const initialState = {
    users: [],
    is_loading_users: false
}

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_USERS_PENDING: {
            return { ...state, is_loading_users: true };
        }
        case Constants.GET_USERS_FULFILLED: {
            const request = action.payload.request.responseURL;
            const email = request.match( /(?<=email=)(.*)/g );
            return {
                ...state,
                is_loading_users: false,
                users: action.payload.data,
                userEmail: email
            };
        }
        case Constants.GET_USERS_REJECTED: {
            return {
                ...state,
                //users, //for testing
                is_loading_users: false,
                error_message: action.payload.message };
        }
        default:
            return state;
    }
}
