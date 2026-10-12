import React from "react";
import "./Banner.css";
import {
  FaArrowRight,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
  FaPlay,
} from "react-icons/fa";
import bannerImage from "../../../assets/imagebannerresass.png";

const Banner = () => {
  return (
    <section className="banner">
      {/* Image de fond */}
      <div
        className="banner-bg"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      {/* Overlays décoratifs */}
      <div className="banner-overlay"></div>
      <div className="banner-grid-pattern"></div>
      <div className="banner-glow banner-glow-left"></div>
      <div className="banner-glow banner-glow-right"></div>

      {/* Contenu */}
      <div className="banner-content">
        {/* Bloc gauche : texte */}
        <div className="banner-left">
          <div className="banner-badge">
            <span className="banner-badge-dot"></span>
            Réseau des Alumni de Simplon Sénégal
          </div>

          <h1 className="banner-title">
            Connectons les{" "}
            <span className="highlight">
              talents
              <span className="highlight-underline"></span>
            </span>{" "}
            du numérique sénégalais
          </h1>

          <p className="banner-subtitle">
            Le RESASS rassemble les anciens apprenants de Simplon Sénégal pour
            favoriser l'entraide, l'insertion professionnelle et les
            opportunités collaboratives à travers tout le pays.
          </p>

          <div className="banner-actions">
            <a href="/adhesion" className="btn btn-primary">
              Rejoindre le réseau <FaArrowRight />
            </a>
            <a href="/a-propos" className="btn btn-outline">
              <FaPlay className="btn-play-icon" />
              Découvrir le RESASS
            </a>
          </div>
        </div>

        {/* Bloc droit : carte flottante "stats" */}
        <div className="banner-right">
          <div className="banner-card">
            <div className="banner-card-header">
              <span className="banner-card-label">La communauté en chiffres</span>
              <span className="banner-card-live">
                <span className="live-dot"></span> En direct
              </span>
            </div>

            <div className="banner-card-stats">
              <div className="banner-stat">
                <div className="banner-stat-icon">
                  <FaUsers />
                </div>
                <div className="banner-stat-info">
                  <span className="banner-stat-number">+500</span>
                  <span className="banner-stat-label">Alumni actifs</span>
                </div>
              </div>

              <div className="banner-stat">
                <div className="banner-stat-icon">
                  <FaGraduationCap />
                </div>
                <div className="banner-stat-info">
                  <span className="banner-stat-number">+20</span>
                  <span className="banner-stat-label">Promotions</span>
                </div>
              </div>

              <div className="banner-stat">
                <div className="banner-stat-icon">
                  <FaHandshake />
                </div>
                <div className="banner-stat-info">
                  <span className="banner-stat-number">+50</span>
                  <span className="banner-stat-label">Partenaires</span>
                </div>
              </div>
            </div>

            <div className="banner-card-footer">
              <div className="banner-card-avatars">
                <span className="avatar"></span>
                <span className="avatar"></span>
                <span className="avatar"></span>
                <span className="avatar avatar-more">+</span>
              </div>
              <span className="banner-card-footer-text">
                Rejoignez la communauté
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="banner-scroll">
        <span className="banner-scroll-mouse">
          <span className="banner-scroll-wheel"></span>
        </span>
        <span className="banner-scroll-text">Défiler</span>
      </div>
    </section>
  );
};

export default Banner;