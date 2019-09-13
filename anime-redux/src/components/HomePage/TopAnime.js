import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getTopAnime } from "../../store/actions"

import AnimeCard from "../AnimeCard"

function TopAnime(props) {
  useEffect(() => {
    props.getTopAnime()
  }, [])

  return (
    <div className="Top-Anime">
      <h1>Top Anime</h1>
      <div className="Grid">
        {/* map through list of most recent anime */}
        {/* Props: image_url, title, rank */}
        {/* Search for recent anime in year 2019 */}
        {/* Sort by rank */}
        {props.isFetching
          ? "Loading..."
          : props.topAnime
              .slice(0, 10)
              .map((anime, index) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
              ))}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isFetching: state.homePage.isFetching,
    topAnime: state.homePage.topAnime
  }
}

export default connect(
  mapStateToProps,
  { getTopAnime }
)(TopAnime)
