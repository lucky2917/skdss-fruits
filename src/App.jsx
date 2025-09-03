import React, { useState } from 'react';
import './App.css';
import AboutImage from './assets/hero.jpg';
import berries from './assets/berries.jpeg';
import citrus from './assets/citrus.jpeg';
import seasonal from './assets/seasonal.jpeg';
import tropical from './assets/tropical.jpeg';
import specials from './assets/specials.jpg';
import contact from './assets/contact.jpg';
import main from './assets/main.png';
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Fixed Header */}
      <header className="header">
        <div className="header-container">
          <button 
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="logo">SKDSS Fruits</div>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </nav>

          <div className="header-actions">
            <a href="#login" className="login-link">Log In</a>
            <div className="cart-icon">🛒<span className="cart-count">0</span></div>
          </div>
        </div>
      </header>

      {/* Sidebar overlay */}
      {menuOpen && <div className="sidebar-overlay" onClick={() => setMenuOpen(false)} />}

      {/* Sidebar menu */}
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="sidebar-header">
          <h2>SKDSS Fruits</h2>
          <button className="sidebar-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>×</button>
        </div>
        <nav className="sidebar-nav">
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </nav>
        <div className="sidebar-cta">
          <button className="sidebar-explore-btn">Explore Menu</button>
        </div>
      </aside>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="fixed-hero-bg" aria-hidden="true" />

          <div className="hero-logo">
            <svg viewBox="0 0 100 60" className="fish-icon" aria-hidden="true" focusable="false">
              <path 
                d="M15,30 C15,20 25,15 35,20 C40,15 50,15 55,20 C65,15 75,20 75,30 C75,40 65,45 55,40 C50,45 40,45 35,40 C25,45 15,40 15,30 Z" 
                fill="none" 
                stroke="#2d5016" 
                strokeWidth="2"
              />
              <circle cx="25" cy="28" r="1.5" fill="#2d5016" />
              <path d="M15,30 L8,25 L8,35 Z" fill="#2d5016" />
            </svg>
          </div>

          <div className="fixed-text-container">
            <span className="fixed-text">SKDSS Fruits</span>
          </div>

          <div className="hero-content">
          <h2>Fresh Fruits, Juices & Baskets<br />Delivered to Your Doorstep</h2>
            <button className="explore-btn">Explore Menu</button>
          </div>

          <div className="product-display">
            <img 
              src={main} 
              alt="Fruits on shelf" 
              className="product-image" 
              loading="lazy" 
            />
          </div>

          <div className="scroll-spacer" />
        </section>

        {/* About Section */}
        <section className="about-section inverted-grid">
  <div className="about-text">
    <h2>Our Story</h2>
    <p>
    We began in 2020, right in the middle of the Covid days, with nothing more than a small mango stall by the roadside. People loved our fruits, and their support pushed us forward. By 2021, we opened a modest shop with just a handful of fruits. In 2023, we expanded our collection and introduced juices and fruit baskets. And today, in 2025, SKDSS Fruits stands as a trusted place for fresh, high-quality fruits delivered daily to your home.
    </p>
  </div>
  <div className="about-image-wrapper">
    <img
      src={AboutImage}
      alt="Fresh fruits shop display"
      className="about-image"
    />
  </div>
</section>
<section className="collections-section">
  <h2 className="collections-heading">Our Collections</h2>
  <div className="collections-grid">
      <div className="collection-card">
        <img src={seasonal} alt="Seasonal" />
        <h3>Seasonal</h3>
        <p>Fresh fruits available during the current season, packed with vibrant flavors.</p>
      </div>
      <div className="collection-card">
        <img src={citrus} alt="Citrus" />
        <h3>Citrus</h3>
        <p>Zesty and refreshing citrus fruits, perfect for a vitamin C boost.</p>
      </div>
      <div className="collection-card">
        <img src={tropical} alt="Tropical" />
        <h3>Tropical</h3>
        <p>Exotic tropical fruits to add a delicious twist to your day.</p>
      </div>
      <div className="collection-card">
        <img src={berries} alt="Berries" />
        <h3>Berries</h3>
        <p>Small, juicy berries full of antioxidants and sweet goodness.</p>
      </div>
    </div>
  </section>
    <section className="special-offer-section">
      <div className="offer-text-col">
        <h2>Special Offer</h2>
        <p className="offer-subtitle">Limited Time Deal</p>
        <p>Get 10% off on your first order!</p>
        <p className="offer-code">Exclusively on site ONLY!</p>
        <button className="offer-btn">Shop Now</button>
      </div>
      <div className="offer-image-col">
        <img src={specials} alt="Special Offer" />
      </div>
    </section>
    <section className="contact-section">
  <div className="contact-left">
    <div className="contact-image-bg">
      <img src={contact} alt="Contact background" />
      <div className="contact-overlay-card">
        <h2>Get in Touch</h2>
        <p>
          Have a question or want to learn more about our menu? Drop us a message, and we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  </div>
  <div className="contact-right">
    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We’ll get back soon."); }}>
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" required/>
        </div>
        <div className="contact-field">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="contact-field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="message">Short answer</label>
        <input type="text" id="message" name="message" />
      </div>
      <button type="submit" className="contact-submit">Submit</button>
    </form>
  </div>
</section>

<div className="marquee-section">
  <div className="marquee-track">
    <span>FRESH&nbsp;&nbsp;</span>
    <span>SEASONAL&nbsp;&nbsp;</span>
    <span>TROPICAL&nbsp;&nbsp;</span>
    <span>CITRUS&nbsp;&nbsp;</span>
    <span>BERRIES&nbsp;&nbsp;</span>
    <span>FRESH&nbsp;&nbsp;</span>
    <span>SEASONAL&nbsp;&nbsp;</span>
    <span>TROPICAL&nbsp;&nbsp;</span>
    <span>CITRUS&nbsp;&nbsp;</span>
    <span>BERRIES&nbsp;&nbsp;</span>
    <span>FRESH&nbsp;&nbsp;</span>
    <span>SEASONAL&nbsp;&nbsp;</span>
    <span>TROPICAL&nbsp;&nbsp;</span>
    <span>CITRUS&nbsp;&nbsp;</span>
    <span>BERRIES&nbsp;&nbsp;</span>
    <span>FRESH&nbsp;&nbsp;</span>
    <span>SEASONAL&nbsp;&nbsp;</span>
    <span>TROPICAL&nbsp;&nbsp;</span>
    <span>CITRUS&nbsp;&nbsp;</span>
    <span>BERRIES&nbsp;&nbsp;</span>
    {/* Add more spans if you want even smoother scroll */}
  </div>
</div>
</main>
<footer className="footer-section">
  <div className="footer-bg-image"></div>
  <div className="footer-overlay"></div>

  <div className="footer-content">
    <div className="footer-grid">
      {/* Brand column only on left */}
      <div className="footer-brand">
        <div className="footer-logo">
          <span>SKDSS Fruits</span>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>

      {/* Contact info card */}
      <div className="footer-card footer-contact">
        <div>☎️ 9347043329 | 9010900688</div>
        <div><span className="footer-email">arjun.gandreddi2005@gmail.com</span></div>
        <div>Railway Market Rd, Shop 20,21<br />Allipuram, Vizag <br />Andhra Pradesh<br />India 530004</div>
      </div>
      
      {/* Links card */}
      <div className="footer-card footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Accessibility Statement</a>
        <a href="#">Shipping Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Refund Policy</a>
      </div>
    </div>
  </div>
  
  <div className="footer-bottom">
  © {new Date().getFullYear()} SKDSS Fruits - All rights reserved
</div>

</footer>
    </div>
  );
}
