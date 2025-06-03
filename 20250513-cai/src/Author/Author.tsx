import styles from "./Author.module.sass"
import { useState, useEffect } from "react"

interface AuthorProps {
     fullName: string;
     newItem: boolean;
}

function Author({ fullName, newItem }: AuthorProps) {
     const [btnText, setBtnText] = useState("+")
     const [width, setWidth] = useState(window.innerWidth)

     useEffect(() => {
          setBtnText(width < 768 ? "+" : "more info")
     })

     useEffect(() => {
          window.addEventListener("resize", handleResize)

          return () => {
               window.removeEventListener("resize", handleResize)
          }
     }, [])

     function handleResize() {
          setWidth(window.innerWidth)
     }


     return (
          <div className={styles.container}>
               <h2 className={styles.h2}>{fullName}</h2>
               {newItem ? <div className={styles.newItem}><p>New</p></div> : null}
               <ul className={styles.list}>
                    <li>Poems</li>
                    <li>Biography</li>
                    <li>essays</li>
                    <li>non-fiction</li>
               </ul>
               <button aria-label="click for more info" className={styles.infoBtn}>{btnText}</button>

          </div>
     )
}

export default Author
