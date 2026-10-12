import React from "react";
import "./Cta.css";
import {
  FaUserPlus,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

const Cta = () => {
  const memberBenefits = [
    "Accès à l'annuaire des Alumni",
    "Inscription aux événements du réseau",
    "Réception des offres d'emploi et stages",
    "Carte de membre officielle du RESASS",
  ];

  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          {/* Bloc gauche : texte + bénéfices */}
          <div className="cta-left">
            <span className="cta-badge">Rejoignez-nous</span>

            <h2 className="cta-title">
              Faites partie de la <span className="highlight">communauté</span>{" "}
              des Alumni de Simplon Sénégal
            </h2>

            <p className="cta-description">
              Adhérez au RESASS et accédez à un réseau actif d'Alumni, à des
              opportunités professionnelles exclusives et à des événements
              dédiés à votre développement.
            </p>

            <ul className="cta-benefits">
              {memberBenefits.map((benefit, index) => (
                <li key={index}>
                  <FaCheckCircle className="cta-benefit-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="cta-actions">
              <a href="/adhesion" className="cta-btn cta-btn-primary">
                <FaUserPlus />
                Adhérer au RESASS
                <FaArrowRight />
              </a>

              <a href="/partenaires" className="cta-btn cta-btn-outline">
                <FaHandshake />
                Devenir partenaire
              </a>
            </div>
          </div>

          {/* Bloc droit : carte contact */}
          <div className="cta-right">
            <div className="cta-card">
              <div className="cta-card-header">
                <FaEnvelope className="cta-card-icon" />
                <h3>Une question ?</h3>
              </div>

              <p className="cta-card-text">
                Notre équipe est disponible pour répondre à toutes vos
                questions sur l'adhésion, les partenariats ou les activités du
                réseau.
              </p>

              <a href="/contact" className="cta-card-link">
                Nous contacter <FaArrowRight />
              </a>

              <div className="cta-card-divider"></div>

              <div className="cta-card-info">
                <div className="cta-card-info-item">
                  <span className="cta-card-info-label">Email</span>
                  <span className="cta-card-info-value">
                    contact@resass.sn
                  </span>
                </div>
                <div className="cta-card-info-item">
                  <span className="cta-card-info-label">Localisation</span>
                  <span className="cta-card-info-value">
                    Dakar, Sénégal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;