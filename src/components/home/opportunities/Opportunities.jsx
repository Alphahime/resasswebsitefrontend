import React from "react";
import "./Opportunities.css";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaHandshake,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Opportunities = () => {
  const opportunities = [
    {
      id: 1,
      icon: <FaBriefcase />,
      type: "CDI",
      title: "Développeur Full Stack React / Node.js",
      company: "Entreprise partenaire — Dakar",
      location: "Dakar, Sénégal",
      duration: "Temps plein",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      type: "Stage",
      title: "Stage en Data Analyse et Visualisation",
      company: "Startup fintech — Remote",
      location: "Télétravail",
      duration: "6 mois",
      tags: ["Python", "Power BI", "SQL"],
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      type: "Freelance",
      title: "Mission : Refonte site vitrine WordPress",
      company: "Client direct — Thiès",
      location: "Hybride",
      duration: "1 mois",
      tags: ["WordPress", "UI/UX", "SEO"],
    },
  ];

  return (
    <section className="opportunities">
      <div className="opportunities-container">
        {/* En-tête de section */}
        <div className="opportunities-header">
          <div className="opportunities-header-left">
            <span className="opportunities-badge">Opportunités</span>
            <h2 className="opportunities-title">
              Emplois, stages et{" "}
              <span className="highlight">missions</span> pour nos Alumni
            </h2>
            <p className="opportunities-subtitle">
              Découvrez les dernières opportunités professionnelles partagées
              par nos partenaires et membres du réseau.
            </p>
          </div>

          <a href="/opportunites" className="opportunities-see-all">
            Voir toutes les offres <FaArrowRight />
          </a>
        </div>

        {/* Grille d'opportunités */}
        <div className="opportunities-grid">
          {opportunities.map((opp) => (
            <article key={opp.id} className="opportunity-card">
              <div className="opportunity-card-top">
                <div className="opportunity-icon">{opp.icon}</div>
                <span className="opportunity-type">{opp.type}</span>
              </div>

              <h3 className="opportunity-title">{opp.title}</h3>
              <p className="opportunity-company">{opp.company}</p>

              <div className="opportunity-meta">
                <span>
                  <FaMapMarkerAlt /> {opp.location}
                </span>
                <span>
                  <FaClock /> {opp.duration}
                </span>
              </div>

              <div className="opportunity-tags">
                {opp.tags.map((tag, i) => (
                  <span key={i} className="opportunity-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={`/opportunites/${opp.id}`} className="opportunity-link">
                Postuler <FaArrowRight />
              </a>
            </article>
          ))}
        </div>

        {/* Bandeau partenariat / recrutement */}
        <div className="opportunities-banner">
          <div className="opportunities-banner-icon">
            <FaHandshake />
          </div>
          <div className="opportunities-banner-text">
            <h3>Vous recrutez ? Publiez votre offre</h3>
            <p>
              Entreprises et partenaires, partagez vos opportunités auprès de
              notre communauté d'Alumni qualifiés.
            </p>
          </div>
          <a href="/publier-offre" className="opportunities-banner-btn">
            Publier une offre
          </a>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;