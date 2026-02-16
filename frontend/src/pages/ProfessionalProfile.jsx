import "../styles/profile.css";

function ProfessionalProfile() {
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
      <p className="back-link">← Back to professionals</p>

      {/* Profile Card */}
      <div className="profile-card">

        <div className="profile-main">
          <div className="profile-avatar">👩‍⚕️</div>
          <div>
            <h3>Dr. A. Sharma</h3>
            <p className="profile-role">Clinical Psychologist</p>
            <span className="verified-badge">✔ Licensed & Verified</span>
          </div>
        </div>

        <p className="profile-description">
          Dr. Sharma is a licensed clinical psychologist with over 8 years of
          experience supporting individuals dealing with anxiety, depression,
          and emotional stress. Her approach focuses on empathy, clarity, and
          evidence-based care.
        </p>

      </div>

      {/* Expertise */}
      <section className="profile-section">
        <h4>Areas of Expertise</h4>
        <div className="expertise-tags">
          <span>Anxiety</span>
          <span>Depression</span>
          <span>Stress Management</span>
          <span>Emotional Well-being</span>
        </div>
      </section>

      {/* Session Details */}
      <section className="profile-section session-details">
        <h4>Session Details</h4>
        <p>💬 Text-based session</p>
        <p>⏱ Pay per minute</p>
        <p>💳 ₹50 per minute</p>
      </section>

      {/* CTA */}
      <button className="start-session-btn">
        Start Anonymous Session
      </button>

      {/* Privacy Note */}
      <p className="privacy-note">
        Your identity remains anonymous. Sessions are private and encrypted.
        You can end the session at any time.
      </p>

    </div>
  );
}

export default ProfessionalProfile;
