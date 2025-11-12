import "./App.sass";
import { Routes, Route, useNavigate } from "react-router";
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


function App() {

  const [isSearching, setIsSearching] = useState(false);
  const [authorsArray, setAuthorsArray] = useState(authors);
  const [inputValue, setInputValue] = useState("");


  let navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAuthorsArray(inputValue !== "" ? filteredAuthorArray : authors);
    setIsSearching(inputValue !== "" ? true : false);
  }, [inputValue])

  function handleSearchInput(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // setInputValue((event.target as HTMLTextAreaElement)?.value.toLowerCase())
    if (searchInputRef?.current) {
      setInputValue(searchInputRef.current?.value.toLowerCase());
    }
    navigate('/');
  }
  const filteredAuthorArray = authors.filter(author =>

    author.fullName.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(inputValue) || author.fullName.toLowerCase().includes(inputValue) || author.genres.some(genre =>
      genre.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(inputValue)
    ) || author.keywords.some(word =>
      word.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(inputValue)
    ) || author.placeOfBirth.toLowerCase().includes(inputValue) || author.dateOfBirth.toString().includes(inputValue)
  );

  return (
    <>

      <Header />
      {/* <SfTuto searchTextInput="" /> */}
      <form
        className="searchWrapper"
        role="search"
        onSubmit={handleSearchInput}>
        <input
          ref={searchInputRef}
          defaultValue=""
          // onInput={(e) => setInputValue((e.target as HTMLTextAreaElement).value.toLowerCase())}
          type="search"
          role="searchbox"
          name='searchBar'
          max={200}
          placeholder='search for an author or a topic'
        />
        <p>You've searched for "{inputValue}"</p>
      </form>

      {/* <BottomNav /> */}
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

    </>
  );
}

export default App;
