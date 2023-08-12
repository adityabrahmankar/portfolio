import { Separator } from "@/components/ui/separator";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {

  return (
    <div className="w-full h-full md:m-auto max-w-3xl p-4">
      <div className="flex flex-col items-start justify-center gap-y-3 mt-20 ">
        <div className="flex flex-row items-center justify-center text-2xl text-white ">
          Contact
        </div>
        <Separator/>
        <ContactForm/>
      </div>
    </div>
  );
}

export default ContactPage;