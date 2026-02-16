import "../styles/community.css";
import { useNavigate } from "react-router-dom";

function CommunityFeed() {
  const navigate = useNavigate();

  return (
    <div className="community-container">

      {/* Header */}
      <header className="community-header">
        <div>
          <h1 className="brand-name">
            🌿Serene<span>Mind</span>
          </h1>
          <h2 className="community-title">Community Support</h2>
          <p className="community-subtitle">
            A shared space for anonymous support and understanding
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="community-intro">
        <p>
          This is a shared space where people support each other anonymously.
          You can read, reflect, or respond when you feel ready.
        </p>
      </section>

      {/* Create Post */}
      <div className="create-post-card">
        <p className="create-post-text">
          Share something with the community......
        </p>

        {/* ✅ NAVIGATION */}
        <button
          className="secondary-btn"
          onClick={() => navigate("/community/post")}
        >
          Write a post
        </button>
      </div>

      {/* Posts Feed */}
      <div className="posts-feed">

        <div className="post-card">
          <p className="post-content">
            I’ve been feeling very isolated lately, even when I’m around people.
            Has anyone felt this way before?
          </p>
          <div className="post-actions">
            <span>💬 3 replies</span>

            {/* ✅ NAVIGATION */}
            <button
              className="text-btn"
              onClick={() => navigate("/community/post")}
            >
              View replies
            </button>
          </div>
        </div>

        <div className="post-card">
          <p className="post-content">
            I’m trying to manage anxiety during exams. Any small habits that
            helped you cope?
          </p>
          <div className="post-actions">
            <span>💬 5 replies</span>

            {/* ✅ NAVIGATION */}
            <button
              className="text-btn"
              onClick={() => navigate("/community/post")}
            >
              View replies
            </button>
          </div>
        </div>

        <div className="post-card">
          <p className="post-content">
            Today was a little better than yesterday. Just wanted to say that.
          </p>
          <div className="post-actions">
            <span>💬 1 reply</span>

            {/* ✅ NAVIGATION */}
            <button
              className="text-btn"
              onClick={() => navigate("/community/post")}
            >
              View replies
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default CommunityFeed;
