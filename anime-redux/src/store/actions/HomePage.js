export const GET_TOP_ANIME_START = "GET_TOP_ANIME_START"
export const GET_TOP_ANIME_SUCCESS = "GET_TOP_ANIME_SUCCESS"
export const GET_TOP_ANIME_FAILURE = "GET_TOP_ANIME_FAILURE"

export const getTopAnime = () => dispatch => {
    dispatch({ type: GET_TOP_ANIME_START })
    fetch("https://api.jikan.moe/v3/top/anime")
        .then(res => {
            return res.json()
        })
        .then(parsedRes => {
            dispatch({ type: GET_TOP_ANIME_SUCCESS, payload: parsedRes.top })
        })
        .catch(err => {
            dispatch({ type: GET_TOP_ANIME_FAILURE })
            console.log(err);
        })}