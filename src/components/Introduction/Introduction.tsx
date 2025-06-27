import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "../ui/button";

import { Container } from "../shared/Container";

export const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl mb-3">Hi, I&apos;m </h3>
        <h1 className="text-4xl font-semibold my-2 text-slate-400">
          Diego Cruz 👨‍💻
        </h1>
        <h2 className="text-2xl my-4">Fronted Developer</h2>

        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6 mx-auto">
            <Link href={"#contact"} className={buttonVariants()}>
              <Mail size={20} className="mr-2" /> Contact Me
            </Link>

            <Link
              href={"/doc/diego_cruz_cv.pdf"}
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
            >
              <Paperclip size={20} className="mr-2" /> Download CV
            </Link>
          </div>
        </div>
        <Image
          className="mt-6 rounded-full mx-auto"
          src={"/img/profile.jpg"}
          alt="profile"
          width={300}
          height={300}
        />
      </div>
    </Container>
  );
};
