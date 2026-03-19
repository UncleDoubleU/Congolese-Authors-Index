import { useParams } from "react-router";
import { useContext } from "react";
import Books from "../../components/Books/Books";
import { TestContext } from "../../Contexts/Contexts";
import IndexCat from "../../components/IndexCat/IndexCat";
import styles from "./AuthorPage.module.sass"

function AuthorPage() {

     let params = useParams();
     params.authorId;
     const routeParam = Number(params.authorId);

     const authorsData = useContext(TestContext);
     const author = authorsData.find((writer) => writer.id === routeParam);

     if (!author) {
          return <div>Loading...</div>
     }

     const bibliographyData = author.bibliography;
     const bibliographyEl = bibliographyData.map(book =>
          <li className={styles.bookItem} key={`${book.title}_${book.genre}`} >
               <Books

                    title={book.title}
                    yop={book.yearOfPublication}
                    isbn={book.isbn}
                    languages="N/A"
                    publisher={book.publishing}
                    pages={book.numberOfPages}
                    genres={book.genre}
               />
          </li>
     );

     const genresData = author.genres;
     const authorGenres = genresData.map(genre =>
          <li className={styles.genreItem} key={`${author.fullName}_${author.id}_${genre}`}>
               {genre}
          </li>
     );
     const languagesData = author.writingLanguages;
     const authorLanguages = languagesData.map(language =>
          <li className={styles.languageItem} key={`${author.fullName}_${author.id}_${language}`} >
               {language}
          </li>
     )
     return (
          <main>
               <h1 className={styles.h1}>{author && `${author.fullName}`}</h1>
               <section className={styles.section}>

                    <IndexCat category="Biography" />
                    <article className={styles.article}>
                         <p className={styles.bio}>{author && `${author.biography}`}</p>
                    </article>
               </section>
               <section className={styles.section}>
                    <IndexCat category="Bibliography" />
                    <article className={styles.article}>
                         <ul className={styles.booksList}>
                              {author ? bibliographyEl : <li>no books</li>}
                         </ul>
                    </article>
               </section >
               <section className={styles.section}>

                    <IndexCat category="Genres" />
                    <article className={styles.article}>
                         <ul className={styles.genreList}>
                              {authorGenres}
                         </ul>
                    </article>
               </section>
               <section className={styles.section}>
                    <IndexCat category="Languages" />
                    <article className={styles.article}>
                         <ul className={styles.languageList}>
                              {authorLanguages}
                         </ul>
                    </article>
               </section>
          </main >
     )
}

export default AuthorPage
