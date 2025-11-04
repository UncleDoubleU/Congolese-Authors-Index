
import { useContext } from "react"
import { TestContext } from "../../Contexts/Contexts";

import PageTitle from '../../components/PageTitle/PageTitle';
import IndexCat from '../../components/IndexCat/IndexCat';
import AuthorCard from '../../components/AuthorCard/AuthorCard';

function Index() {
     const authorsData = useContext(TestContext);

     const cards = authorsData.map(author =>

          <AuthorCard
               link={`/author/${author.id}/`}
               id={`author_${author.id}_${author.lastName}`}
               fullName={`${author.firstName} ${author.lastName}`}
               newItem={true}
               pob={author.placeOfBirth}
               dob={author.dateOfBirth}
               genres={author.genres}
          />
     );

     return (
          <main>
               {/* <PageTitle title="Full Index" />
               <IndexCat category="A" /> */}
               {cards}
          </main>
     )
}

export default Index
