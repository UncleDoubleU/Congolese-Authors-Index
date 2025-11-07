// decided to use createContext instead of basic props to make it easier to use the data across multiple elements.
import { createContext } from "react";


// setting the interfaces to silence the typescript error.
// interfaces allow to define object properties and their types
// doing this allows to prevent type related errors during compilations therefore minimizing runtime issues.
// runtime errors are errors that occur while your program is running, these are harder to fix
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
  fullName: string;
  placeOfBirth: string;
  dateOfBirth: number;
  dateOfDeath: number;
  knownFor: string;
  biography: string;
  // I can pass the object type here if I want to use less code
  bibliography: Bibliography[];
  writingLanguages: string[];
  portrait: string;
  sources: string;
  genres: string[];
  sex: string;
}

// generics are a one of the main ways to create reusable components that work with multiple types.
// passing Author as a generic allows typescript to access the proporties of the context's value
// this ensures that only objects with the Author properties types can be passed in as value
export const TestContext = createContext<Author[]>([]);