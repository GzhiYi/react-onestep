import React from 'react'
import { Link } from 'react-router-dom'
import route from './settings/route'

class App extends React.Component {
  render = () => (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      {route}
    </div>
  )
}

export default App