import "../styles/chat.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useUser } from "../context/UserContext";

function AISupportChat() {
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  // ✅ Correct Context Usage
  const { userId } = useUser();
const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
  inputRef.current?.focus();
}, []);

  // ✅ Send Message Function
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    if (!userId) {
  alert("User not initialized");
  return;
}

    const userMessage = {
  sender: "user",
  text: input,
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          user_id: userId, // ✅ fixed
        }),
      });

      const data = await res.json();

      const botMessage = {
  sender: "ai",
  text: data.reply,
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }

    setInput("");
  };

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

      {/* ✅ User ID Display */}
      {userId && (
        <div className="anonymous-id-badge">
          Anonymous ID: {userId}
        </div>
      )}

      {/* Chat Window */}
      <div className="chat-window">
        {/* Default intro */}
        {messages.length === 0 && (
          <div className="chat-bubble ai">
            <p>
              Hello. I’m here with you.
              You can talk to me about anything that’s on your mind.
            </p>
          </div>
        )}

        {/* Messages */}
        {messages.map((msg, index) => (
  <div key={index} className={`chat-bubble ${msg.sender}`}>
    <p>{msg.text}</p>
    <span className="chat-time">{msg.time}</span>
  </div>
))}

        {/* Loading */}
        {loading && (
  <div className="chat-bubble ai typing">
    <span></span>
    <span></span>
    <span></span>
  </div>
)}

        {/* Auto-scroll anchor */}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input Area */}
      <div className="chat-input-area">
       <input
  ref={inputRef}
  type="text"
  placeholder="Type what you’re feeling..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
  disabled={loading}
/>
        <button
          className="primary-btn"
          onClick={handleSendMessage}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      {/* Navigation */}
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