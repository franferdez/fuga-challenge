import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import Search from './modules/Search'
import PlayLists from './modules/PlayLists'

export default combineReducers({
  counter,
  Search,
  PlayLists,
  router
})
