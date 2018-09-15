import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

//passing this logger to createStore as middleware throws this error: 'TypeError: a is not a function'
// const logger = (store) => {
//   console.log(store.getState())
//   return store;
// }

//Constants are convention to prevent typos. They are ususally kept in separate files. Easier to debug a variable typo than a string typo.
const CREATE_BANNERMAN = 'CREATE_BANNERMAN';
const INIT_BANNERMEN = 'INIT_BANNERMEN';
const DELETE_BANNERMAN = 'DELETE_BANNERMAN';
const ERR_GOT_CHARACTER_NOT_FOUND = ''


const _createBannerman = () => (
  {
    type: CREATE_BANNERMAN
  }
)
const _initBannermen = bannermen => (
  {
    type: INIT_BANNERMEN,
    bannermen
  }
)
const _errGOTCharacterNotFound = () => (
  {
    type: ERR_GOT_CHARACTER_NOT_FOUND
  }
)

export const createBannerman = (name, lordId) => {
  return dispatch => {
    axios.get(`https://api.got.show/api/characters/${name}`)
      .then(response => response.data.data)
      .then(character => {
        axios.post(`/api/bannermen`, { ...character, lordId })
          .then(response => response.data)
          .then(bannerman => dispatch(_createBannerman(bannerman)))
      })
      .catch(() => dispatch(_errGOTCharacterNotFound()))
  }
}
export const initBannermen = () => {
  return dispatch => {
    axios.get('/api/bannermen')
      .then(response => response.data)
      .then(bannermen => dispatch(_initBannermen(bannermen)))
      .catch(err => {
        throw err;
      })
  }
}


const reducer = (state = {}, action) => {
  switch (action.type) {
    case INIT_BANNERMEN:
      return { ...state, bannermen: action.bannermen }
    case CREATE_BANNERMAN:
      return { ...state, bannermen: [...state.bannermen, action.bannerman] }
    case ERR_GOT_CHARACTER_NOT_FOUND:
      return { ...state, gotErr: !state.gotErr }
    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(thunk));