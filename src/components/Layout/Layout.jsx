import React from 'react'
import Sidebar from './Sidebar'
import styles from '../../styles/Layout.module.css'

function Layout({children}) {
  return (
    <div className={styles.container}>
        <div className={styles.side}>
        <Sidebar />
        </div>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}

export default Layout