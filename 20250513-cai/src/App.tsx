import "./App.sass";
import { BrowserRouter, Routes, Route } from "react-router";
import authors from '../authors_db/authors.json';
import {
  useRef,
  useEffect,
  useState
} from 'react';

import Header from "./components/Header/Header";
import Index from "./pages/Index/Index";
import Footer from "./components/Footer/Footer";
import BottomNav from "./components/BottomNav/BottomNav";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import AuthorPage from "./pages/AuthorPage/AuthorPage";

import { TestContext } from "./Contexts/Contexts";

interface searchTextProp {
  searchTextInput: string

}

function App({ searchTextInput }: searchTextProp) {


  const [authorsArray, setAuthorsArray] = useState(authors);
  const [inputValue, setInputValue] = useState("");

  const cards = document.querySelectorAll("article");



  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAuthorsArray(inputValue !== "" ? filteredAuthorArray : authors);
    console.log(filteredAuthorArray);
  }, [inputValue])


  const filteredAuthorArray = authors.filter(author =>

    author.fullName.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(inputValue) || author.fullName.toLowerCase().includes(inputValue) || author.genres.some(genre =>
      genre.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(inputValue)
    ) || author.keywords.some(word =>
      word.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(inputValue)
    )
  );






  return (
    <>
      <BrowserRouter>
        {/* <SfTuto searchTextInput="" /> */}
        <form className="searchWrapper">
          <label htmlFor="searchBar">Search for Authors</label>
          <input
            ref={searchInputRef}
            onInput={(e) => setInputValue((e.target as HTMLTextAreaElement).value.toLowerCase())}
            type="text"
            name='searchBar'
            max={200}
            placeholder='search for an author'
          />
        </form>
        {/* <Header />
        <BottomNav /> */}
        <TestContext
          value={authorsArray}>
          <Routes>
            <Route path="/" element={<Index searchTextInput={inputValue} />} />
            <Route path="/author/:authorId/"
              element={<AuthorPage />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />

          </Routes>
        </TestContext>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
