import styles from "./IndexCat.module.sass";
import { useState, useEffect } from "react";


interface IndexCatProps {
     category: string;

}

function IndexCat({ category }: IndexCatProps) {

     const [h3Style, seth3style] = useState(styles.h3font);

     useEffect(() => {
          if (category.trim().length > 1) {
               seth3style(styles.h3LongFont)
          } else {
               seth3style(styles.h3font)
          }
     }, [])

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
