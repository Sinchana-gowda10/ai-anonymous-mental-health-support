import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      
      {/* Header / Brand */}
      <header className="brand-header">
        <div className="logo">🌿</div>
        <h1 className="brand-name">
          Serene<span>Mind</span>
        </h1>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>You don’t have to go through this alone.</h2>
        <p>
          A safe, anonymous space for mental health support.  
          Talk freely. Be heard. Stay anonymous.
        </p>

        {/* ✅ NAVIGATION ADDED HERE */}
        <button
          className="primary-btn"
          onClick={() => navigate("/enter")}
        >
          Enter Anonymously
        </button>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h3>How it works</h3>
        <div className="cards">
          <div className="card">
            <span>🛡️</span>
            <h4>Stay Anonymous</h4>
            <p>No name, no email, no phone number required.</p>
          </div>
          <div className="card">
            <span>💬</span>
            <h4>Talk Freely</h4>
            <p>Chat with AI, community members, or professionals.</p>
          </div>
          <div className="card">
            <span>🤍</span>
            <h4>Get Support</h4>
            <p>Empathy, understanding, and professional help.</p>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="support-types">
        <h3>What support you get</h3>
        <ul>
          <li>🌸 AI emotional support</li>
          <li>🌸 Anonymous community discussions</li>
          <li>🌸 Licensed mental health professionals</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          This platform does not replace professional medical advice.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
