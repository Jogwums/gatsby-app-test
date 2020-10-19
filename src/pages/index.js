import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import "../styles/global.css"

// or:
// require('./src/styles/global.css')

export default function Home() {
  return (
    <div style={{ color: `white` }}>
      <Link className="links" to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}