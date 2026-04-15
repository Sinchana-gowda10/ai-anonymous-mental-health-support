import "../styles/entry.css";
import { useNavigate } from "react-router-dom";

function AnonymousEntry() {
  const navigate = useNavigate();

  const handleAnonymousEntry = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/create-anonymous-user", {
      method: "POST",
    });

    const data = await res.json();

    // 🔥 Store user ID
    localStorage.setItem("user_id", data.user_id);

    console.log("User created:", data.user_id);

    // Navigate after storing
    navigate("/ai-support");

  } catch (error) {
    console.error("Error creating user:", error);
  }
};

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

        {/* Button */}
        <button
          className="primary-btn full-width"
          onClick={handleAnonymousEntry}
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