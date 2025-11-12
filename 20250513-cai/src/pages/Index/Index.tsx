
import { useContext, useEffect } from "react"
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
          printValue();
     }, [searchTextInput])

     function printValue() {
          console.log(searchTextInput)
     };



     const cards = authorsData.map(author =>

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
     );

     return (
          <main>
               {/* <PageTitle title="Full Index" />
               <IndexCat category="A" /> */}
               {authorsData && cards}
          </main>
     )
}

export default Index
