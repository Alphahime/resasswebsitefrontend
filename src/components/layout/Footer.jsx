import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Liens de navigation
  const quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Annuaire Alumni", href: "/annuaire" },
    { label: "Activités & Événements", href: "/activites" },
    { label: "Opportunités", href: "/opportunites" },
  ];

  const resourceLinks = [
    { label: "Projets & Réalisations", href: "/projets" },
    { label: "Partenaires", href: "/partenaires" },
    { label: "Contact", href: "/contact" },
    { label: "Adhésion", href: "/adhesion" },
    { label: "Espace membre", href: "/membre" },
  ];

  // Réseaux sociaux
  const socials = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
    },
    {
      id: 4,
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://youtube.com",
    },
    {
      id: 5,
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com",
    },
  ];

  // Remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Halos décoratifs */}
      <div className="footer-glow footer-glow-left"></div>
      <div className="footer-glow footer-glow-right"></div>

      <div className="footer-container">
        {/* ==================== COLONNES ==================== */}
        <div className="footer-grid">
          {/* Colonne 1 — Branding */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-logo">
                <span className="footer-logo-text">R</span>
              </div>
              <div>
                <h3 className="footer-brand-name">RESASS</h3>
                <span className="footer-brand-tag">
                  Réseau des Alumni Simplon Sénégal
                </span>
              </div>
            </div>

            <p className="footer-brand-description">
              Rassembler, accompagner et valoriser les anciens apprenants de
              Simplon Sénégal pour construire ensemble l'avenir du numérique.
            </p>

            <div className="footer-verified">
              <MdVerified />
              <span>Réseau officiel des Alumni Simplon Sénégal</span>
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <span className="footer-link-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Ressources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Ressources</h4>
            <ul className="footer-links">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <span className="footer-link-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>

            <ul className="footer-contact">
              <li>
                <FaEnvelope className="footer-contact-icon" />
                <a href="mailto:contact@resass.sn">contact@resass.sn</a>
              </li>
              <li>
                <FaPhoneAlt className="footer-contact-icon" />
                <a href="tel:+221000000000">+221 00 000 00 00</a>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="footer-socials-block">
              <span className="footer-socials-label">Suivez-nous</span>
              <div className="footer-socials">
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== BARRE INFÉRIEURE ==================== */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <strong>RESASS</strong> — Tous droits réservés.
          </p>

          <ul className="footer-legal">
            <li>
              <a href="/mentions-legales">Mentions légales</a>
            </li>
            <li>
              <a href="/confidentialite">Confidentialité</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
          </ul>

          <button
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Remonter en haut"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* ==================== NOM GÉANT FONDU ==================== */}
      <div className="footer-watermark" aria-hidden="true">
        RESASS
      </div>
    </footer>
  );
};

export default Footer;