import Hero from "./comopnents/hero/Hero";
import OfficeInteriors from "./comopnents/officeInteriors/OfficeInteriors";
import CafeInteriors from "./comopnents/cafeInteriors/CafeInteriors";
import Architechrural from "./comopnents/architechtural/Architechrural";
import Design from "./comopnents/design/Design";
import ModularFurniture from "./comopnents/modular-furniture/ModularFurniture";
import Testimonials from "./comopnents/testimonials/Testimonials";
import ContactForm from "./comopnents/contact-form/ContactForm";

export default function Views() {
  return (
    <>
      <Hero />
      <OfficeInteriors />
      <CafeInteriors />
      <Architechrural />
      <Design />
      <ModularFurniture />
      <Testimonials />
      <ContactForm />
    </>
  );
}
