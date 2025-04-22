import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollProgress from "./components/magicui/ScrollProgress";
import Home from "./Pages/Home";
import ProfileSetup from "./Pages/ProfileSetup";
import WorkspaceSetup from "./Pages/WorkspaceSetup";
import ClaimNFT from "./Pages/ClaimNFT";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollProgress />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/workspace-setup"
            element={
              <ProtectedRoute>
                <WorkspaceSetup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile-setup"
            element={
              <ProtectedRoute>
                <ProfileSetup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/claim-nft"
            element={
              <ProtectedRoute>
                <ClaimNFT />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
