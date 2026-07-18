import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { AssignmentsPage } from "./pages/AssignmentsPage";
import { HomePage } from "./pages/HomePage";
import { SummaryPage } from "./pages/SummaryPage";

export default function App() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  return (
    <>
      <a className="skip-link" href="#page-content">Đi đến nội dung chính</a>
      <ScrollProgress />
      <Navbar />
      <div id="page-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/assignments" element={<AssignmentsPage />} />
              <Route path="/summary" element={<SummaryPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
