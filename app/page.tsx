import { Hero } from "@/components/landing/Hero";
import { JourneyTimeline } from "@/components/landing/JourneyTimeline";
import { EntryPoints } from "@/components/landing/EntryPoints";
import { HumanPlusAI } from "@/components/landing/HumanPlusAI";
import { About } from "@/components/landing/About";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { ContactForm } from "@/components/landing/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="journey">
        <JourneyTimeline />
      </div>
      <EntryPoints />
      <HumanPlusAI />
      <About />
      <div id="services">
        <ServicesGrid />
      </div>
      <ContactForm />
    </>
  );
}
