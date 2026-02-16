import "../styles/professionals.css";

function ProfessionalsDirectory() {
  return (
    <div className="professionals-container">

      {/* Header */}
      <header className="professionals-header">
        <div className="header-left">
          <div className="brand-text">
            <h1 className="brand-name">
             🌿 Serene<span>Mind</span>
            </h1>
            <h2 className="page-title">Licensed Professionals</h2>
          </div>
        </div>  
      </header>

      {/* Intro Banner */}
      <section className="professionals-intro">
        <p>
          Connect anonymously with verified mental health professionals.
          All conversations are private and confidential.
        </p>
      </section>

      {/* Professionals List */}
      <div className="professionals-list">

        <div className="professional-card">
          <div className="professional-info">
            <h3>Clinical Psychologist</h3>
            <p className="professional-name">Dr. A. Sharma</p>
            <p className="professional-meta">
              8+ years experience · Anxiety, Depression
            </p>
          </div>

          <div className="professional-actions">
            <span className="verified-badge">✔ Verified</span>
            <button className="view-profile-btn">
              View Profile
            </button>
          </div>
        </div>

        <div className="professional-card">
          <div className="professional-info">
            <h3>Therapist & Counselor</h3>
            <p className="professional-name">Ms. R. Mehta</p>
            <p className="professional-meta">
              5+ years experience · Stress, Relationships
            </p>
          </div>

          <div className="professional-actions">
            <span className="verified-badge">✔ Verified</span>
            <button className="view-profile-btn">
              View Profile
            </button>
          </div>
        </div>

        <div className="professional-card">
          <div className="professional-info">
            <h3>Psychiatric Consultant</h3>
            <p className="professional-name">Dr. K. Rao</p>
            <p className="professional-meta">
              10+ years experience · Mood Disorders
            </p>
          </div>

          <div className="professional-actions">
            <span className="verified-badge">✔ Verified</span>
            <button className="view-profile-btn">
              View Profile
            </button>
          </div>
        </div>

      </div>

      {/* Transparency Note */}
      <p className="transparency-note">
        You remain anonymous. Payments are secure and handled only when you
        choose to start a session.
      </p>

    </div>
  );
}

export default ProfessionalsDirectory;
