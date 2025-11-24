import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modules from "./pages/Modules";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import VideoModulePlayer from "./components/VideoModulePlayer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/modules" element={<Modules />} />
        <Route path="/videos" element={<VideoModulePlayer />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
