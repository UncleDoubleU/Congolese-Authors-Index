import { useContext, useEffect, useMemo } from "react"
import { TestContext } from "../../Contexts/Contexts";

import PageTitle from '../../components/PageTitle/PageTitle';
import IndexCat from '../../components/IndexCat/IndexCat';
import AuthorCard from '../../components/AuthorCard/AuthorCard';

interface searchTextProp {
     searchTextInput: string
}

function Index({ searchTextInput }: searchTextProp) {
     const authorsData = useContext(TestContext);

     useEffect(() => {
          console.log(searchTextInput);
     }, [searchTextInput]);

     const groupedAuthors = useMemo(() => {
          const groups: Record<string, typeof authorsData> = {};

          authorsData.forEach(author => {

               const famNameLetter = author.lastName[0].toUpperCase();

               if (!groups[famNameLetter]) groups[famNameLetter] = [];

               groups[famNameLetter].push(author);
               console.log(groups)
          });

          for (const famNameLetter in groups) {
               groups[famNameLetter].sort((a, b) =>
                    a.lastName.localeCompare(b.lastName)
               );
          }

          return groups;
     }, [authorsData]);

     // alphabet array for ordered rendering
     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

     return (
          <main>
               <PageTitle
                    title={!searchTextInput ? "Full Index" : `results for ${searchTextInput}`}
               />


               {alphabet.map(famNameLetter => (

                    <section key={famNameLetter}>
                         {groupedAuthors[famNameLetter] && (
                              <>
                                   <IndexCat category={famNameLetter} />

                                   {groupedAuthors[famNameLetter].map(author => (
                                        <AuthorCard
                                             key={`author_key_${author.id}_${author.lastName}`}
                                             link={`/author/${author.id}/`}
                                             id={`author_${author.id}_${author.lastName}`}
                                             fullName={author.fullName}
                                             newItem={true}
                                             pob={author.placeOfBirth}
                                             dob={author.dateOfBirth}
                                             genres={author.genres}
                                        />
                                   ))}
                              </>
                         )}
                    </section>
               ))}
          </main>
     );
}

export default Index
