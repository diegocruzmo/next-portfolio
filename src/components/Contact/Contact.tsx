import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { dataContact } from "./Contact.data";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <Container>
      <div id="contact">
        <Title title="Contact" subtitle="Get In Touch 👋" />

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
          <div className="w-full">
            {dataContact.map(({ id, icon, title, subtitle }) => (
              <div
                key={id}
                className="flex flex-col items-center dark:bg-slate-800 rounded-md mb-5 p-4"
              >
                {icon}
                <p>{title}</p>
                <p className="text-slate-300 font-light">{subtitle}</p>
              </div>
            ))}
          </div>

          <div className="col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
};
