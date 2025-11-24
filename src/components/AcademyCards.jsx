import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import './AcademyCards.css';

export default function AcademyCards() {
  const courses = [
    {
      title: "Foundation",
      subtitle: "Best suited for beginners.",
      description: "Build a strong base by learning finance basics.",
      courses: 11,
      hours: "6.25 Hrs",
      icon: "🌱"
    },
    {
      title: "Intermediate",
      subtitle: "Ideal for those who know their basics.",
      description: "Dig deeper into financial concepts and expand your financial skills.",
      courses: 12,
      hours: "13 Hrs",
      icon: "🌳"
    },
    {
      title: "Advanced",
      subtitle: "Apt for honing financial skills.",
      description: "Master advanced financial concepts to sharpen your knowledge.",
      courses: 12,
      hours: "27 Hrs",
      icon: "🌲"
    }
  ];

  return (
    <div className="academy-container">
      <div className="academy-wrapper">
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">Level Up Your Financial Quotient</h1>
          <h2 className="sub-title">with IDFC FIRST Academy</h2>
          <p className="tagline">Begin your learning journey at any level</p>
        </div>

        {/* Road Path for Desktop */}
        <div className="road-container road-desktop">
          <svg className="road-svg" preserveAspectRatio="none" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="50%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            
            {/* Main road path - starts from header, goes to Foundation, then Intermediate, then Advanced */}
            <path
              d="M 500 100 L 500 200 Q 500 240, 460 240 L 180 240 L 180 320 Q 180 360, 220 360 L 500 360 L 500 440 Q 500 480, 540 480 L 820 480"
              stroke="url(#roadGradient)"
              strokeWidth="45"
              fill="none"
              strokeLinejoin="round"
            />
            
            {/* Dashed center line */}
            <path
              d="M 500 100 L 500 200 Q 500 240, 460 240 L 180 240 L 180 320 Q 180 360, 220 360 L 500 360 L 500 440 Q 500 480, 540 480 L 820 480"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="12,10"
              strokeLinecap="round"
            />
            
            {/* Road edge lines */}
            <path
              d="M 500 100 L 500 200 Q 500 240, 460 240 L 180 240 L 180 320 Q 180 360, 220 360 L 500 360 L 500 440 Q 500 480, 540 480 L 820 480"
              stroke="#9ca3af"
              strokeWidth="47"
              fill="none"
              strokeLinejoin="round"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Road Path for Mobile/Tablet */}
        <div className="road-container road-mobile">
          <svg className="road-svg" preserveAspectRatio="none" viewBox="0 0 400 1200">
            <defs>
              <linearGradient id="roadGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="50%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            
            {/* Vertical road path for mobile */}
            <path
              d="M 200 80 L 200 280 Q 200 320, 240 320 L 250 320 Q 280 320, 280 360 L 280 560 Q 280 600, 240 600 L 230 600 Q 200 600, 200 640 L 200 1000"
              stroke="url(#roadGradientMobile)"
              strokeWidth="40"
              fill="none"
              strokeLinejoin="round"
            />
            
            {/* Dashed center line */}
            <path
              d="M 200 80 L 200 280 Q 200 320, 240 320 L 250 320 Q 280 320, 280 360 L 280 560 Q 280 600, 240 600 L 230 600 Q 200 600, 200 640 L 200 1000"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Cards Container */}
        <div className="cards-section">
          {/* Road milestone markers on each card */}
          <div className="milestone milestone-foundation"></div>
          <div className="milestone milestone-intermediate"></div>
          <div className="milestone milestone-advanced"></div>
          
          <div className="cards-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                {/* Icon */}
                <div className="card-icon">
                  <span className="icon-emoji">{course.icon}</span>
                </div>

                {/* Content */}
                <div className="card-content">
                  <h3 className="card-title">{course.title}</h3>
                  <p className="card-subtitle">{course.subtitle}</p>
                  <p className="card-description">{course.description}</p>
                </div>

                {/* Stats */}
                <div className="card-stats">
                  <div className="stat-item">
                    <BookOpen className="stat-icon" />
                    <span className="stat-text">{course.courses} Courses</span>
                  </div>
                  <div className="stat-item">
                    <Clock className="stat-icon" />
                    <span className="stat-text">{course.hours}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="card-button">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}