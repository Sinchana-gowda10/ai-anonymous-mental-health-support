import "../styles/profile.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfessionalProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [professional, setProfessional] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfessional = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/professionals`);
        const data = await res.json();

        const selected = data.find((p) => p.id === parseInt(id));
        setProfessional(selected);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessional();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!professional) return <p>Professional not found</p>;

  return (
    <div className="profile-container">

      {/* Header */}
      <header className="profile-header">
        <div className="header-left">
          <div className="brand-text">
            <h1 className="brand-name">
              🌿Serene<span>Mind</span>
            </h1>
            <h2 className="page-title">Professional Profile</h2>
          </div>
        </div>
      </header>

      {/* Back */}
      <p className="back-link" onClick={() => navigate("/professionals")}>
        ← Back to professionals
      </p>

      {/* Profile Card */}
      <div className="profile-card">

        <div className="profile-main">
          <div className="profile-avatar">👩‍⚕️</div>
          <div>
            <h3>{professional.name}</h3>
            <p className="profile-role">{professional.specialization}</p>
            <span className="verified-badge">✔ Licensed & Verified</span>
          </div>
        </div>

        <p className="profile-description">
          This professional has {professional.experience} of experience helping individuals with mental health challenges.
        </p>

      </div>

      {/* Expertise (Static for now) */}
      <section className="profile-section">
        <h4>Areas of Expertise</h4>
        <div className="expertise-tags">
          <span>Anxiety</span>
          <span>Depression</span>
          <span>Stress</span>
          <span>Emotional Well-being</span>
        </div>
      </section>

      {/* Session */}
      <section className="profile-section session-details">
        <h4>Session Details</h4>
        <p>💬 Text-based session</p>
        <p>⏱ Pay per minute</p>
        <p>💳 ₹50 per minute</p>
      </section>

      {/* CTA */}
      <button
  className="start-session-btn"
  onClick={() =>
    navigate("/payment", {
      state: { professional },
    })
  }
>
  Start Anonymous Session
</button>

      {/* Privacy */}
      <p className="privacy-note">
        Your identity remains anonymous. Sessions are private and encrypted.
      </p>

    </div>
  );
}

export default ProfessionalProfile;