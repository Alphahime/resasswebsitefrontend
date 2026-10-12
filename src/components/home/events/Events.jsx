import React from "react";
import "./Events.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaUsers,
  FaVideo,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";

const Events = () => {
  const events = [
    {
      id: 1,
      icon: <FaChalkboardTeacher />,
      category: "Atelier",
      day: "15",
      month: "Nov",
      title: "Atelier React Avancé : Hooks & Performance",
      description:
        "Session pratique animée par des Alumni expérimentés pour maîtriser les hooks avancés et optimiser les performances de vos applications React.",
      location: "Dakar — Simplon Sénégal",
      time: "14h00 — 17h00",
      attendees: 45,
      status: "Inscriptions ouvertes",
    },
    {
      id: 2,
      icon: <FaVideo />,
      category: "Webinaire",
      day: "22",
      month: "Nov",
      title: "Carrière dans la Data : Parcours et Opportunités",
      description:
        "Webinaire en ligne avec des Alumni travaillant dans la data pour échanger sur les parcours, les compétences et les débouchés au Sénégal.",
      location: "En ligne (Zoom)",
      time: "18h00 — 19h30",
      attendees: 120,
      status: "Inscriptions ouvertes",
    },
    {
      id: 3,
      icon: <FaHandshake />,
      category: "Rencontre",
      day: "05",
      month: "Déc",
      title: "Meetup Alumni & Entreprises Partenaires",
      description:
        "Soirée networking entre les Alumni du RESASS et les entreprises partenaires pour favoriser les opportunités professionnelles.",
      location: "Dakar — Impact Hub",
      time: "17h00 — 20h00",
      attendees: 80,
      status: "Bientôt",
    },
  ];

  return (
    <section className="events">
      <div className="events-container">
        {/* En-tête */}
        <div className="events-header">
          <div className="events-header-left">
            <span className="events-badge">Activités & Événements</span>
            <h2 className="events-title">
              Prochains <span className="highlight">rendez-vous</span> du réseau
            </h2>
            <p className="events-subtitle">
              Ateliers, webinaires, rencontres et formations : participez aux
              activités qui font vivre la communauté RESASS.
            </p>
          </div>

          <a href="/activites" className="events-see-all">
            Voir tous les événements <FaArrowRight />
          </a>
        </div>

        {/* Grille d'événements */}
        <div className="events-grid">
          {events.map((event) => (
            <article key={event.id} className="event-card">
              {/* Bloc date en haut */}
              <div className="event-date">
                <span className="event-day">{event.day}</span>
                <span className="event-month">{event.month}</span>
              </div>

              {/* Contenu */}
              <div className="event-content">
                <div className="event-category">
                  <span className="event-category-icon">{event.icon}</span>
                  <span>{event.category}</span>
                </div>

                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-meta">
                  <span>
                    <FaMapMarkerAlt /> {event.location}
                  </span>
                  <span>
                    <FaClock /> {event.time}
                  </span>
                  <span>
                    <FaUsers /> {event.attendees} inscrits
                  </span>
                </div>
              </div>

              {/* Pied de carte */}
              <div className="event-footer">
                <span
                  className={`event-status ${
                    event.status === "Bientôt" ? "status-soon" : "status-open"
                  }`}
                >
                  {event.status}
                </span>

                <a href={`/activites/${event.id}`} className="event-link">
                  S'inscrire <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bandeau CTA calendrier */}
        <div className="events-cta">
          <div className="events-cta-icon">
            <FaCalendarAlt />
          </div>
          <div className="events-cta-text">
            <h3>Ne manquez aucun événement</h3>
            <p>
              Consultez le calendrier complet des activités du RESASS et
              inscrivez-vous en quelques clics.
            </p>
          </div>
          <a href="/activites" className="events-cta-btn">
            Voir le calendrier
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;