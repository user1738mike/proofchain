import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProfileSetup from "./Pages/ProfileSetup";
import ClaimNFT from "./Pages/ClaimNFT";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/claim-nft" element={<ClaimNFT />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
