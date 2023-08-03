import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useArticleContext } from "../context/ArticleContext";

const SingleArticle = () => {
  // bring in the selected article
  const { selectedArticle } = useArticleContext();

  useEffect(() => {}, [selectedArticle]);

  // create a variable for the useNavigate
  const navigate = useNavigate();

  return (
    <>
      <div id="solid-element">
        <h3 onClick={() => navigate("/")}>Return</h3>
      </div>
      <div className="single-article-container">
        <div className="article-render">
          <h2>{selectedArticle.title}</h2>

          <img src={selectedArticle.urlToImage} alt={selectedArticle.title} />

          <p className="source">{selectedArticle.source.name}</p>
          <h5>{selectedArticle.content}</h5>
          <p className="italic">{selectedArticle.description}</p>
          <p className="author">{selectedArticle.author}</p>
          <p>{selectedArticle.publishedAt}</p>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
