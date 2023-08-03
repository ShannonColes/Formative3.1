import { createContext, useState, useContext } from "react";

const ArticleContext = createContext();

// export const ArticleContext = createContext();

// article provider what I do with it
export const ArticleContextProvider = ({ children }) => {
  // pass null so no articles are displayed by default
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    searchTerm: "",
    country: "",
    language: "en",
    topic: "general",
  });

  return (
    <ArticleContext.Provider
      value={{
        selectedArticle,
        setSelectedArticle,
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => useContext(ArticleContext);

// I have a single ArticleContext that manages both the selected article and the filter options.
