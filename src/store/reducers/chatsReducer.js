import * as Constants from '../constants';

import ChatsAPI from './chatsStub';

// const chats = ChatsAPI.all();

const initialState = {
  chats: [],
  activeChat: null,
  is_loading: false,
};

export function chatsReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.LOGOUT: {
      state = {
        ...initialState,
      };
      break;
    }
    // получить список чатов------------------------------
    case Constants.GET_CHATS_PENDING: {
      state = {
        ...state,
        is_loading: true,
      };
      break;
    }
    case Constants.GET_CHATS_FULFILLED: {
      state = {
        ...state,
        chats: action.payload.data.data,
        is_loading: false,
      };
      break;
    }
    case Constants.GET_CHATS_REJECTED: {
      state = {
        chats: [],
        is_loading: false,
        error_message: action.payload.message,
      };
      break;
    }

    // создать группу------------------------------
    case Constants.CREATE_GROUP_PENDING: {
      state = {
        ...state,
        is_loading: true,
      };
      break;
    }
    case Constants.CREATE_GROUP_FULFILLED: {
      state = {
        ...state,
        is_loading: false,
        chats: [...state.chats,action.payload.data],
        activeChat: action.payload.data,
      };
      break;
    }
    case Constants.CREATE_GROUP_REJECTED: {
      state = {
        ...state,
        is_loading: false,
        error_message: action.payload.message,
        activeChat: null,
      };
      break;
    }

    // профиль группы------------------------------
    case Constants.GET_GROUP_PROFILE_PENDING: {
      state = {
        ...state,
        is_loading: true,
      };
      break;
    }
    case Constants.GET_GROUP_PROFILE_FULFILLED: {
      state = {
        ...state,
        is_loading: false,
        group: action.payload.data,
      };
      break;
    }
    case Constants.GET_GROUP_PROFILE_REJECTED: {
      state = {
        ...state,
        is_loading: false,
        error_message: action.payload.message,
      };
      break;
    }

    // поиск группы------------------------------
    case Constants.SEARCH_GROUP_PENDING: {
      state = {
        ...state,
        is_loading: true,
      };
      break;
    }
    case Constants.SEARCH_GROUP_FULFILLED: {
      state = {
        ...state,
        is_loading: false,
        groups: action.payload.data,
      };
      break;
    }
    case Constants.SEARCH_GROUP_REJECTED: {
      state = {
        ...state,
        is_loading: false,
        error_message: action.payload.message,
      };
      break;
    }

    // получить инвайт------------------------------
    case Constants.GET_INVITE_CODE_PENDING: {
      state = {
        ...state,
        is_loading: true,
      };
      break;
    }
    case Constants.GET_INVITE_CODE_FULFILLED: {
      const code = action.payload.data.invitation_code;
      const request = action.payload.request.responseURL;
      const id = request.match(/(?<=groups\/)(.*)(?=\/invites)/g);
      state = {
        ...state,
        is_loading: false,
        invite_data: action.payload.data,
        invitation_link: `http://web.pocketmsg.ru/code=${code}/group=${id}`,
      };
      break;
    }
    case Constants.GET_INVITE_CODE_REJECTED: {
      state = {
        ...state,
        is_loading: false,
        error_message: action.payload.message,
      };
      break;
    }

    default: { state = { ...state }; }
  }

  return state;
}
