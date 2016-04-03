/* @flow */

import _ from 'lodash';

// ------------------------------------
// Constants
// ------------------------------------
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST'
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST'
export const ADD_PODCAST_TO_PLAYLIST = 'ADD_PODCAST_TO_PLAYLIST'
export const REMOVE_PODCAST_TO_PLAYLIST = 'REMOVE_PODCAST_TO_PLAYLIST'

// ------------------------------------
// Actions
// ------------------------------------
export function createPlayList (title: String = 'New Playlist'): Action {
  return {
    type: CREATE_PLAYLIST,
    payload: {title: title}
  }
}

export function deletePlayList (id: Integer): Action {
  return {
    type: REMOVE_PLAYLIST,
    payload: {id: id}
  }
}


export function addPodcastToPlayList (id: Integer, idPodcast: Integer): Action {
  return {
    type: ADD_PODCAST_TO_PLAYLIST,
    payload: {
      id: id,
      idPodcast: idPodcast
    }
  }
}

export function removePodcastToPlayList (id: Integer, idPodcast: Integer): Action {
  return {
    type: REMOVE_PODCAST_TO_PLAYLIST,
    payload: {
      id: id,
      idPodcast: idPodcast
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  playLists: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_PLAYLIST:
      const newPlaylist = {
        id: state.playLists.length + 1,
        title: action.payload.title,
        podcasts: []
      }
      state.playLists.push(newPlaylist);
      return Object.assign({},state,{
        playLists: [].concat(state.playLists)
      });

    case REMOVE_PLAYLIST:
      const playLists = _.pullAllBy(state.playLists, action.payload.id, 'id'); // remove playlist
      return Object.assign({},state,{
        playLists: [].concat(playLists)
      });

    case ADD_PODCAST_TO_PLAYLIST:
      const playList = _.find(state.playLists,(elem)=>{elem.id === action.payload.id});
      playlist.podcasts.push(action.payload.idPodcast);

      return state;

    case REMOVE_PODCAST_TO_PLAYLIST:
      return state;

    default:
      return state
  }
}
