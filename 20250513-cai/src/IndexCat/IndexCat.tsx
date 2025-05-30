import styles from './IndexCat.module.sass'

function IndexCat({ category }) {
     return (
          <div className={styles.container}>
               <h3 className={styles.h3}>{category}</h3>
               <div className={styles.line}></div>
          </div>
     )
}

export default IndexCat
