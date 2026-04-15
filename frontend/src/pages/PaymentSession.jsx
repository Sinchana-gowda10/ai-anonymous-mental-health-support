import "../styles/payment.css";
import { useNavigate, useLocation } from "react-router-dom";

function PaymentSession() {
  const navigate = useNavigate();
  const location = useLocation();

  const { professional } = location.state || {};

  const handlePayment = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        professional_id: professional?.id || 1,
      }),
    });

    const data = await res.json();

    const options = {
      key: data.key,
      amount: data.amount,
      currency: data.currency,
      order_id: data.order_id,
      name: "SereneMind",
      description: "Consultation Session",

      // ✅ EVERYTHING MUST BE INSIDE THIS FUNCTION
      handler: async function (response) {

  try {
    // ✅ Step 1: Verify payment
    await fetch("http://127.0.0.1:8000/verify-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      }),
    });

    // ✅ Step 2: Get user_id
    const userId = localStorage.getItem("user_id");

    // ✅ Step 3: Start session
    const sessionRes = await fetch("http://127.0.0.1:8000/start-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        professional_id: professional?.id || 1,
      }),
    });

    const sessionData = await sessionRes.json();

    // ✅ Step 4: Store session_id
    localStorage.setItem("session_id", sessionData.session_id);

    // ✅ Step 5: Navigate to session page
    window.location.href = "/session";

  } catch (error) {
    console.error("Payment flow error:", error);
  }
},

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("Payment error:", error);
  }
};

  return (
    <div className="payment-container">

      {/* Header */}
      <header className="payment-header">
        <div className="header-left">
          <div className="brand-text">
            <h1 className="brand-name">
              🌿Serene<span>Mind</span>
            </h1>
            <h2 className="page-title">Start Session</h2>
          </div>
        </div>
      </header>

      {/* Back */}
      <p className="back-link" onClick={() => navigate(-1)}>
        ← Back to profile
      </p>

      {/* Session Summary */}
      <div className="session-card">
        <h3>Session Summary</h3>

        <div className="session-row">
          <span>Professional</span>
          <span>{professional?.name || "N/A"}</span>
        </div>

        <div className="session-row">
          <span>Session Type</span>
          <span>Text-based consultation</span>
        </div>

        <div className="session-row">
          <span>Billing</span>
          <span>₹50 per minute</span>
        </div>
      </div>

      {/* Info */}
      <div className="control-card">
        <p>
          You are charged only for the time you use.  
          You can end the session at any moment.
        </p>
      </div>

      {/* CTA */}
      <button className="pay-btn" onClick={handlePayment}>
        Proceed to Secure Payment
      </button>

      {/* Note */}
      <p className="payment-note">
        Payments are processed securely.  
        Your identity remains anonymous throughout the session.
      </p>

    </div>
  );
}

export default PaymentSession;
