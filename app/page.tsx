import { ConsultingHero } from "@/components/landing/ConsultingHero";
import { ConsultingServices } from "@/components/landing/ConsultingServices";
import { ProductsMenu } from "@/components/landing/ProductsMenu";
import { FractionalCXO } from "@/components/landing/FractionalCXO";
import { ConsultingAbout } from "@/components/landing/ConsultingAbout";
import { ConsultingContact } from "@/components/landing/ConsultingContact";

export default function Home() {
  return (
    <>
      <ConsultingHero />
      <ConsultingServices />
      <ProductsMenu />
      <FractionalCXO />
      <ConsultingAbout />
      <ConsultingContact />
    </>
  );
}
