import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/common/Hero";
import HowItWorks from "../../components/common/HowItWorks";
import Agents from "../../components/common/Agents";
import WhoWeHelp from "../../components/common/WhoWeHelp";
import Features from "../../components/common/Features";
import DashboardPreview from "../../components/common/DashboardPreview";
import Footer from "../../components/layout/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Agents />
      <WhoWeHelp />
      <Features />
      <DashboardPreview />
      <Footer />
    </>
  );
}

export default LandingPage;