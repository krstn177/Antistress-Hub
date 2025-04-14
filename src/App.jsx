import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import AntistressDiary from './components/AntistressDiary/AntistressDiary'
import AntistressVoid from './components/AntistressVoid/AntistressVoid'
import Terms from './components/Legal/Terms'
import Privacy from './components/Legal/Privacy'
import ScrollToTop from './components/Shared/ScrollToTop'
import KoFiButton from './components/Shared/KoFiButton'

function AppContent() {
  const location = useLocation();
  const isLegalPage = location.pathname === '/terms' || location.pathname === '/privacy';

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<AntistressDiary />} />
        <Route path="/void" element={<AntistressVoid />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {!isLegalPage && <KoFiButton />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
