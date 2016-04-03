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
    case CREATE_PLAYLIST: {
      const playList = state.playLists;
      const playListLen = playList.length;
      const newId = (playListLen > 0) ? playList[playListLen - 1].id + 1 : 1;
      const newPlaylist = {
        id: newId,
        title: action.payload.title,
        podcasts: []
      }
      state.playLists.push(newPlaylist);
      return Object.assign({}, state, {
        playLists: [].concat(state.playLists)
      });
    }break;

    case REMOVE_PLAYLIST: {
      _.remove(state.playLists, (elem)=> {
        return elem.id === action.payload.id
      }); // remove playlist
      return Object.assign({}, state, {
        playLists: [].concat(state.playLists)
      });
    }break;

    case ADD_PODCAST_TO_PLAYLIST: {
      let playList = _.find(state.playLists, (elem)=> {
        return elem.id === action.payload.id
      });
      playList.podcasts.push(action.payload.idPodcast);
      return state;
    }break;

    case REMOVE_PODCAST_TO_PLAYLIST:{
      return state;
    }break;

    default:
      return state
  }
}
