import { useParams } from "react-router";
import { useContext } from "react";
import Books from "../../components/Books/Books";
import { TestContext } from "../../Contexts/Contexts";

function AuthorPage() {

     let params = useParams();
     params.authorId;
     const routeParam = Number(params.authorId);

     const authorsData = useContext(TestContext);
     let author = authorsData[routeParam];

     const bibliographyData = author.bibliography;
     const bibliography = bibliographyData.map(book =>
          <li>
               <Books
                    title={book.title}
                    yop={book.yearOfPublication}
                    isbn={book.ISBN}
                    languages="N/A"
                    publisher={book.publishing}
                    pages={book.numberOfPages}
                    genres={book.genre}
               />
          </li>
     );

     const genresData = author.genres;
     const authorGenres = genresData.map(genre =>
          <li>
               {genre}
          </li>
     );
     const languagesData = author.writingLanguages;
     const authorLanguages = languagesData.map(language =>
          <li>
               {language}
          </li>
     )
     return (
          <main>
               <h1>{author.firstName} {author.lastName}</h1>
               <section>
                    <h2>Biography</h2><br />
                    <p>{author.biography}</p>
               </section>
               <section>
                    <h2>Bibliography</h2><br />
                    <ul>
                         {bibliography}
                    </ul>
               </section >
               <section>
                    <h2>Genres</h2><br />
                    <ul>
                         {authorGenres}
                    </ul>
               </section>
               <section>
                    <h2>Languages</h2><br />
                    <ul>
                         {authorLanguages}
                    </ul>
               </section>
          </main >
     )
}

export default AuthorPage
