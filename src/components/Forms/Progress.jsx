import React from 'react';
import styles from '../../styles/Forms/Progress.module.css'

function Progress(props) {
    const { perc, color } = props
  return (
    <>
    <div className={styles.progress}>
        <div className={styles.progress_bar} style={{width: perc, background: color}}></div>
    </div>
    </>
  )
}

export default Progress