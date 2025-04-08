import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

const Home = ({ page }) => {
  return (
    <div className="home-page">
      <Sidebar />
      <main className="content-container">
        <Header title={`My ${page}`} />
        <ContentInfo />
        <ActionButton label="Explore now" />
      </main>
    </div>
  );
};

const Header = ({ title }) => (
  <header className="header">
    <h1 className="title">{title}</h1>
  </header>
);

const ContentInfo = () => (
  <section className="info-section">
    <p className="info-text">
      Curious about a particular topic? We're here to help you find the
      information you need in an enjoyable and informative way. Experience
      unforgettable learning, filled with new knowledge that you can apply in
      your daily life.
    </p>
  </section>
);

const ActionButton = ({ label }) => (
  <div className="action-container">
    <button className="btn">{label}</button>
  </div>
);

Home.propTypes = {
  page: PropTypes.string.isRequired,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Home;