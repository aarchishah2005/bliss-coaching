import React from 'react';
import './CourseModules.css';

const CourseModules = () => {
  const modules = [
    {
      id: 1,
      title: 'Introduction to Stock Markets',
      chapters: '15 chapters',
      description: 'The stock market can play a pivotal role in ensuring your financial security. In this module, you will learn how to get started in the stock market, its fundamentals, how it functions, and the various intermediaries that appertain it.',
      // color: '#4ade80'
    },
    {
      id: 2,
      title: 'Technical Analysis',
      chapters: '22 chapters',
      description: 'Technical Analysis (TA) helps in developing a point of view. In this module, we will discover the complex attributes, various patterns, indicators, and theories of TA that will help you as a trader to find upright trading opportunities in the market.',
      // color: '#60a5fa'
    },
    {
      id: 3,
      title: 'Fundamental Analysis',
      chapters: '16 chapters',
      description: 'The Fundamental Analysis (FA) module explores Equity research by reading financial statements and annual reports, calculating and analyzing Financial Ratios, and evaluating the intrinsic value of a stock to find long-term investing opportunities.',
      // color: '#fbbf24'
    },
    {
      id: 4,
      title: 'Futures Trading',
      chapters: '13 chapters',
      description: 'Futures Trading is a segment of the derivatives market where traders can buy and sell standardized contracts for future delivery of assets.',
      // color: '#fb7185'
    },
    {
      id: 5,
      title: 'Options Theory for Professional Trading',
      chapters: '25 chapters',
      description: 'Options trading provides flexibility and opportunities for sophisticated trading strategies in various market conditions.',
      // color: '#fb923c'
    },
    {
      id: 6,
      title: 'Option Strategies',
      chapters: '14 chapters',
      description: 'A trader can use options strategies to monetize their view on market direction, volatility, and time decay.',
      // color: '#a78bfa'
    }
  ];

  return (
    <div className="course-modules-container">
      {modules.map((module) => (
        <div key={module.id} className="module-card">
          <div className="module-header">
            <div className="module-number" style={{ color: module.color }}>
              {module.id}
            </div>
            <div className="module-line" style={{ backgroundColor: module.color }}></div>
          </div>
          <h2 className="module-title">{module.title}</h2>
          <p className="module-chapters">{module.chapters}</p>
          <p className="module-description">{module.description}</p>
          <div className="module-links">
            <a href="#" className="link">Explore Module</a>
            <a href="#" className="link">Videos</a>
            {/* <a href="#" className="link hindi">हिंदी</a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseModules;