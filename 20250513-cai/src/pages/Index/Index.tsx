import { createContext } from "react";

import PageTitle from '../../components/PageTitle/PageTitle';
import IndexCat from '../../components/IndexCat/IndexCat';
import authors from '../../../authors_db/authors.json';


// setting the interfaces to silence the typescript error.
// interfaces allow to define object properties and their types
// doing this allows to certain "type" errors during compilations therefore minimizing runtime issues.
// runtime errors are errors that occur while your program is running, these 

interface Bibliography {
     title: string;
     publishing: string;
     yearOfPublication: number;
     numberOfPages: number;
     ISBN: string;
     genre: string;
}

interface Author {
     id: number;
     firstName: string;
     lastName: string;
     placeOfBirth: string;
     dateOfBirth: number;
     dateOfDeath: number;
     knownFor: string;
     biography: string;
     bibliography: Bibliography;
     writingLanguage: string;
     portrait: string;
     sources: string;
     genres: string[];
     sex: string;
}
// generics are a one of the main ways to create reusable components.
// passing the Author object as a generic allows to access the proporties of the context's value
// this ensures that only objects with the Author properties types can be passed in as value
const TestContext = createContext<Author[]>([]);
function Index() {
     return (
          <main>
               <TestContext
                    value={authors}>
                    <PageTitle title="Full Index" />
                    <IndexCat category="A" />
               </TestContext>

          </main>
     )
}

export default Index
