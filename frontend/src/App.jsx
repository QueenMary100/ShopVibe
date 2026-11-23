
import { useState } from 'react';
import './App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// React Router
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top px-3 py-2">
        <div className="container">

          <Link to="/" className="navbar-brand fw-bold text-primary fs-3">
            ShopVibe
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">

            <div className="navbar-nav ms-auto gap-lg-2">

              <Link
                to="/"
                className={`nav-link fw-medium px-3 ${
                  location.pathname === '/' ? 'active text-primary fw-bold' : ''
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`nav-link fw-medium px-3 ${
                  location.pathname === '/about' ? 'active text-primary fw-bold' : ''
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`nav-link fw-medium px-3 ${
                  location.pathname === '/contact' ? 'active text-primary fw-bold' : ''
                }`}
              >
                Contact
              </Link>

              <Link
                to="/services"
                className={`nav-link fw-medium px-3 ${
                  location.pathname === '/services' ? 'active text-primary fw-bold' : ''
                }`}
              >
                Services
              </Link>

            </div>
          </div>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="flex-grow-1">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>

      </main>

      {/* Modern Footer */}
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">

        <div className="container">

          <div className="row g-4">

            {/* Brand */}
            <div className="col-lg-4 col-md-6">

              <h3 className="fw-bold text-primary mb-3">
                ShopVibe
              </h3>

              <p className="text-secondary">
                Your trusted destination for quality products,
                great prices, and an amazing shopping experience.
              </p>

              <div className="d-flex gap-3">

                <a href="https://facebook.com"
                  className="text-light text-decoration-none">
                  Facebook
                </a>

                <a href="https://instagram.com"
                  className="text-light text-decoration-none">
                  Instagram
                </a>

                <a href="https://x.com"
                  className="text-light text-decoration-none">
                  X
                </a>

              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">

              <h5 className="fw-bold mb-3">Quick Links</h5>

              <ul className="list-unstyled">

                <li className="mb-2">
                  <Link to="/" className="text-secondary text-decoration-none">
                    Home
                  </Link>
                </li>

                <li className="mb-2">
                  <Link to="/about" className="text-secondary text-decoration-none">
                    About Us
                  </Link>
                </li>

                <li className="mb-2">
                  <Link to="/services" className="text-secondary text-decoration-none">
                    Services
                  </Link>
                </li>

                <li className="mb-2">
                  <Link to="/contact" className="text-secondary text-decoration-none">
                    Contact
                  </Link>
                </li>

              </ul>
            </div>

            {/* Customer Support */}
            <div className="col-lg-3 col-md-6">

              <h5 className="fw-bold mb-3">Customer Support</h5>

              <ul className="list-unstyled text-secondary">

                <li className="mb-2">Help Center</li>
                <li className="mb-2">Shipping Information</li>
                <li className="mb-2">Returns & Refunds</li>
                <li className="mb-2">Privacy Policy</li>

              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-lg-3 col-md-6">

              <h5 className="fw-bold mb-3">Get in Touch</h5>

              <p className="text-secondary mb-2">
                <i className="bi bi-envelope me-2"></i>
                support@shopvibe.com
              </p>

              <p className="text-secondary mb-2">
                <i className="bi bi-telephone me-2"></i>
                +254 700 000 000
              </p>

              <p className="text-secondary">
                <i className="bi bi-geo-alt me-2"></i>
                Nairobi, Kenya
              </p>

            </div>

          </div>

          <hr className="border-secondary my-4" />

          {/* Copyright */}
          <div className="text-center">

            <p className="text-secondary mb-1">
              &copy; {new Date().getFullYear()} ShopVibe.
              All Rights Reserved.
            </p>

            <small className="text-secondary">
              Designed with care for a better shopping experience.
            </small>

          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
