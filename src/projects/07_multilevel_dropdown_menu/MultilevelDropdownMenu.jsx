import { useState, useRef } from 'react'
import { useClickOutside } from './UseClickOutside'
import menu from './menu.svg'
import './style.css'

const MultilevelDropdownMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const menuRef = useRef(null)
  useClickOutside(menuRef, () => {
    setMenuIsOpen(false)
    closeAllSubMenu()
  })

  const handleClick = (event) => {
    console.log(event)
    if (event.target.nodeName !== 'SPAN') {
      return
    }
    closeAllSubMenu(event.target.nextElementSibling)
    event.target.classList.add('sub-menu-active-span')
    event.target.nextElementSibling.classList.toggle('sub-menu-active')
  }

  const closeAllSubMenu = (current = null) => {
    let parents = []
    if (current) {
      //console.dir(current)
      let currentParent = current.parentNode
      while (currentParent) {
        if (currentParent.classList.contains('root-nav')) break
        if (currentParent.nodeName === 'UL') parents.push(currentParent)
        currentParent = currentParent.parentNode
      }
    }
    const subMenu = document.querySelectorAll('.root-nav ul')
    Array.from(subMenu).forEach((item) => {
      // не только текущую
      // но и всех ее родителей
      if (item !== current && !parents.includes(item)) {
        item.classList.remove('sub-menu-active')
        if (item.previousElementSibling.nodeName === 'SPAN') {
          item.previousElementSibling.classList.remove('sub-menu-active-span')
        }
      }
    })
  }

  return (
    <>
      <div
        className="button-menu-prj7"
        onClick={() => {
          setMenuIsOpen(!menuIsOpen)
        }}
      >
        <img src={menu} alt="menu" className="menu-burger-svg" />
      </div>
      <nav
        ref={menuRef}
        className={`nav-menu ${menuIsOpen ? 'open-menu' : ''}`}
      >
        <ul className="root-nav" onClick={handleClick}>
          <li>
            <a href="#">Lvl1 Link 1</a>
          </li>
          <li>
            <span>Lvl1 Sub 2</span>
            <ul>
              <li>
                <a href="#">Lvl2 Link 1</a>
              </li>
              <li>
                <a href="#">Lvl2 Link 2</a>
              </li>
              <li>
                <span>Lvl2 Sub 3</span>
                <ul>
                  <li>
                    <a href="#">Lvl3 Link 1</a>
                  </li>
                  <li>
                    <a href="#">Lvl3 Link 2</a>
                  </li>
                  <li>
                    <a href="#">Lvl3 Link 3</a>
                  </li>
                  <li>
                    <a href="#">Lvl4 Link 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Lvl2 Link 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Lvl1 Link 3</a>
          </li>
          <li>
            <span>Lvl1 Sub 4</span>
            <ul>
              <li>
                <a href="#">Lvl2 Link 1</a>
              </li>
              <li>
                <span>Lvl2 Sub 2</span>
                <ul>
                  <li>
                    <a href="#">Lvl3 Link 1</a>
                  </li>
                  <li>
                    <a href="#">Lvl3 Link 2</a>
                  </li>
                  <li>
                    <span>Lvl3 Sub 3</span>
                    <ul>
                      <li>
                        <a href="#">Lvl4 Link 1</a>
                      </li>
                      <li>
                        <a href="#">Lvl4 Link 2</a>
                      </li>
                      <li>
                        <a href="#">Lvl4 Link 3</a>
                      </li>
                      <li>
                        <a href="#">Lvl4 Link 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Lvl3 Link 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Lvl2 Link 3</a>
              </li>
              <li>
                <a href="#">Lvl2 Link 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Lvl1 Link 5</a>
          </li>
          <li>
            <a href="#">Lvl1 Link 6</a>
          </li>
          <li>
            <span>Lvl1 Sub 7</span>
            <ul>
              <li>
                <a href="#">Lvl2 Link 1</a>
              </li>
              <li>
                <a href="#">Lvl2 Link 2</a>
              </li>
              <li>
                <span>Lvl2 Sub 3</span>
                <ul>
                  <li>
                    <a href="#">Lvl3 Link 1</a>
                  </li>
                  <li>
                    <a href="#">Lvl3 Link 2</a>
                  </li>
                  <li>
                    <a href="#">Lvl3 Link 3</a>
                  </li>
                  <li>
                    <a href="#">Lvl3 Link 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Lvl2 Link 4</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MultilevelDropdownMenu
