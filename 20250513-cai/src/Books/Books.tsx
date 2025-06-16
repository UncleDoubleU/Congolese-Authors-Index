import styles from './Books.module.sass'

interface BookProps {
     title: string;
     publisher: string;
     isbn: string;
     languages: string;
     yop: number;
     pages: number;
     genres: string;
}

function Books({ title, isbn, publisher, yop, pages, languages, genres }: BookProps) {
     return (
          <article className={styles.cont}>
               <h3 className={styles.h3}>{title}</h3>
               <dl className={styles.dl}>
                    <dt>Year of publication: </dt>
                    <dd>{yop}</dd>
               </dl>
               <dl className={styles.dl}>
                    <dt>publisher: </dt>
                    <dd>{publisher}</dd>
               </dl>
               <dl className={styles.dl}>
                    <dt>ISBN: </dt>
                    <dd>{isbn}</dd>
               </dl>
               <dl className={styles.dl}>
                    <dt>number of pages: </dt>
                    <dd>{pages}</dd>
               </dl>
               <dl className={styles.dl}>
                    <dt>Available languages: </dt>
                    <dd>{languages}</dd>
               </dl>
               <dl className={styles.dl}>
                    <dt>genres: </dt>
                    <dd>{genres}</dd>
               </dl>
          </article>
     )
}

export default Books
