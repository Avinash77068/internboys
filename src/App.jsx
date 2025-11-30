// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./page/Contact/Contact";
import About from "./page/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          {/* Add catch-all route for section links */}
          <Route path=":section" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
