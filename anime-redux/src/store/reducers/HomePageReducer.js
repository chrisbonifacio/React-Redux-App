import {
  GET_TOP_ANIME_START,
  GET_TOP_ANIME_SUCCESS,
  GET_TOP_ANIME_FAILURE,
  GET_UPCOMING_ANIME_START,
  GET_UPCOMING_ANIME_SUCCESS,
  GET_UPCOMING_ANIME_FAILURE
} from "../actions"

export const initialStateForHomePage = {
  fetching: false,
  topAnime: [],
  upcomingAnime: [],
  animeByGenre: []
}

export function homePageReducer(state = initialStateForHomePage, action) {
  switch (action.type) {
    case GET_TOP_ANIME_START:
      return {
        ...state,
        fetching: true
      }

    case GET_TOP_ANIME_SUCCESS:
      return {
        ...state,
        fetching: false,
        topAnime: state.topAnime.concat(action.payload)
      }

    case GET_TOP_ANIME_FAILURE:
      return {
        ...state,
        fetching: false
      }
    case GET_UPCOMING_ANIME_START:
      return { ...state, fetching: true }
    case GET_UPCOMING_ANIME_SUCCESS:
      return {
        ...state,
        fetching: false,
        upcomingAnime: [...state, action.payload]
      }
    case GET_UPCOMING_ANIME_FAILURE:
      return { ...state, fetching: false }
    default:
      return state
  }
}
