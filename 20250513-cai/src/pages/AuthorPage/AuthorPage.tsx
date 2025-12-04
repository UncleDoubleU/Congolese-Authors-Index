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
          <li key={`${book.title}_${book.genre}`} >
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
          <li key={`${author.fullName}_${author.id}_${genre}`}>
               {genre}
          </li>
     );
     const languagesData = author.writingLanguages;
     const authorLanguages = languagesData.map(language =>
          <li key={`${author.fullName}_${author.id}_${language}`} >
               {language}
          </li>
     )
     return (
          <main>
               <h1 className={styles.h1}>{author && `${author.fullName}`}</h1>
               <section>
                    {/* <h2>Biography</h2><br /> */}
                    <IndexCat category="Biography" />
                    <p className={styles.bio}>{author && `${author.biography}`}</p>
               </section>
               <section>
                    {/* <h2>Bibliography</h2><br /> */}
                    <IndexCat category="Bibliography" />
                    <ul>
                         {author ? bibliographyEl : <li>no books</li>}
                    </ul>
               </section >
               <section>
                    {/* <h2>Genres</h2><br /> */}
                    <IndexCat category="Genres" />
                    <ul>
                         {authorGenres}
                    </ul>
               </section>
               <section>
                    {/* <h2>Languages</h2><br /> */}
                    <IndexCat category="Languages" />
                    <ul>
                         {authorLanguages}
                    </ul>
               </section>
          </main >
     )
}

export default AuthorPage
