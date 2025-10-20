
import { useContext } from "react"
import { TestContext } from "../../Contexts/Contexts";

import PageTitle from '../../components/PageTitle/PageTitle';
import IndexCat from '../../components/IndexCat/IndexCat';
import AuthorCard from '../../components/AuthorCard/AuthorCard';


// const authorsList = authors.map(author =>
//      <AuthorCard
//           id={`${author.firstName}_${author.id}_${author.lastName}`}
//           fullName={`${author.firstName} ${author.lastName}`}
//           newItem={true}
//           pob={author.placeOfBirth}
//           dob={author.dateOfBirth}
//           genres={author.genres}
//      />);
function Index() {
     const authorsData = useContext(TestContext);
     alphabeticalSorting(authorsData);
     const cards = authorsData.map(author =>

          <AuthorCard
               id={`${author.firstName}_${author.id}_${author.lastName}`}
               fullName={`${author.firstName} ${author.lastName}`}
               newItem={true}
               pob={author.placeOfBirth}
               dob={author.dateOfBirth}
               genres={author.genres}
          />
     );
     // sorting array alphabetically
     function alphabeticalSorting(theArray: object[]) {
          theArray.sort();
          console.log(theArray)
     }

     return (
          <main>

               <PageTitle title="Full Index" />
               <IndexCat category="A" />
               {cards}
          </main>
     )
}

export default Index
