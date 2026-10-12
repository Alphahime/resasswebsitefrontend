import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";
import {
  FaUsers,
  FaGraduationCap,
  FaHandshake,
  FaBriefcase,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

/* ============================================
   Hook : compteur animé déclenché au scroll
   ============================================ */
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing "easeOutExpo" pour un rendu plus naturel
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(eased * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration, start]);

  return { count, ref };
};

/* ============================================
   Sous-composant : carte stat avec compteur
   ============================================ */
const StatCard = ({ icon, value, label, description, index }) => {
  const { count, ref } = useCountUp(value, 1800 + index * 200);

  return (
    <div
      className="stat-card"
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="stat-card-glow"></div>

      <div className="stat-icon">{icon}</div>

      <div className="stat-value">
        <span className="stat-value-prefix">+</span>
        <span className="stat-value-number">{count}</span>
      </div>

      <div className="stat-label">{label}</div>
      <p className="stat-description">{description}</p>

      <div className="stat-card-line"></div>
    </div>
  );
};

/* ============================================
   Composant principal Stats
   ============================================ */
const Stats = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers />,
      value: 500,
      label: "Alumni actifs",
      description: "Membres inscrits dans le réseau à travers le Sénégal",
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      value: 20,
      label: "Promotions",
      description: "Promotions de Simplon Sénégal représentées",
    },
    {
      id: 3,
      icon: <FaHandshake />,
      value: 50,
      label: "Partenaires",
      description: "Entreprises et organisations collaborant avec le RESASS",
    },
    {
      id: 4,
      icon: <FaBriefcase />,
      value: 150,
      label: "Opportunités publiées",
      description: "Offres d'emploi, stages et missions partagées",
    },
  ];

  const { count: impactCount, ref: impactRef } = useCountUp(90, 2200);

  return (
    <section className="stats">
      <div className="stats-container">
        {/* En-tête */}
        <div className="stats-header">
          <span className="stats-badge">Le RESASS en chiffres</span>
          <h2 className="stats-title">
            Une communauté <span className="highlight">engagée</span> et en
            croissance
          </h2>
          <p className="stats-subtitle">
            Depuis sa création, le RESASS structure et anime la communauté des
            Alumni de Simplon Sénégal à travers tout le pays.
          </p>
        </div>

        {/* Grille de statistiques */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              index={index}
            />
          ))}
        </div>

        {/* Bandeau impact */}
        <div className="stats-impact" ref={impactRef}>
          <div className="stats-impact-left">
            <div className="stats-impact-icon">
              <FaChartLine />
            </div>
            <div className="stats-impact-text">
              <h3>Un impact mesurable et durable</h3>
              <p>
                Chaque mois, le RESASS connecte les Alumni aux opportunités
                professionnelles et renforce les liens entre les promotions.
              </p>
            </div>
          </div>

          <div className="stats-impact-right">
            <div className="stats-impact-item">
              <FaAward />
              <div>
                <span className="stats-impact-value">+{impactCount}%</span>
                <span className="stats-impact-label">Taux d'insertion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;