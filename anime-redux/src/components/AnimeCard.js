import React from "react"

export default function AnimeCard({ anime }) {
  return (
    <div className="Anime-Card">
      {anime.rank && <p>{anime.rank}</p>}
      <img src={anime.image_url} />
      <h2>{anime.title}</h2>
    </div>
  )
}
