import { Link } from "react-router-dom";
import CourseModules from "../components/CourseModules";
import Header from "../components/Header";
import './Home.css';

function Modules() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <header className="home-header">
          <h1>Modules</h1>
        </header>

        <section className="course-modules-section">
          <CourseModules />
        </section>
      </div>
    </div>
  );
}

export default Modules;