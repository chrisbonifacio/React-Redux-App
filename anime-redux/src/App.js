import React from "react"
import { Route } from "react-router-dom"
import "./App.scss"
import TopAnime from "./components/HomePage/TopAnime"
import UpcomingAnime from "./components/HomePage/UpcomingAnime"
import NavBar from "./components/NavBar"
import Search from "./components/SearchPage/Search"

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <TopAnime />
                <UpcomingAnime />
              </>
            )
          }}
        />
        <Route
          path="/search"
          render={() => {
            return (
              <>
                <Search />
              </>
            )
          }}
        />
      </div>
    </div>
  )
}
