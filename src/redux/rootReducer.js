import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import Search from './modules/Search'
import PlayLists from './modules/PlayLists'

export default combineReducers({
  Search,
  PlayLists,
  router
})
