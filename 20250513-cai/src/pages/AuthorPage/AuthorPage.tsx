import Books from "../../components/Books/Books"

function AuthorPage() {


     return (
          <main>
               <h1></h1>
               <section>
                    <h2>Biography</h2><br />
                    <p></p>
               </section>
               <section>
                    <h2>Bibliography</h2><br />
                    <Books title={"Les Marais brûlés"} yop={1973} isbn="N/A" pages={40} languages="French" publisher="Centre africain de littérature" genres="Tales" />
                    <Books title="Les Marais brûlés" yop={1973} isbn="N/A" pages={40} languages="French" publisher="Centre africain de littérature" genres="Tales" />
                    <Books title="Les Marais brûlés" yop={1973} isbn="N/A" pages={40} languages="French" publisher="Centre africain de littérature" genres="Tales" />

               </section >
               <section>
                    <h2>Genres</h2><br />
               </section>
               <section>
                    <h2>Languages</h2><br />
               </section>
          </main >
     )
}

export default AuthorPage
