import "../styles/chat.css";
import { useNavigate } from "react-router-dom";

function AISupportChat() {
  const navigate = useNavigate();

  return (
    <div className="chat-container">

      {/* Header */}
      <header className="chat-header">
        <div className="logo">🌿</div>
        <div>
          <h1 className="brand-name">
            Serene<span>Mind</span>
          </h1>
          <p className="chat-subtitle">AI Support</p>
        </div>
      </header>

      {/* Chat Window */}
      <div className="chat-window">

        <div className="chat-bubble ai">
          <p>
            Hello. I’m here with you.  
            You can talk to me about anything that’s on your mind.
          </p>
        </div>

        <div className="chat-bubble user">
          <p>
            I’ve been feeling overwhelmed lately and don’t know why.
          </p>
        </div>

        <div className="chat-bubble ai">
          <p>
            That sounds really heavy.  
            Would you like to tell me what has been affecting you the most?
          </p>
        </div>

      </div>

      {/* Input Area */}
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type what you’re feeling..."
        />
        <button className="primary-btn">
          Send
        </button>
      </div>

      {/* 🔹 Navigation Actions */}
      <div className="chat-actions">
        <button
          className="secondary-btn"
          onClick={() => navigate("/community")}
        >
          Go to Community Support
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/professionals")}
        >
          Talk to a Professional
        </button>
      </div>

      {/* Disclaimer */}
      <p className="chat-disclaimer">
        This AI provides emotional support, not medical advice.
      </p>

    </div>
  );
}

export default AISupportChat;
