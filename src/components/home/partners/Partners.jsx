import React from "react";
import "./Partners.css";
import {
  FaHandshake,
  FaBuilding,
  FaGlobeAfrica,
  FaChalkboardTeacher,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Partners = () => {
  // Types de partenaires
  const partnerTypes = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: "Entreprises",
      description:
        "Recrutez des talents qualifiés et collaborez sur des projets innovants.",
    },
    {
      id: 2,
      icon: <FaGlobeAfrica />,
      title: "Institutions",
      description:
        "Soutenez l'insertion professionnelle et le développement du numérique.",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher />,
      title: "Écoles & Formations",
      description:
        "Créez des passerelles entre formation et monde professionnel.",
    },
  ];

  // Avantages
  const benefits = [
    "Accès à un vivier de talents qualifiés",
    "Visibilité auprès de la communauté Alumni",
    "Participation aux événements du réseau",
    "Opportunités de collaboration sur des projets",
  ];

  // Logos partenaires (placeholders — remplacer par vrais logos)
  const partners = [
    { id: 1, name: "Simplon Sénégal" },
    { id: 2, name: "Orange Digital" },
    { id: 3, name: "Sonatel" },
    { id: 4, name: "Wave" },
    { id: 5, name: "Dakar Institute" },
    { id: 6, name: "Tech Hub SN" },
    { id: 7, name: "Impact Hub" },
    { id: 8, name: "Université Dakar" },
  ];

  // On duplique la liste pour l'effet de boucle infinie
  const loopPartners = [...partners, ...partners];

  return (
    <section className="partners">
      <div className="partners-container">
        {/* En-tête */}
        <div className="partners-header">
          <span className="partners-badge">
            <span className="partners-badge-dot"></span>
            Nos partenaires
          </span>
          <h2 className="partners-title">
            Ils soutiennent le <span className="highlight">RESASS</span>
          </h2>
          <p className="partners-subtitle">
            Entreprises, institutions et organisations qui œuvrent aux côtés du
            réseau pour valoriser les talents du numérique sénégalais.
          </p>
        </div>

        {/* Carrousel de logos en boucle infinie */}
        <div className="partners-marquee">
          <div className="partners-marquee-track">
            {loopPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="partner-logo"
              >
                <span>{partner.name}</span>
              </div>
            ))}
          </div>

          {/* Dégradés sur les bords pour effet fondu */}
          <div className="partners-marquee-fade partners-marquee-fade-left"></div>
          <div className="partners-marquee-fade partners-marquee-fade-right"></div>
        </div>

        {/* Types de partenaires */}
        <div className="partners-types">
          {partnerTypes.map((type) => (
            <div key={type.id} className="partner-type-card">
              <div className="partner-type-icon">{type.icon}</div>
              <h3 className="partner-type-title">{type.title}</h3>
              <p className="partner-type-description">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Bloc "Devenir partenaire" */}
        <div className="partners-cta">
          <div className="partners-cta-left">
            <div className="partners-cta-icon">
              <FaHandshake />
            </div>
            <div className="partners-cta-text">
              <h3>Devenez partenaire du RESASS</h3>
              <p>
                Rejoignez un réseau dynamique et contribuez à l'essor des
                talents numériques au Sénégal.
              </p>
              <ul className="partners-benefits">
                {benefits.map((benefit, i) => (
                  <li key={i}>
                    <FaCheckCircle /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="/partenaires" className="partners-cta-btn">
            Devenir partenaire <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;