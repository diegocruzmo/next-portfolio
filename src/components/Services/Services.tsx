import { Check } from "lucide-react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { dataServices } from "./Services.data";

export const Services = () => {
  return (
    <Container>
      <div id="services">
        <Title title="Services" subtitle="What I Offer" />

        <div className="grid lg:grid-cols-3 gap-4 mt-7">
          {dataServices.map(({ id, title, icon, features }) => (
            <div
              key={id}
              className="rounded-md border-2 border-slate-600 p-6 dark:bg-slate-800 h-fit"
            >
              <h4 className="mb-4 text-xl flex gap-2">
                {icon} {title}
              </h4>
              <ul>
                {features.map(({ name }, index) => (
                  <li key={index} className="flex gap-3 mb-3">
                    <Check size={20} />
                    <p className="text-sm font-light">{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
