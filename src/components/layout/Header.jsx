import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import {
  FaBars,
  FaTimes,
  FaUserPlus,
  FaSignInAlt,
  FaChevronDown,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Navigation simplifiée — 6 liens élégants
  const navLinks = [
    { to: "/", label: "Accueil", end: true },
    { to: "/a-propos", label: "À propos" },
    { to: "/activites", label: "Activités" },
    { to: "/opportunites", label: "Opportunités" },
    { to: "/projets", label: "Projets" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Espace réservé pour compenser le header flottant */}
      <div className="header-spacer"></div>

      <div className="header-wrapper">
        <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
          <div className="header-container">
            {/* ==================== LOGO ==================== */}
            <Link to="/" className="header-logo">
              <div className="header-logo-mark">
                <span>R</span>
                <span className="header-logo-dot"></span>
              </div>
              <div className="header-logo-text">
                <span className="header-logo-name">RESASS</span>
                <span className="header-logo-tag">
                  <MdVerified className="header-logo-verified" />
                  Réseau Alumni Simplon
                </span>
              </div>
            </Link>

            {/* ==================== NAVIGATION ==================== */}
            <nav className="header-nav">
              <ul className="header-nav-list">
                {navLinks.map((link) => (
                  <li key={link.to} className="header-nav-item">
                    <NavLink
                      to={link.to}
                      end={link.end}
                      className={({ isActive }) =>
                        `header-nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      <span className="header-nav-label">{link.label}</span>
                      <span className="header-nav-shape"></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ==================== ACTIONS ==================== */}
            <div className="header-actions">
              <Link
                to="/connexion"
                className="header-btn header-btn-ghost"
              >
                <FaSignInAlt />
                <span>Connexion</span>
              </Link>

              <Link
                to="/adhesion"
                className="header-btn header-btn-primary"
              >
                <FaUserPlus />
                <span>Adhérer</span>
              </Link>

              <button
                className="header-burger"
                onClick={() => setMobileOpen(true)}
                aria-label="Ouvrir le menu"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* ==================== MENU MOBILE ==================== */}
      <div
        className={`header-mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      ></div>

      <aside
        className={`header-mobile ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="header-mobile-header">
          <Link
            to="/"
            className="header-logo"
            onClick={() => setMobileOpen(false)}
          >
            <div className="header-logo-mark">
              <span>R</span>
            </div>
            <span className="header-logo-name">RESASS</span>
          </Link>

          <button
            className="header-mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="header-mobile-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `header-mobile-link ${isActive ? "active" : ""}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="header-mobile-link-dot"></span>
                  {link.label}
                  <FaChevronDown className="header-mobile-link-chevron" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-mobile-actions">
          <Link
            to="/connexion"
            className="header-btn header-btn-ghost"
            onClick={() => setMobileOpen(false)}
          >
            <FaSignInAlt />
            Connexion
          </Link>
          <Link
            to="/adhesion"
            className="header-btn header-btn-primary"
            onClick={() => setMobileOpen(false)}
          >
            <FaUserPlus />
            Adhérer
          </Link>
        </div>

        <div className="header-mobile-footer">
          <span>© RESASS {new Date().getFullYear()}</span>
        </div>
      </aside>
    </>
  );
};

export default Header;