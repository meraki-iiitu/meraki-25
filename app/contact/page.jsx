import Card from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="flex h-screen md:bg-[url('/images/backgrounds/contact.jpeg')] bg-[url('/images/backgrounds/contact.jpg')] bg-cover bg-top md:bg-center">
      <div className="relative ">
        <Card />
        <div className="absolute w-[50vw] z-50">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
