import { BadgeCheck } from "lucide-react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { dataExperience } from "./Experience.data";
import { Progress } from "../ui/progress";

export const Experience = () => {
  return (
    <Container>
      <div id="experience">
        <Title title="Experience" subtitle="My Skills"></Title>

        <div className="grid sm:grid-cols-2 gap-8 mt-5">
          {dataExperience.map(({ id, title, experience }) => (
            <div key={id} className="p-6 rounded-md border border-slate-600">
              <h3 className="text-xl text-center font-semibold mb-4">
                {title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {experience.map(({ name, subtitle, value }) => (
                  <div key={name} className="my-4">
                    <p className="flex gap-2 mb-2">
                      <BadgeCheck />
                      {name}
                    </p>
                    <p className="text-sm text-slate-400">{subtitle}</p>
                    <Progress value={value} className="w-[60%] mt-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
