import "../styles/entry.css";
import { useNavigate } from "react-router-dom";

function AnonymousEntry() {
  const navigate = useNavigate();

  return (
    <div className="entry-container">
      
      {/* Brand */}
      <header className="entry-header">
        <div className="logo">🌿</div>
        <h1 className="brand-name">
          Serene<span>Mind</span>
        </h1>
      </header>

      {/* Main Content */}
      <section className="entry-card">
        <h2>Enter safely and anonymously</h2>

        <p className="entry-text">
          You don’t need to share your name, email, or phone number.  
          Everything here is designed to protect your privacy.
        </p>

        {/* Options */}
        <div className="entry-options">
          <div className="option-card">
            <h3>I need support</h3>
            <p>
              Talk about what you’re going through and receive understanding
              responses.
            </p>
          </div>

          <div className="option-card">
            <h3>I want to support others</h3>
            <p>
              Share your experiences and help others who may be struggling.
            </p>
          </div>
        </div>

        {/* ✅ NAVIGATION ADDED HERE */}
        <button
          className="primary-btn full-width"
          onClick={() => navigate("/ai-support")}
        >
          Continue Anonymously
        </button>

        <p className="privacy-note">
          We don’t track personal identity. You can leave anytime.
        </p>
      </section>
    </div>
  );
}

export default AnonymousEntry;
