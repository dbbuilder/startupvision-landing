import { BentoHero } from "@/components/landing/BentoHero";
import { JourneyTimeline } from "@/components/landing/JourneyTimeline";
import { EntryPoints } from "@/components/landing/EntryPoints";
import { HumanPlusAI } from "@/components/landing/HumanPlusAI";
import { BentoAbout } from "@/components/landing/BentoAbout";
import { BentoServices } from "@/components/landing/BentoServices";
import { ContactForm } from "@/components/landing/ContactForm";

export default function Home() {
  return (
    <>
      <BentoHero />
      <div id="journey">
        <JourneyTimeline />
      </div>
      <EntryPoints />
      <HumanPlusAI />
      <BentoAbout />
      <BentoServices />
      <ContactForm />
    </>
  );
}
