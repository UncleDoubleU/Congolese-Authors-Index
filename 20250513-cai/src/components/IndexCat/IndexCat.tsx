import styles from "./IndexCat.module.sass";
import { useState, useEffect } from "react";

// interface CatProp {
//      letter: string;
//      index: number;
// }

interface IndexCatProps {
     category: string;
     // cat: CatProp[];
}

function IndexCat({ category }: IndexCatProps) {
     const [width, setWidth] = useState(window.innerWidth);
     const [h3Style, seth3style] = useState(styles.h3font);

     useEffect(() => {
          if (category.trim().length > 1) {
               seth3style(styles.h3LongFont)
          } else {
               seth3style(styles.h3font)
          }
          window.addEventListener("resize", handleWidth)

          return () => {
               window.removeEventListener("resize", handleWidth)
          }
     }, [])

     function handleWidth() {
          setWidth(window.innerWidth)
     }

     return (
          <div aria-label="category" className={styles.container}>
               <div className={styles.h3Cont}>
                    <h3 className={h3Style}>{category}</h3>
               </div>
               <div className={styles.line}></div>
          </div>
     );
}

export default IndexCat;
