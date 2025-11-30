// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./page/Contact/Contact";
import About from "./page/about/About";
import ApplicationForm from "./components/applicationForm/ApplicationForm";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
