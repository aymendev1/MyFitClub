import MainSection from "./components/mainSection/hero.jsx";
import ProgramsSection from "./components/ProgramsSection/Programs.jsx";
import ReasonSection from "./components/ReasonSection/Reason.jsx";
import PlansSection from "./components/plansSection/plans.jsx";
import TestimonialSection from "./components/TestimonialSection/Testimonial.jsx";
import JoinSection from "./components/JoinSection/join.jsx";
import Footer from "./components/Footer/footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainSection />
      <ProgramsSection />
      <ReasonSection />
      <PlansSection />
      <TestimonialSection />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;
