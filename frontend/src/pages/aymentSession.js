import "../styles/payment.css";

function PaymentSession() {
  return (
    <div className="payment-container">

      {/* Header */}
      <header className="payment-header">
        <div className="header-left">
          <div className="logo">🌿</div>
          <div className="brand-text">
            <h1 className="brand-name">
              Serene<span>Mind</span>
            </h1>
            <h2 className="page-title">Start Session</h2>
          </div>
        </div>
      </header>

      {/* Back */}
      <p className="back-link">← Back to profile</p>

      {/* Session Summary */}
      <div className="session-card">
        <h3>Session Summary</h3>

        <div className="session-row">
          <span>Professional</span>
          <span>Dr. A. Sharma</span>
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

      {/* Control Info */}
      <div className="control-card">
        <p>
          You are charged only for the time you use.  
          You can end the session at any moment.
        </p>
      </div>

      {/* CTA */}
      <button className="pay-btn">
        Proceed to Secure Payment
      </button>

      {/* Reassurance */}
      <p className="payment-note">
        Payments are processed securely.  
        Your identity remains anonymous throughout the session.
      </p>

    </div>
  );
}

export default PaymentSession;
