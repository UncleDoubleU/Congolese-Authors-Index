import styles from "./Author.module.sass"
import { useState, useEffect } from "react"

interface AuthorProps {
     fullName: string;
     newItem: boolean;
     pob: string;
     dob: number;
}

function Author({ fullName, newItem, pob, dob }: AuthorProps) {
     const [width, setWidth] = useState(window.innerWidth)

     useEffect(() => {
          window.addEventListener("resize", handleResize)

          return () => {
               window.removeEventListener("resize", handleResize)
          }
     }, [])

     function handleResize() {
          setWidth(window.innerWidth)
     }

     const xtraInfo = width >= 768 ? <><p className={styles.pobText}> {pob}</p>
          <p className={styles.dobText}>{dob}</p></> : null


     return (
          <div className={styles.container}>
               <h2 className={styles.h2}>{fullName}</h2>
               {newItem && <div className={styles.newItem}><p>New</p></div>}
               <ul className={styles.list}>
                    <li>Poems</li>
                    <li>Biography</li>
                    <li>essays</li>
                    <li>non-fiction</li>
               </ul>
               {xtraInfo}

               <button aria-label="click for more info" className={styles.infoBtn}>+</button>

          </div >
     )
}

export default Author
