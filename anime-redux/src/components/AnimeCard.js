import React from 'react'

export default function AnimeCard({anime}) {
    return (
        <div className="Anime-Card">
            <img src={anime.image_url}/>
            <h2>{anime.title}</h2>
            {anime.rank && <p>Rank: {anime.rank}</p>}
        </div>
    )
}