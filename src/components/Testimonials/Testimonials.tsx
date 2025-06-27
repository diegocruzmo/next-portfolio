import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { dataTestimonials } from "./Testimonials.data";

export const Testimonials = () => {
  return (
    <Container>
      <div id="testimonials">
        <Title title="Testimonials" subtitle="What My Clients Say" />

        <Carousel className="mx-auto mt-6">
          <CarouselContent className="gap-4">
            {dataTestimonials.map(({ id, name, description, imageUrl }) => (
              <CarouselItem
                key={id}
                className="md:basis-1/3 p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-md"
              >
                <Avatar>
                  <AvatarImage src={imageUrl} alt="Profile avatar" />
                  <AvatarFallback>FN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="min-h-12 text-xl mt-4">{name}</p>
                  <p className="text-sm text-slate-400">{description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </Container>
  );
};
