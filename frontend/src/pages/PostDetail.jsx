import "../styles/postDetail.css";

function PostDetail() {
  return (
    <div className="post-detail-container">

      {/* Header */}
   <header className="post-header">
  <div className="header-left">
    <div className="brand-text">
      <h1 className="brand-name">
        🌿Serene<span>Mind</span>
      </h1>
      <h2 className="page-title">Community Support</h2>
    </div>
  </div>
</header>


      {/* Back */}
      <p className="back-link">← Back to community</p>

      {/* Main Post */}
      <div className="main-post-card">
        <p className="post-text">
          I’ve been feeling very isolated lately, even when I’m around people.
          It’s hard to explain, but it feels heavy. Has anyone felt this way?
        </p>
      </div>

      {/* Replies */}
      <section className="replies-section">
        <h3>Replies</h3>

        <div className="reply-card">
          <p>
            Yes, I’ve felt this too. You’re not alone in this feeling. Sometimes
            being around people doesn’t always mean feeling connected.
          </p>
        </div>

        <div className="reply-card">
          <p>
            I can relate. What helped me was journaling and talking to someone I
            trust, even briefly.
          </p>
        </div>

        <div className="reply-card">
          <p>
            Thank you for sharing this. It takes courage to put these feelings
            into words.
          </p>
        </div>
      </section>

      {/* Reply Input */}
      <div className="reply-input-card">
        <textarea
          placeholder="Write a supportive reply…"
        ></textarea>
        <button className="reply-btn">
  Share Support
</button>

      </div>

      {/* Note */}
      <p className="safety-note">
        Please be kind and respectful. Everyone here is anonymous and vulnerable.
      </p>

    </div>
  );
}

export default PostDetail;
