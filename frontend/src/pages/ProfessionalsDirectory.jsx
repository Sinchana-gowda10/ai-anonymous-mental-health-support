import "../styles/professionals.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfessionalsDirectory() {
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/professionals`);
        const data = await res.json();
        setProfessionals(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load professionals");
      } finally {
        setLoading(false);
      }
    };

    fetchProfessionals();
  }, []);

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

      {/* Intro */}
      <section className="professionals-intro">
        <p>
          Connect anonymously with verified mental health professionals.
          All conversations are private and confidential.
        </p>
      </section>

      {/* States */}
      {loading && <p>Loading professionals...</p>}
      {error && <p>{error}</p>}

      {/* Dynamic List */}
      <div className="professionals-list">
        {professionals.length === 0 && !loading ? (
          <p>No professionals available.</p>
        ) : (
          professionals.map((pro) => (
            <div key={pro.id} className="professional-card">

              <div className="professional-info">
                <h3>{pro.specialization}</h3>
                <p className="professional-name">{pro.name}</p>
                <p className="professional-meta">
                  {pro.experience}
                </p>
              </div>

              <div className="professional-actions">
                <span className="verified-badge">✔ Verified</span>

                <button
                  className="view-profile-btn"
                  onClick={() => navigate(`/professional/${pro.id}`)}
                >
                  View Profile
                </button>
              </div>

            </div>
          ))
        )}
      </div>

      {/* Footer Note */}
      <p className="transparency-note">
        You remain anonymous. Payments are secure and handled only when you
        choose to start a session.
      </p>

    </div>
  );
}

export default ProfessionalsDirectory;