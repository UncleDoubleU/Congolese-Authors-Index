import "./App.sass";
import Header from "./Header/Header";
// import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import About from "./pages/About/About";
// import AuthorPage from "./pages/AuthorPage";

function App() {
  return (
    <>
      <Header />
      <BottomNav />
      <About />
      {/* <AuthorPage /> */}
      {/* <Body /> */}
      <Footer />
    </>
  );
}

export default App;
