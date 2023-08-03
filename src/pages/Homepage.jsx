import { useState, useEffect } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useArticleContext } from "../Context/ArticleContext";

// API KEY
const apiKey = import.meta.env.VITE_YOUR_API_KEY;

const Homepage = () => {
  // set up my article context
  const { selectedFilters, setSelectedArticle } = useArticleContext();
  const { searchTerm, country, language, topic } = selectedFilters;

  // New state to hold the selected country
  const [selectedCountry, setSelectedCountry] = useState("World");

  // set a state for news ( all of my articles)
  const [news, setNews] = useState([]);
  // set a state for loading
  const [loading, setLoading] = useState(true);
  // define useNavigate
  const navigate = useNavigate();

  // set up the useEffect - API call inside of it
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=${topic}&q=${searchTerm}&apiKey=${apiKey}`
        );
        const articles = response.data.articles.map((article) => {
          return {
            ...article,
            onSelect: () => setSelectedArticle(article),
          };
        });
        // Update the selected country state
        setSelectedCountry(getCountryName(country));
        setNews(articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [country, language, topic, searchTerm, apiKey]);

  const getCountryName = (value) => {
    switch (value) {
      case "gb":
        return "Europe";
      case "us":
        return "America";
      case "in":
        return "India";
      case "ca":
        return "Canada";

      default:
        return "World";
    }
  };

  // new article results on screen
  return (
    <>
      <div id="solid-element">
        <h3>{selectedCountry}</h3>
      </div>
      <div className="centering-article-container">
        <div className="article-grid-container">
          {/* loops through and if the array length is nothing a p tag will display no news */}
          {loading ? (
            <Puff color="#30DEA0" height={100} width={100} />
          ) : news.length === 0 ? (
            <p>No News is Good News</p>
          ) : (
            // if the array is not empty then the info will be rendered on screen
            news.map((item, index) => (
              <div
                className={`article-item ${index < 2 ? "big" : "small"}`}
                key={item.url}
                onClick={() => {
                  item.onSelect();
                  navigate("/article/");
                }}
              >
                <h2>{item.title}</h2>
                <img src={item.urlToImage} alt={item.title} />
                <p className="author">{item.author}</p>
                <p className="source">{item.source.name}</p>
                <p>{item.publishedAt}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
