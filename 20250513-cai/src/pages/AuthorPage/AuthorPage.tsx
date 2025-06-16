import Books from "../Books/Books"

function AuthorPage() {
     return (
          <main>
               <h1>Firstname LastName</h1>
               <section>
                    <h2>Biography</h2><br />
                    <p>The biography of the writer will come here. The first paragraph will always be visible and short enough to make sure that users can skip it if they are interested in other sections.<br />

                         The additional paragraphs will dwelve into their notable work when possible and introduce its context or the way it was received by audience, critics etc...<br />

                         Wassis Hortense Léonie Abo  was born in in 1945 The DRC was then still colonised by the Belgium.
                         She is born in the rural town of Lukamba, In the Gungu territory of  the province of Kwilu.<br />

                         She is known for her role in the Simba rebellion and her feminism.<br />

                         Her memoir, sheds light </p >
               </section>
               <section>
                    <h2>Bibliography</h2><br />
                    <Books title="Les Marais brûlés" yop={1973} isbn="N/A" pages={40} languages="French" publisher="Centre africain de littérature" genres="Tales" />
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
