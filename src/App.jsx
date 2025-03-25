import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AntistressDiary from './components/AntistressDiary/AntistressDiary'
import AntistressVoid from './components/AntistressVoid/AntistressVoid'
import ScrollToTop from './components/Shared/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<AntistressDiary />} />
        <Route path="/void" element={<AntistressVoid />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
