import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { UseCases } from "@/sections/UseCases";
import { Demo } from "@/sections/Demo";
import { Tools } from "@/sections/Tools";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <UseCases />
        <Demo />
        <Tools />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
