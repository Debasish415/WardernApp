import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

  return (
    <div>
        <nav>
            {/* <a href="/"><li>About</li></a> */}
            <Link to="/"><li>Home</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </nav>
    </div>
  )
}

export default Navbar