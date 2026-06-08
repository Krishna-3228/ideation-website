import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Tutorial from "../pages/institutions/Tutorial";
import IntegratedLearning from "../pages/institutions/IntegratedLearning";
import Abhyasika from "../pages/institutions/Abhyasika";
import TestSeries from "../pages/institutions/TestSeries";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/institutions/tutorial" element={<Tutorial />} />
        <Route path="/institutions/integrated-learning" element={<IntegratedLearning />} />
        <Route path="/institutions/abhyasika" element={<Abhyasika />} />
        <Route path="/institutions/test-series" element={<TestSeries />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
