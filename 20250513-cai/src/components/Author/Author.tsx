import styles from "./Author.module.sass"
import { useState, useEffect } from "react"

// setting the prop types using the interface object allowing them to be undefined for now
interface AuthorProps {
     id: string;
     fullName?: string;
     newItem?: boolean;
     pob?: string;
     dob?: number;
     genres: string[];
}

function Author({ id, fullName, newItem, pob, dob, genres }: AuthorProps) {
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

     // if there is a genre add a list item otherwise do nothing
     const authorGenres = genres.map(genre =>
          <li key={id + "_" + genre}>{genre}</li>
     );

     const xtraInfo = width >= 768 ? <><p className={styles.pobText}> {pob}</p>
          <p className={styles.dobText}>{dob}</p></> : null;

     // function handleClick() {
     //      console.log("Click");
     // }


     return (
          <div
               className={styles.container}
          // onClick={handleClick}
          >
               <h2 className={styles.h2}>{fullName}</h2>
               {newItem && <div className={styles.newItem}><p>New</p></div>}
               {genres?.length > 0 && <ul className={styles.list}>
                    {authorGenres}
               </ul>}
               {xtraInfo}

               <button aria-label="click for more info" className={styles.infoBtn}>+</button>

          </div >
     )
}

export default Author
