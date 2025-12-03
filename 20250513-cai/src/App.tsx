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
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import AuthorPage from "./pages/AuthorPage/AuthorPage";

import { TestContext } from "./Contexts/Contexts";


function App() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [authorsArray, setAuthorsArray] = useState(authors);
  const [inputValue, setInputValue] = useState("");


  let navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAuthorsArray(inputValue !== "" ? filteredAuthorArray : authors);
    console.log(isSubmitted);

  }, [inputValue])

  function handleSearchInput(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // setInputValue((event.target as HTMLTextAreaElement)?.value.toLowerCase())
    if (searchInputRef?.current) {
      setInputValue(searchInputRef.current?.value.toLowerCase());
    }

    navigate('/');
    setIsSubmitted(true);
  }
  const filteredAuthorArray = authors.filter(author => {
    const normaliseText = (text: string) =>
      text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

    const hasMatchingName = normaliseText(author.fullName).includes(inputValue) || author.fullName.toLowerCase().includes(inputValue);
    const hasMatchingGenre = author.genres.some(genre =>
      normaliseText(genre).includes(inputValue)
    );
    const hasMatchingKeyword = author.keywords.some(word =>
      normaliseText(word).includes(inputValue)
    );
    const hasMatchingPlace = author.placeOfBirth.toLowerCase().includes(inputValue);
    const hasMatchingDOB = author.dateOfBirth.toString().includes(inputValue);



    return hasMatchingName || hasMatchingGenre || hasMatchingKeyword || hasMatchingPlace || hasMatchingDOB;
  });

  return (
    <>

      <Header />

      <form
        className="searchWrapper"
        role="search"
        onSubmit={handleSearchInput}>
        <input
          ref={searchInputRef}
          defaultValue=""

          type="search"
          role="searchbox"
          name='searchBar'
          max={200}
          placeholder=' press enter search for an author or a topic'
        />
      </form>

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
