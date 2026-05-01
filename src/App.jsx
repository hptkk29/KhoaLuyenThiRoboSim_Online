import TopCountdownBar from './components/TopCountdownBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Solution from './components/Solution';
import Courses from './components/Courses';
import Roadmap from './components/Roadmap';
import Results from './components/Results';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <>
      {/* Bar đếm ngược — z-index cao nhất, fixed top */}
      <TopCountdownBar />

      {/* Header sticky — dưới TopCountdownBar */}
      <Header />

      <main id="main-content">
        <Hero />       {/* Section 1 */}
        <Pain />       {/* Section 2 */}
        <Solution />   {/* Section 3 */}
        <Courses />    {/* Section 4 — R1 vs R2 */}
        <Roadmap />    {/* Section 5 — 18 buổi 3 chặng */}
        <Results />    {/* Section 6 — Kết quả thi thực tế */}
        <FinalCTA />   {/* Section 7 — CTA cuối (đặt TRƯỚC FAQ) */}
        <FAQ />        {/* Section 8 — FAQ (đặt SAU CTA cuối) */}
      </main>

      <Footer />

      {/* Floating CTA buttons — fixed bottom-right */}
      <FloatingButtons />
    </>
  );
}
