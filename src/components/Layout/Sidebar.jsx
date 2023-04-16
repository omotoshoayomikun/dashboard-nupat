import React from 'react'
import styles from '../../styles/Sidebar.module.css';
import {Button} from '../Forms/button';
import { sideList } from '../../../routes'


function Sidebar() {

  const btnblackStyle = {
    background: '#703EFE',
  }

  return (
    <>
      <div className={styles.side_container}>
        <div className={styles.nvmb}>
          <Button text='Welcome Keerthi' icon='/icons/light.svg' />
        </div>
        <div className={styles.mxc}>
          <div className={styles.ch}>
            <ul>
              {
                sideList.map((side, i) => (
                  <li key={i}>
                    <a href={side.link}><img src={side.icon} alt="" /><span>{side.text}</span></a>
                  </li>
                )).slice(0, 6)
              }
            </ul>
          </div>
          <div className={styles.line}></div>
          <div className={styles.ch}>
            <ul>
              {
                sideList.map((side, i) => (
                  <li key={i}>
                    <a href={side.link} className={styles.ref}><img src={side.icon} alt="" /><span>{side.text}</span></a>
                  </li>
                )).slice(6, 8)
              }
            </ul>
          </div>
        </div>

        <div className={styles.side_foot}>
          <Button text='NEW PROJECT' icon='/icons/plus.svg' cusStyle={btnblackStyle} />
        </div>
      </div>
    </>
  )
}

export default Sidebar