import React from 'react';
import { Play } from 'lucide-react';
import './CourseCard.css';

const CourseCard = ({ title, videoUrl, thumbnail, hasVideo, progress }) => {
  return (
    <div className="course-card">
      {/* Thumbnail Section */}
      <div className="course-card__thumbnail">
        {hasVideo && videoUrl ? (
          <div className="course-card__video-container">
            <video
              className="course-card__video"
              src={videoUrl}
              poster={thumbnail}
              preload="metadata"
            />
            {/* Play Button Overlay */}
            <div className="course-card__play-button">
              <Play className="course-card__play-icon" />
            </div>
          </div>
        ) : (
          /* Icon Display for non-video courses */
          <div className="course-card__icon-container">
            <svg className="course-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
              <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg className="course-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4" strokeWidth="1.5" />
            </svg>
            <svg className="course-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="1.5" />
            </svg>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="course-card__content">
        <h3 className="course-card__title">{title}</h3>

        {/* Progress Bar */}
        <div className="course-card__progress-container">
          <div
            className="course-card__progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Continue Button */}
        <button className="course-card__button">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CourseCard;