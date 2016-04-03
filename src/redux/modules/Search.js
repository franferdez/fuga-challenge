/* @flow */

import jsonSearch from 'static/audiosearch_example_response_body.json'

// ------------------------------------
// Constants
// ------------------------------------
export const SEND_SEARCH = 'SEND_SEARCH'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

// ------------------------------------
// Actions
// ------------------------------------
export function sendSearch (): Action {
  return {
    type: SEND_SEARCH,
    payload: {searching: true}
  }
}

export function receiveSearch (response: Object = {}): Action {
  return {
    type: RECEIVE_SEARCH,
    payload: {
      searching: false,
      response: response
    }

  }
}

export const doSearch = (query: String = ''): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      dispatch(sendSearch())
      // In reality here is where you make the ajax call to the API
      // In this case i return the mocked data in async
      setTimeout(() => {
        dispatch(receiveSearch(jsonSearch))
        resolve()
      }, 500)
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  searching: false,
  query: '',
  totalResults: 0,
  page: 0,
  resultsPerPage: 0,
  results: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SEND_SEARCH:
      return Object.assign({},state,{
        searching: action.payload.searching
      });
    case RECEIVE_SEARCH:
      const response = action.payload.response;
      return Object.assign({},state,{
        searching: action.payload.searching,
        query: response.query,
        totalResults: response.total_results,
        page: response.page,
        resultsPerPage: response.results_per_page,
        results: [].concat(response.results) // force new instance
      });
    default:
      return state
  }
}
