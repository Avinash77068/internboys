// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./page/Contact/Contact";
import About from "./page/about/About";
import ApplicationForm from "./components/applicationForm/ApplicationForm";
import GitRoadmap from "./page/github/GitRoadmap";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path=":section" element={<Home />} />
          <Route path="/github" element={<GitRoadmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
