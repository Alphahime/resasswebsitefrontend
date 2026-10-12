import React from "react";
import "./About.css";
import {
  FaBullseye,
  FaRocket,
  FaHandsHelping,
  FaAward,
  FaNetworkWired,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const About = () => {
  const values = [
    {
      id: 1,
      icon: <FaHandsHelping />,
      title: "Entraide",
      description:
        "Une communauté solidaire où chaque Alumni peut compter sur les autres.",
    },
    {
      id: 2,
      icon: <FaAward />,
      title: "Excellence",
      description:
        "Valoriser les compétences, les parcours et les réussites de chacun.",
    },
    {
      id: 3,
      icon: <FaNetworkWired />,
      title: "Collaboration",
      description:
        "Créer des ponts durables entre Alumni, entreprises et partenaires.",
    },
  ];

  return (
    <section className="about">
      <div className="about-container">
        {/* ==================== COLONNE GAUCHE ==================== */}
        <div className="about-text">
          <div className="about-badge">
            <MdVerified className="about-badge-icon" />
            À propos du RESASS
          </div>

          <h2 className="about-title">
            Un réseau qui{" "}
            <span className="highlight">
              connecte
              <span className="highlight-underline"></span>
            </span>{" "}
            les talents du numérique
          </h2>

          <p className="about-description">
            Le <strong>Réseau des Alumni de Simplon Sénégal (RESASS)</strong>{" "}
            rassemble les anciens apprenants autour d'une mission commune :
            favoriser l'entraide entre les promotions, renforcer l'insertion
            professionnelle et créer des passerelles durables entre les
            Alumni, les entreprises et les partenaires du numérique.
          </p>

          <p className="about-description">
            À travers des événements, des opportunités partagées et des projets
            collaboratifs, le RESASS accompagne chaque membre dans son parcours
            professionnel et contribue au rayonnement des talents sénégalais.
          </p>

          {/* Valeurs */}
          <ul className="about-values">
            {values.map((value) => (
              <li key={value.id} className="about-value-item">
                <div className="about-value-icon">{value.icon}</div>
                <div className="about-value-content">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
<a href="/a-propos" className="about-cta">
  <span className="about-cta-text">En savoir plus sur le RESASS</span>
  <FaArrowRight className="about-cta-icon" />
</a>
        </div>

        {/* ==================== COLONNE DROITE ==================== */}
        <div className="about-visual">
          {/* Carte principale : Mission */}
          <div className="about-card about-card-main">
            <div className="about-card-header">
              <div className="about-card-icon">
                <FaBullseye />
              </div>
              <span className="about-card-tag">Notre raison d'être</span>
            </div>
            <h3 className="about-card-title">Notre mission</h3>
            <p className="about-card-text">
              Structurer, animer et valoriser la communauté des Alumni de
              Simplon Sénégal à travers tout le pays.
            </p>
            <div className="about-card-footer">
              <span className="about-card-badge">
                <FaCheck /> Objectif stratégique
              </span>
            </div>
          </div>

          {/* Carte secondaire : Vision */}
          <div className="about-card about-card-secondary">
            <div className="about-card-header">
              <div className="about-card-icon">
                <FaRocket />
              </div>
              <span className="about-card-tag">Notre ambition</span>
            </div>
            <h3 className="about-card-title">Notre vision</h3>
            <p className="about-card-text">
              Devenir le réseau de référence pour l'insertion et l'innovation
              numérique au Sénégal.
            </p>
            <div className="about-card-footer">
              <span className="about-card-badge">
                <FaCheck /> Cap 2028
              </span>
            </div>
          </div>

          {/* Décor géométrique */}
          <div className="about-decoration"></div>
          <div className="about-decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default About;