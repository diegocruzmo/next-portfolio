import Image from "next/image";

import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { dataAbout } from "./About.data";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const dataSlider = [
  {
    id: 1,
    url: "/img/slider-1.jpg",
  },
  {
    id: 2,
    url: "/img/slider-2.jpg",
  },
  {
    id: 3,
    url: "/img/slider-3.jpg",
  },
  {
    id: 4,
    url: "/img/slider-4.jpg",
  },
];

export const About = () => {
  return (
    <Container>
      <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about">
        <Title title="About me" subtitle="More about me" />

        <div className="grid lg:grid-cols-2">
          <div className="py-12 md:py-0 flex items-center justify-center">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full max-w-xs h-fit"
            >
              <CarouselContent className="-mt-1 h-[200px]">
                {dataSlider.map(({ id, url }) => (
                  <CarouselItem key={id}>
                    <div className="flex items-center justify-center">
                      <Image
                        src={url}
                        alt="Image"
                        width={400}
                        height={500}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="cursor-pointer" />
              <CarouselNext className="cursor-pointer" />
            </Carousel>
          </div>

          <div>
            <div className="grid md:grid-cols-3 mt-7 gap-4">
              {dataAbout.map(({ id, name, icon, description }) => (
                <div
                  key={id}
                  className="border border-white-10 rounded-xl p-4 shadow-sm shadow-slate-100 dark:bg-slate-800"
                >
                  {icon}
                  <p className="my-2">{name}</p>
                  <p className="text-gray-400 font-light">{description}</p>
                </div>
              ))}
            </div>
            <p className="my-8 text-justify text-md font-light text-slate-400">
              Creative, disciplined, and responsible with over 5 years of
              experience in web development. I enjoy working as part of a team
              and aim to continue growing both personally and professionally. I
              seek to join an organization that allows me to expand my knowledge
              and skills while contributing to its growth with my expertise.
            </p>
            <Button className="cursor-pointer">
              <Phone />
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
