import { GET_CONTACTS, ADD_CONTACT, ADD_TO_BLACKLIST, GET_BLACKLIST, DEL_FROM_BLACKLIST } from '../constants';
import instance from '../axios-docs';

//import ContactsAPI from '../reducers/contactsStub'

export function getContacts() {
    return {
        type: GET_CONTACTS,
        payload: instance.get('/account/contacts')
    };
}

export function addContact(id) {
    console.log('adding contact: ' + id);
    return {
        type: ADD_CONTACT,
        payload: instance.post('/account/contacts', { user: id })
    };
}

export function addToBlackList(id) {
    return {
        type: ADD_TO_BLACKLIST,
        payload: instance.post('/account/blacklist', { user: id })
    };
}

export function getBlackList() {
    return {
        type: GET_BLACKLIST,
        payload: instance.get('/account/blacklist')
    };
}

export function delFromBlackList(id) {
    return {
        type: DEL_FROM_BLACKLIST,
        payload: instance.delete(`/account/blacklist/${id}`)
    };
}
