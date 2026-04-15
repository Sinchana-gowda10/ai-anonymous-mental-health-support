import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SessionPage() {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(0);
  const [cost, setCost] = useState(0);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cost calculation
  useEffect(() => {
    const minutes = seconds / 60;
    const currentCost = (minutes * 50).toFixed(2);
    setCost(currentCost);
  }, [seconds]);

  // Send message
  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, message]);
    setMessage("");
  };

  // End session
  const handleEndSession = async () => {
    const sessionId = localStorage.getItem("session_id");

    try {
      const res = await fetch("http://127.0.0.1:8000/end-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: parseInt(sessionId),
        }),
      });

      const data = await res.json();

      alert(`Session ended. Total cost: ₹${data.total_cost}`);
      navigate("/");
    } catch (error) {
      console.error("Error ending session:", error);
      alert("Failed to end session");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f5f7fa",
      }}
    >
      <h1 style={{ fontSize: "32px" }}>🟢 Session Active</h1>

      {/* Session Info */}
      <div
        style={{
          marginTop: "20px",
          padding: "30px",
          borderRadius: "12px",
          background: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2>⏱ Time: {seconds}s</h2>
        <h2>💰 Cost: ₹{cost}</h2>
      </div>

      {/* Chat Box */}
      <div
        style={{
          marginTop: "20px",
          width: "300px",
          background: "white",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            height: "150px",
            overflowY: "auto",
            marginBottom: "10px",
          }}
        >
          {messages.map((msg, index) => (
            <p key={index} style={{ margin: "5px 0" }}>
              {msg}
            </p>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message..."
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleSend}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              background: "#1890ff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>

      {/* End Session Button */}
      <button
        onClick={handleEndSession}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          background: "#ff4d4f",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        End Session
      </button>
    </div>
  );
}

export default SessionPage;