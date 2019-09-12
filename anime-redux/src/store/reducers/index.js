import { combineReducers } from 'redux'

const initialStateForHomePage = {
    recentAnime: [],
    upcomingAnime: [],
    animeByGenre: []
}

const initialStateForSearchPage = {
    term: '',
    results: []
}

function homePageReducer(state = initialStateForHomePage, action) {
    switch(action.type) {
        default: 
            return state
    }
}

function searchPageReducer(state = initialStateForSearchPage, action) {
    switch(action.type) {
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    homePage: homePageReducer,
    searchPage: searchPageReducer
})

export default rootReducer