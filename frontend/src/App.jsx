import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AnonymousEntry from "./pages/AnonymousEntry";
import AISupportChat from "./pages/AISupportChat";
import CommunityFeed from "./pages/CommunityFeed";
import PostDetail from "./pages/PostDetail";
import ProfessionalsDirectory from "./pages/ProfessionalsDirectory";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import PaymentSession from "./pages/PaymentSession";
import PaymentSuccess from "./pages/PaymentSuccess";
import SessionPage from "./pages/SessionPage";  


// Fallback page
function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/enter" element={<AnonymousEntry />} />

        <Route path="/ai-support" element={<AISupportChat />} />
        <Route path="/community" element={<CommunityFeed />} />
        <Route path="/community/post" element={<PostDetail />} />

        <Route path="/professionals" element={<ProfessionalsDirectory />} />
        <Route path="/professionals/profile" element={<ProfessionalProfile />} />

        <Route path="/professional/:id" element={<ProfessionalProfile />} />

        <Route path="/payment" element={<PaymentSession />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route path="/session" element={<SessionPage />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;