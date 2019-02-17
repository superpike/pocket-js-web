import * as Constants from '../constants';

import ContactsAPI from './contactsStub'

const contacts = ContactsAPI.all();

const initialState = {
    contacts: [],
    activeContact: null,
    is_loading_contacts: false
}

export function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_CONTACTS_PENDING: {
            return { ...state, is_loading_contacts: true };
        }
        case Constants.GET_CONTACTS_FULFILLED: {
            return {
                //...state,
                //contacts, //for testing
                is_loading_contacts: false,
                contacts: action.payload.data.data, //commented for testing
            };
        }
        case Constants.GET_CONTACTS_REJECTED: {
            return {
                //...state,
                contacts, //for testing
                is_loading_contacts: false,
                error_message: action.payload.message
            };
        }


        case Constants.ADD_CONTACT_PENDING: {
            return {
                ...state,
                is_loading_contact: true
            };
        }
        case Constants.ADD_CONTACT_FULFILLED: {
            return {
                ...state,
                user: action.payload.data,
                is_loading_contact: false
            };
        }
        case Constants.ADD_CONTACT_REJECTED: {
            return {
                ...state,
                is_loading_contact: false,
                error_message: action.payload.message
            };
        }

        case Constants.ADD_TO_BLACKLIST_PENDING: {
            return {
                ...state
            };
        }
        case Constants.ADD_TO_BLACKLIST_FULFILLED: {
            return {
                ...state,
                blacklist_item: action.payload.data
            };
        }
        case Constants.ADD_TO_BLACKLIST_REJECTED: {
            return {
                ...state,
                error_message: action.payload.message
            };
        }

        case Constants.GET_BLACKLIST_PENDING: {
            return {
                ...state,
                is_loading_list: true
            };
        }
        case Constants.GET_BLACKLIST_FULFILLED: {
            return {
                ...state,
                blacklist: action.payload.data.data,
                is_loading_list: false
            };
        }
        case Constants.GET_BLACKLIST_REJECTED: {
            return {
                ...state,
                is_loading_list: false,
                error_message: action.payload.message
            };
        }

        case Constants.DEL_FROM_BLACKLIST_PENDING: {
            return {
                ...state
            };
        }
        case Constants.DEL_FROM_BLACKLIST_FULFILLED: {
            return {
                ...state
            };
        }
        case Constants.DEL_FROM_BLACKLIST_REJECTED: {
            return {
                ...state,
                error_message: action.payload.message
            };
        }
        default:
            return state;
    }
}

