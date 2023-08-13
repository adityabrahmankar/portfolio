import { Separator } from "@/components/ui/separator";
import ContactForm from "./components/ContactForm";
import getContacts from "@/app/actions/getContacts";


const ContactPage = async () => {

  const contact = await getContacts();

  return (
    <div className="w-full h-full md:m-auto max-w-3xl p-4">
      <div className="flex flex-col items-start justify-center gap-y-3 mt-20 ">
        <div className="flex flex-row items-center justify-center text-2xl text-white ">
          Contact
        </div>
        <Separator />
        <ContactForm />
      </div>
      <div className="text-white flex space-x-5 mt-4">
        {contact?.map((contact) => (
          <div key={contact.id}>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactPage;