import styles from "./IndexCat.module.sass";

// interface CatProp {
//      letter: string;
//      index: number;
// }

interface IndexCatProps {
     category: string;
     // cat: CatProp[];
}

function IndexCat({ category }: IndexCatProps) {
     // if (cat) {
     //      const catList = cat.map((item) => <h3 key={item.index} className={styles.h3}>{item.letter}</h3>);
     // }
     return (
          <div className={styles.container}>
               <h3 className={styles.h3}>{category}</h3>

               {/* {cat ? cat.map((item) => (<h3 key={item.index} className={styles.h3}>{item.letter}</h3>)) : null} */}

               <div className={styles.line}></div>
          </div>
     );
}

export default IndexCat;
