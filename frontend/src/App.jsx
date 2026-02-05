import { useEffect, useState } from "react";

function App() {
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState("Initializing anonymous user...");

  // Chat state
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Community state
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [replyText, setReplyText] = useState({});

  // Load or create anonymous user
  useEffect(() => {
    const existingUser = localStorage.getItem("anonymous_user_id");

    if (existingUser) {
      setUserId(existingUser);
      setStatus("Anonymous user ready");
      fetchPosts();
    } else {
      fetch("http://127.0.0.1:8000/create-anonymous-user", {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("anonymous_user_id", data.user_id);
          setUserId(data.user_id);
          setStatus("Anonymous user created");
          fetchPosts();
        });
    }
  }, []);

  // Fetch community posts
  const fetchPosts = () => {
    fetch("http://127.0.0.1:8000/community/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  // Send chat message
  const sendMessage = () => {
    if (!message.trim()) return;

    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);
    const userMessage = message;
    setMessage("");

    fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        message: userMessage,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setChatHistory((prev) => [
          ...prev,
          { sender: "ai", text: data.bot_reply },
        ]);
      });
  };

  // Create community post
  const createPost = () => {
    if (!newPost.trim()) return;

    fetch("http://127.0.0.1:8000/community/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        content: newPost,
      }),
    })
      .then(() => {
        setNewPost("");
        fetchPosts();
      });
  };

  // Reply to a post
  const replyToPost = (postId) => {
    if (!replyText[postId]) return;

    fetch("http://127.0.0.1:8000/community/reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_id: postId,
        user_id: userId,
        content: replyText[postId],
      }),
    })
      .then(() => {
        setReplyText({ ...replyText, [postId]: "" });
        fetchPosts();
      });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>AI Anonymous Support Platform</h1>
      <p>{status}</p>
      <p><strong>Anonymous ID:</strong> {userId}</p>

      <hr />

      {/* CHAT SECTION */}
      <h2>Chat with AI</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "200px", overflowY: "auto" }}>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <strong>{chat.sender === "user" ? "You" : "AI"}:</strong> {chat.text}
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "80%" }}
      />
      <button onClick={sendMessage}>Send</button>

      <hr />

      {/* COMMUNITY SECTION */}
      <h2>Community Support</h2>

      <textarea
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Share something with the community..."
        style={{ width: "100%" }}
      />
      <button onClick={createPost}>Post</button>

      {posts.map((post) => (
        <div key={post.post_id} style={{ border: "1px solid #ddd", padding: "10px", marginTop: "10px" }}>
          <p>{post.content}</p>

          <input
            placeholder="Write a reply..."
            value={replyText[post.post_id] || ""}
            onChange={(e) =>
              setReplyText({ ...replyText, [post.post_id]: e.target.value })
            }
          />
          <button onClick={() => replyToPost(post.post_id)}>Reply</button>
        </div>
      ))}
    </div>
  );
}

export default App;
