import "./App.sass";
import { BrowserRouter, Routes, Route } from "react-router";
import { createContext } from "react";

import Header from "./components/Header/Header";
import Index from "./pages/Index/Index";
import Footer from "./components/Footer/Footer";
import BottomNav from "./components/BottomNav/BottomNav";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import AuthorPage from "./pages/AuthorPage/AuthorPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <BottomNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/authorname"
            element={<AuthorPage
              id={"hello_1"}
              fullName="John Doe"
              biography="Amba Bongo was born in Kinshasa, where she studied at the Institut Supérieur Pédagogique de la Gombe. She also studied psychology at the University of Warocqué in Mons, Belgium. Since 1994, she has worked with asylum seekers. She was living in London at the time of writing (2000)."
              works={
                [
                  {
                    title: "hello",
                    availableLanguages: ["big boy info"],
                    ISBN: "ISBN-SHKLD-1SFK3-AB46",
                    numOfPages: 139
                  },
                  {
                    name: "world",
                    availableLanguages: ["big", "girl", "data"],
                    other: "ISBN-KAHDO-556LD-09DK",
                    numOfPages: 40
                  },
                ]
              }
            />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
