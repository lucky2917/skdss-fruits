import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="logo">SKDSS Fruits</div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#shop">Shop</a>
            <a href="#about">About Us</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <div className="header-actions">
            <a href="#login" className="login-link">Log In</a>
            <div className="cart-icon">🛒 <span className="cart-count">0</span></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-logo">
          <svg viewBox="0 0 100 60" className="fish-icon">
            <path 
              d="M15,30 C15,20 25,15 35,20 C40,15 50,15 55,20 C65,15 75,20 75,30 C75,40 65,45 55,40 C50,45 40,45 35,40 C25,45 15,40 15,30 Z" 
              fill="none" 
              stroke="#2d5016" 
              strokeWidth="2"
            />
            <circle cx="25" cy="28" r="1.5" fill="#2d5016"/>
            <path d="M15,30 L8,25 L8,35 Z" fill="#2d5016"/>
          </svg>
        </div>

        <div className="fixed-text-container">
          <span className="fixed-text">SKDSS Fruits</span>
        </div>

        <div className="hero-content">
          <h2>Explore our menu filled with<br />culinary wonders</h2>
          <button className="explore-btn">Explore Menu</button>
        </div>

        <div className="product-display">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80" 
            alt="Fruits on shelf"
            className="product-image"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
