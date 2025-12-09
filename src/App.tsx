import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import FindUs from "./Pages/FindUs/FindUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/findus" element={<FindUs />} />
        {/* Optional: Add a route for 404 Not Found */}
        <Route path="*" element={
          <div className="w-full h-screen bg-accent2 flex items-center justify-center">
            <h1 className="font-jaro text-4xl font-bold text-accent1">404 Not Found</h1>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
