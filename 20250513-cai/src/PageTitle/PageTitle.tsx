import React from 'react'
import styles from './PageTitle.module.sass'
function PageTitle({ title }) {
     return (
          <div>
               <h1 className={styles.h1}>{title}</h1>
          </div>
     )
}

export default PageTitle
