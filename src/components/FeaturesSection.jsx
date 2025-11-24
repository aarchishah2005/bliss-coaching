import React from 'react';
import './FeaturesSection.css';

export default function FeaturesSection() {
  const features = [
    {
      title: "Easy Lessons",
      description: "Learn financial concepts through simplified content designed by industry experts",
      illustration: "👩‍💻"
    },
    {
      title: "Flexible Formats",
      description: "Unlock knowledge through engaging formats like blogs or videos to suit your learning style",
      illustration: "📱"
    },
    {
      title: "Active Learning",
      description: "Improve comprehension with interactive quizzes and activities based on real-life scenarios",
      illustration: "🧩"
    },
    {
      title: "Get Certified",
      description: "Track your progress & get IDFC FIRST Academy certificates",
      illustration: "🎓"
    },
    {
      title: "Family Learning",
      description: "Digital learning platform for families to grow financially wise together",
      illustration: "👨‍👩‍👧"
    }
  ];

  return (
    <div className="features-container">
      <div className="features-wrapper">
        {/* Header */}
        <div className="features-header">
          <h1 className="features-main-title">Explore, learn, grow</h1>
          <h2 className="features-sub-title">with IDFC FIRST Academy</h2>
          <p className="features-tagline">Access interactive learning and courses designed by experts</p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {/* Illustration */}
              <div className="feature-illustration">
                <span className="feature-emoji">{feature.illustration}</span>
              </div>

              {/* Content */}
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}