import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { getTopAnime } from '../../store/actions'

import AnimeCard from "../AnimeCard"

function TopAnime(props) {
    
    useEffect(() => {
        setTopAnime(props.getTopAnime())
    }, [])
    
    return ( 
        <div className="Recent-Anime">
            <div className="Grid">
                {/* map through list of most recent anime */}
                {/* Props: image_url, title, rank */}
                {/* Search for recent anime in year 2019 */}
                {/* Sort by rank */}
                {props.topAnime.slice(0,10).map((anime, index) => 
                    <AnimeCard key={index} anime={anime}/>
                )}                
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        topAnime: state.homePage.topAnime
    }
}

export default connect(mapStatetoProps, {getTopAnime})(TopAnime);