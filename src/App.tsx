/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import SkillsServices from "./components/SkillsServices";
import Showreel from "./components/Showreel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-brand-black selection:text-brand-beige">
      {/* Global Noise Overlay */}
      <div className="noise" />
      
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Cinematic Project Grid */}
        <ProjectGrid />

        {/* Showreel Section */}
        <Showreel />

        {/* Skills & Services */}
        <SkillsServices />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
