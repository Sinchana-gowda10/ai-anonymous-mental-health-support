import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AnonymousEntry from "./pages/AnonymousEntry";
import AISupportChat from "./pages/AISupportChat";
import CommunityFeed from "./pages/CommunityFeed";
import PostDetail from "./pages/PostDetail";
import ProfessionalsDirectory from "./pages/ProfessionalsDirectory";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import PaymentSession from "./pages/PaymentSession";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/enter" element={<AnonymousEntry />} />
      <Route path="/ai-support" element={<AISupportChat />} />
      <Route path="/community" element={<CommunityFeed />} />
      <Route path="/community/post" element={<PostDetail />} />
      <Route path="/professionals" element={<ProfessionalsDirectory />} />
      <Route path="/professionals/profile" element={<ProfessionalProfile />} />
      <Route path="/payment" element={<PaymentSession />} />
    </Routes>
  );
}

export default App;
