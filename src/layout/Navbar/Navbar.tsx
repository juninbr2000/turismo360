import React from 'react'

const navItems = [
    {name: 'home', page: '/'},
    {name: 'destinations', page: '/'},
    {name: 'services', page: '/'},
    {name: 'reviews', page: '/'},
    {name: 'contact us', page: '/'}
]

function Navbar() {
  return (
    <nav>
        <a><span>Uni</span>Tour</a>

        <ul>
            {navItems.map((item) => (
                <li><a href={item.page}>{item.name}</a></li>
            ))}
        </ul>

        
    </nav>
  )
}

export default Navbar