import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getUpcomingAnime } from "../../store/actions"

import AnimeCard from "../AnimeCard"

function UpcomingAnime(props) {
  useEffect(() => {
    getUpcomingAnime()
  }, [])

  return (
    <div className="UpcomingAnime">
      <h1>Upcoming Anime</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(
  null,
  { getUpcomingAnime }
)(UpcomingAnime)
