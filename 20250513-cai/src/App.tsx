import "./App.sass";
import { BrowserRouter, Routes, Route } from "react-router";
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
          <Route path="/authorname" element={<AuthorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
