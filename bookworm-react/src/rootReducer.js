import {combineReducers} from 'redux';

import user from './reducers/users.js'
import books from './reducers/books'

export default combineReducers({
  user,
  books
})
