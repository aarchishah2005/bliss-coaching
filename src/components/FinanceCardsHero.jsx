import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinanceCardsHero.css';

export default function FinanceCardsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleViewAllCourses = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0); // Scroll to top immediately
    navigate('/modules');
  };

  const cards = [
    { title: "Money Basics", icon: "₹" },
    { title: "Payments", icon: "⟲" },
    { title: "Banking", icon: "🏛" },
    { title: "Savings", icon: "💰" },
    { title: "Investment", icon: "📈" }
  ];

  return (
    <section className="finance-hero" ref={containerRef}>
      <div className="finance-hero__container">
        <div className="finance-hero__content">
          <h1 className="finance-hero__title">
            Money matters
            <span className="finance-hero__title--bold">now easily mastered</span>
          </h1>
          <p className="finance-hero__subtitle">
            Complex financial concepts made simple through bite-sized lessons
          </p>
        </div>

        <div className="finance-hero__cards">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`finance-card ${isVisible ? 'finance-card--visible' : ''}`}
              style={{ '--card-index': index }}
            >
              <div className="finance-card__inner">
                <div className="finance-card__icon-wrapper">
                  <span className="finance-card__icon">{card.icon}</span>
                </div>
                <h3 className="finance-card__title">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button 
          type="button"
          className="finance-hero__btn" 
          onClick={handleViewAllCourses}
        >
          View All Modules
        </button>
      </div>
    </section>
  );
}