import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ArticleContextProvider } from "./context/ArticleContext";

// import pages
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";

// import components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <HashRouter>
        <ArticleContextProvider>
          <Header />
          <Routes>
            {/* Set up each Route */}
            <Route exact path="/" element={<Homepage />} />
            <Route path="/article" element={<SingleArticle />} />
            <Route path="/Aboutpage" element={<Aboutpage />} />
          </Routes>
          <Footer />
        </ArticleContextProvider>
      </HashRouter>
    </>
  );
}

export default App;
