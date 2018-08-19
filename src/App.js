import React from 'react'
import { Link } from 'react-router-dom'
import route from './settings/route'
import './App.css'

class App extends React.Component {
  render = () => (
    <div className="app">
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      {route}
    </div>
  )
}

export default App