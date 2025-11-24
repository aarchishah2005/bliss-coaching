import { Link } from "react-router-dom";
import AcademyCards from "../components/AcademyCards";
import FeaturesSection from "../components/FeaturesSection";
import FinanceCardsHero from "../components/FinanceCardsHero";

// import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <header className="home-header">
          <h1>Master Your Finance Journey</h1>
          <p>
            Learn smart investing, budgeting, and wealth-building strategies
            designed for the next generation
          </p>

          {/* Optional: Add stats */}
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Learners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </header>
          <AcademyCards />
          <FinanceCardsHero />
      </div>
    </div >
  );
}

export default Home;