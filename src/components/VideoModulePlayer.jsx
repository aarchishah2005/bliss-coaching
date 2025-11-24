import React, { useState } from 'react';
import './VideoModulePlayer.css';

export default function VideoModulePlayer() {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const moduleData = {
    title: "Module 1. Introduction to Stock Market (video series)",
    videos: [
      { id: 1, title: "Why should you invest?", duration: "00:08:25", videoId: "p7HKvqRI_Bo" },
      { id: 2, title: "Market Intermediaries", duration: "00:08:58", videoId: "L19tzpmV7y4" },
      { id: 3, title: "All about the Initial Public Offer (IPO)", duration: "00:08:07", videoId: "dQw4w9WgXcQ" },
      { id: 4, title: "Why do stock prices fluctuate?", duration: "00:03:51", videoId: "dQw4w9WgXcQ" },
      { id: 5, title: "How does a trading platform work?", duration: "00:07:07", videoId: "dQw4w9WgXcQ" },
      { id: 6, title: "Stock Market Index", duration: "00:05:32", videoId: "dQw4w9WgXcQ" },
      { id: 7, title: "Understanding Trading Basics", duration: "00:06:15", videoId: "dQw4w9WgXcQ" },
      { id: 8, title: "Risk Management Strategies", duration: "00:09:20", videoId: "dQw4w9WgXcQ" }
    ]
  };

  const handleVideoSelect = (index) => {
    setSelectedVideo(index);
  };

  // const handleBackClick = (e) => {
  //   // Add your navigation logic here
  //   e.preventDefault();
  //   window.scrollTo(0, 0); // Scroll to top immediately
  //   navigate('/modules');
  //   console.log('Navigate back to modules');
  // };

   const handleBackClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0); // Scroll to top immediately
    navigate('/modules');
  };

  return (
    <div className="video-module">
      <div className="video-module__container">
        {/* Header */}
        <div className="video-module__header">
          <div>
            <h1 className="video-module__title">{moduleData.title}</h1>
          </div>
          <button onClick={handleBackClick} className="video-module__back-link">
            ← Back to all video modules
          </button>
        </div>

        {/* Content Grid */}
        <div className="video-module__content">
          {/* Video List Sidebar */}
          <div className="video-module__sidebar">
            <div className="video-list">
              {moduleData.videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`video-list__item ${selectedVideo === index ? 'video-list__item--active' : ''}`}
                  onClick={() => handleVideoSelect(index)}
                >
                  <div className="video-list__number">{video.id}.</div>
                  <div className="video-list__details">
                    <h3 className="video-list__title">{video.title}</h3>
                    <span className="video-list__duration">{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="video-module__player">
            <div className="video-player">
              <iframe
                className="video-player__iframe"
                src={`https://www.youtube.com/embed/${moduleData.videos[selectedVideo].videoId}`}
                title={moduleData.videos[selectedVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}