import Sidebar from "./Sidebar.jsx";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Home = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="container">
          <h1 className="title">My {currentPage}</h1>
          <p className="info">
            Curious about a particular topic? We're here to help you find the
            information you need in an enjoyable and informative way. Experience
            unforgettable learning, filled with new knowledge that you can apply
            in your daily life.
          </p>
          <button className="btn">Explore now</button>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Home;