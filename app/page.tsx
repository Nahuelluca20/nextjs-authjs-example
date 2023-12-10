import Image from "next/image";
import Link from "next/link";

import LayoutContainer from "@/components/layout-container";
import NextAuthImage from "@/assets/next-auth.jpg";
import {Button} from "@/components/ui/button";

export default function page() {
  return (
    <LayoutContainer className="flex-col gap-10 min-h-screen items-center flex flex-wrap  justify-center">
      <h1 className="text-4xl md:text-6xl max-w-[600px] text-center font-extrabold">
        Welcome to a small example of NextJS 14 + AuthJS
      </h1>
      <div>
        <div className="flex gap-5 justify-center">
          <Button asChild>
            <Link href={"/public"}>Public Route</Link>
          </Button>

          <Button asChild variant={"destructive"}>
            <Link href={"/protected"}>Privated Route</Link>
          </Button>
        </div>
        <Image
          alt="Nextjs + Authjs / NextAuth"
          className="w-full lg:w-[600px] rounded-xl"
          src={NextAuthImage}
        />
      </div>
    </LayoutContainer>
  );
}
