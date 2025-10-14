import PageTitle from '../../components/PageTitle/PageTitle';
import IndexCat from '../../components/IndexCat/IndexCat';
import Author from '../../components/Author/Author';
import authors from '../../../authors_db/authors.json';

function Index() {

     const authorsList = authors.map(author =>
          <Author
               fullName={`${author.firstName} ${author.lastName} `}
               newItem={true}
               pob={author.placeOfBirth}
               dob={author.dateOfBirth}
               genres={author.genres} />
     )
     return (
          <main>
               <PageTitle title="Full Index" />
               <IndexCat category="A" />
               {authorsList}
          </main>
     )
}

export default Index
