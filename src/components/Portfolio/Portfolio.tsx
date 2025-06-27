import Image from "next/image";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { dataPortfolio } from "./Portfolio.data";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const Portfolio = () => {
  return (
    <Container>
      <div id="portfolio">
        <Title title="Portfolio" subtitle="My Projects"></Title>

        <div className="grid md:grid-cols-2 gap-14 mt-4">
          {dataPortfolio.map(({ id, title, image, urlGithub, urlDemo }) => (
            <div key={id}>
              <h3 className="text-xl font-light mb-2 text-slate-200">
                {title}
              </h3>

              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="rounded-md w-full"
              />

              <div className="flex gap-4 mt-4">
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={urlGithub}
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  className={buttonVariants()}
                  href={urlDemo}
                  target="_blank"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
