import { GET_ACCOUNT, EDIT_ACCOUNT, POST_AVATAR } from '../constants';
import instance from '../axios-docs';


export function getAccount() {
  return {
    type: GET_ACCOUNT,
    payload: instance.get('/account/'),
  };
}

export function editAccount(oldPassword, newPassword) {
  return {
    type: EDIT_ACCOUNT,
    payload: instance.put('/account/', { oldPassword, newPassword }),
  };
}

export function postAvatar(file) {
  return {
    type: POST_AVATAR,
    payload: instance.post('/account/', { file }),
  };
}