import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout global
import Layout from "./components/layout/Layout";

// Pages publiques
import Home from "./components/home/Home";
// import AboutPage from "./components/pages/AboutPage";
// import AlumniDirectory from "./components/pages/AlumniDirectory";
// import Activities from "./components/pages/Activities";
// import Jobs from "./components/pages/Jobs";
// import Projects from "./components/pages/Projects";
// import PartnersPage from "./components/pages/PartnersPage";
// import Contact from "./components/pages/Contact";
// import NotFound from "./components/pages/NotFound";

// Authentification
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import ForgotPassword from "./components/auth/ForgotPassword";

// Espace membre
// import MemberDashboard from "./components/profils/MemberDashboard";
// import MemberProfile from "./components/profils/MemberProfile";

// Administration
// import AdminLayout from "./components/admin/AdminLayout";
// import Dashboard from "./components/admin/Dashboard";
// import MembersAdmin from "./components/admin/MembersAdmin";
// import EventsAdmin from "./components/admin/EventsAdmin";
// import OpportunitiesAdmin from "./components/admin/OpportunitiesAdmin";
// import CardsAdmin from "./components/admin/CardsAdmin";
// import PartnersAdmin from "./components/admin/PartnersAdmin";
// import UsersAdmin from "./components/admin/UsersAdmin";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ============================================
            ROUTES PUBLIQUES — avec Header + Footer
            ============================================ */}
        <Route element={<Layout />}>
          {/* Accueil */}
          <Route path="/" element={<Home />} />

          {/* Pages institutionnelles */}
          {/* <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/annuaire" element={<AlumniDirectory />} />
          <Route path="/activites" element={<Activities />} />
          <Route path="/opportunites" element={<Jobs />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adhesion" element={<Register />} /> */}
        </Route>

        {/* ============================================
            ROUTES AUTHENTIFICATION — sans Header/Footer
            ============================================ */}
        {/* <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} /> */}

        {/* ============================================
            ESPACE MEMBRE (privé)
            ============================================ */}
        {/* <Route path="/membre" element={<MemberDashboard />} />
        <Route path="/membre/profil" element={<MemberProfile />} /> */}

        {/* ============================================
            ADMINISTRATION (privé)
            ============================================ */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="membres" element={<MembersAdmin />} />
          <Route path="evenements" element={<EventsAdmin />} />
          <Route path="opportunites" element={<OpportunitiesAdmin />} />
          <Route path="cartes" element={<CardsAdmin />} />
          <Route path="partenariats" element={<PartnersAdmin />} />
          <Route path="utilisateurs" element={<UsersAdmin />} />
        </Route> */}

        {/* ============================================
            404
            ============================================ */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;