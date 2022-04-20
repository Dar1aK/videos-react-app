import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header: FC = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add'>Add entry</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
