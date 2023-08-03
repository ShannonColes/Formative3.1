import React, { useState } from "react";
import { useArticleContext } from "../Context/ArticleContext";
import { Globe } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const { selectedFilters, setSelectedFilters } = useArticleContext();
  // Separate state to keep track of the search term
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (filter, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filter]: value,
    }));
  };

  const { country, language, topic } = selectedFilters;

  const handleSearch = () => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      searchTerm: searchTerm,
    }));
  };

  return (
    <>
      <div id="navbar">
        {/* title-search is the container for the header and search bar */}
        <div id="title-search">
          <h1>
            <Link to="/">
              <Globe className="globe" /> World News
            </Link>
          </h1>

          {/* Search bar */}
          {/* input-icon div is used to keep the icon and the input together and space them */}
          <div id="input-icon">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              <Search />
            </button>
          </div>
        </div>

        <div id="drop-down-list">
          <ul>
            {/* select your country -------------------- */}
            <li>
              <select
                name="country"
                id="country"
                value={country}
                onChange={(e) => handleFilterChange("country", e.target.value)}
              >
                <option value="">World</option>
                <option value="us">USA</option>
                <option value="in">India</option>
                <option value="gb">UK</option>
                <option value="ca">Canada</option>
              </select>
            </li>

            {/* Select your language ------------------- */}
            <li>
              <select
                name="language"
                id="language"
                value={language}
                onChange={(e) => handleFilterChange("language", e.target.value)}
              >
                <option value="">Language</option>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </li>

            {/* topic select ---------------------------------*/}
            <li>
              <select
                name="topic"
                id="topic"
                value={topic}
                onChange={(e) => handleFilterChange("topic", e.target.value)}
              >
                <option value="">Category</option>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </li>

            {/* Aboutpage link */}
            <li>
              <Link to="/Aboutpage">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
