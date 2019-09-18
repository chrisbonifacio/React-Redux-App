import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getUpcomingAnime } from "../../store/actions"

import AnimeCard from "../AnimeCard"

function UpcomingAnime(props) {
  useEffect(() => {
    props.getUpcomingAnime()
  }, [])

  return (
    <div className="Upcoming-Anime">
      <h1>Upcoming Anime</h1>
      <div className="Grid">
        {props.isFetching
          ? "is Loading..."
          : props.upcomingAnime.slice(0, 10).map(anime => {
              return <AnimeCard key={anime.mal_id} anime={anime} />
            })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.homePage.isFetching,
    upcomingAnime: state.homePage.upcomingAnime
  }
}

export default connect(
  mapStateToProps,
  { getUpcomingAnime }
)(UpcomingAnime)
