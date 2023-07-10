import React from 'react'
import Navbar, { Nav } from '../../nav/Navbar'
import Brand from '../../brand/Brand'
import MenuContent from './MenuContent'

const menuContent = [
  {
    name: 'Accueil',
    dropdownMenu: [
      { name: 'Tous les projets', to: '/' },
    ],
  },
  {
    name: 'Portfolio',
    dropdownMenu: [
      {
        name: 'Carousel',
        dropdownMenu: [
          { name: 'Plein écran', to: '/slider' },
          { name: 'Ecran scindé', to: '/slider-3' },
        ],
      },
      {
        name: 'Grille',
        dropdownMenu: [
          { name: '2 colonnes', to: '/portfolio' },
          { name: '3 colonnes', to: '/portfolio-2' },
        ],
      },
    ],
  },
  /* {
    name: 'Projets',
    dropdownMenu: [
      {
        name: 'Projets 01 - 05',
        dropdownMenu: [
          { name: 'Time Tag Watch', to: '/portfolio/time-tag-watch' },
          { name: 'Under Armour', to: '/portfolio/under-armour' },
          { name: 'Re Styling', to: '/portfolio/re-styling' },
          { name: 'Toast 2019 Reel', to: '/portfolio/toast-2019-reel' },
          { name: 'What If Gold', to: '/portfolio/what-if-gold' },
        ],
      },
      {
        name: 'Projets 05 - 09',
        dropdownMenu: [
          { name: 'Nile - Kabutha', to: '/portfolio/nile-kabutha' },
          { name: 'Sleep Walker', to: '/portfolio/sleep-walker' },
          { name: 'Novara Conic', to: '/portfolio/novara-conic' },
          { name: 'Bastian Bux', to: '/portfolio/bastian-bux' },
        ],
      },
    ],
  }, */
  { name: 'A propos', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

const DroowMenu = ({ hamburger }) => {
  let $key = 0
  const getSubMenu = (items) => {
    $key++
    if (items.dropdownMenu) {
      return (
        <Nav.Dropdown
          name={items.name}
          key={$key}
        >
          {items.dropdownMenu.map((item) => getSubMenu(item))}
        </Nav.Dropdown>
      )
    }
    return (
      <Nav.Link
        to={items.to}
        key={$key}
      >
        {items.name}
      </Nav.Link>
    )
  }

  return (
    <Navbar hamburger={hamburger}>
      <Navbar.Brand to={'/'}>
        <Brand
          width='80px'
          height='26px'
        />
      </Navbar.Brand>

      <Navbar.Collapse cover='Menu'>
        <Nav>{menuContent.map((item) => getSubMenu(item))}</Nav>
        <MenuContent className='section-margin' />
      </Navbar.Collapse>
    </Navbar>
  )
}

DroowMenu.defaultProps = {
  hamburger: false,
}

export default DroowMenu
