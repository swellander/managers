import { createStore } from 'redux';

const initialState = {
  bannermen: []
}

//Constants are convention to prevent typos. They are ususally kept in separate files. Easier to debug a variable typo than a string typo.
const CREATE_BANNERMAN = 'CREATE_BANNERMAN';

export const createBannerman = () => (
  {
    type: CREATE_BANNERMAN
  }
)

export const initBannermen = (bannermen) => (
  {
    type: INIT_BANNERMEN,
    bannermen
  }
)

const reducer = (state = initialState, action) => {
  return state;
}

export default store = createStore(reducer);