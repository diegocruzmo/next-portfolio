import Link from "next/link";
import { Container } from "../shared/Container";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <Container>
      <div className="md:flex md:justify-between ">
        <div>
          <h4 className="text-2xl font-bold my-6 md:my-0"> Diego Cruz</h4>
        </div>
        <div className="px-2 flex flex-col md:flex-row justify-between md:gap-8 items-center text-slate-500">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#testimonials">Testomonials</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
      <Separator className="m-5" />
      <div className="text-slate-200">@2025 Diego Cruz</div>
    </Container>
  );
};
