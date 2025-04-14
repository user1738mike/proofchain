import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProfileSetup from './Pages/ProfileSetup';
import ClaimNFT from './Pages/ClaimNFT';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/claim-nft" element={<ClaimNFT />} />
      </Routes>
    </Router>
  );
}

export default App;
