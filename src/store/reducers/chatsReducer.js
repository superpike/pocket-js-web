import * as ConstantChats from '../constants';

import ChatsAPI from './chatsStub'

const chats = ChatsAPI.all();

const initialState = {
    chats: [],
    activeChat: null,
    is_loading: false
}

export function chatsReducer(state = initialState, action) {
    switch (action.type) {
        //получить список чатов------------------------------
        case ConstantChats.GET_CHATS_PENDING: {
            return {
                ...state,
                is_loading: true
            };
        }
        case ConstantChats.GET_CHATS_FULFILLED: {
            return {
                ...state,
                chats: action.payload.data,
                is_loading: false
            };
        }
        case ConstantChats.GET_CHATS_REJECTED: {
            return {
                chats,
                is_loading: false,
                error_message: action.payload.message
            };
        }

        //создать группу------------------------------
        case ConstantChats.CREATE_GROUP_PENDING: {
            return {
                ...state,
                is_loading: true
            };
        }
        case ConstantChats.CREATE_GROUP_FULFILLED: {
            return {
                ...state,
                is_loading: false,
                group: action.payload.data
            };
        }
        case ConstantChats.CREATE_GROUP_REJECTED: {
            return {
                ...state,
                is_loading: false,
                error_message: action.payload.message
            };
        }

        //профиль группы------------------------------
        case ConstantChats.GET_GROUP_PROFILE_PENDING: {
            return {
                ...state,
                is_loading: true
            };
        }
        case ConstantChats.GET_GROUP_PROFILE_FULFILLED: {
            return {
                ...state,
                is_loading: false,
                group: action.payload.data
            };
        }
        case ConstantChats.GET_GROUP_PROFILE_REJECTED: {
            return {
                ...state,
                is_loading: false,
                error_message: action.payload.message
            };
        }

        //поиск группы------------------------------
        case ConstantChats.SEARCH_GROUP_PENDING: {
            return {
                ...state,
                is_loading: true
            };
        }
        case ConstantChats.SEARCH_GROUP_FULFILLED: {
            return {
                ...state,
                is_loading: false,
                groups: action.payload.data
            };
        }
        case ConstantChats.SEARCH_GROUP_REJECTED: {
            return {
                ...state,
                is_loading: false,
                error_message: action.payload.message
            };
        }

        //получить инвайт------------------------------
        case ConstantChats.GET_INVITE_CODE_PENDING: {
            return {
                ...state,
                is_loading: true
            };
        }
        case ConstantChats.GET_INVITE_CODE_FULFILLED: {
            const code = action.payload.data.invitation_code;
            const request = action.payload.request.responseURL;
            const id = request.match( /(?<=groups\/)(.*)(?=\/invites)/g );
            return {
                ...state,
                is_loading: false,
                invite_data: action.payload.data,
                invitation_link: `http://web.pocketmsg.ru/code=${code}/group=${id}`
            };
        }
        case ConstantChats.GET_INVITE_CODE_REJECTED: {
            return {
                ...state,
                is_loading: false,
                error_message: action.payload.message
            };
        }

        default:
            return state;
    }
}
