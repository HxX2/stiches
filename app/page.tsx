import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { SiGithub } from 'react-icons/si';

import { title, subtitle } from "@/consts/primitives";
import { fontMono } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { AnimatedLogo } from "@/components/animated-logo";
import { AnimatedIcons } from "@/components/animated-icons";
import { BackgroundIcons } from "@/components/background-icons";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <BackgroundIcons />
      
      <div className="mb-8 relative z-10">
        <AnimatedLogo />
      </div>
      <div className="inline-block max-w-xl text-center justify-center relative z-10">
        <span className={title()}>Make&nbsp;</span>
        <span className={title()}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          fast and reliable web experiences.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Get going with Stiches as a head start.
        </div>
      </div>

      <div className="flex gap-3 relative z-10">
        <Button 
          as="a"
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          color="default" 
          radius="full" 
          startContent={<SiGithub size={16}/>} 
          variant="shadow"
        >
          GitHub
        </Button>
      </div>

      <div className="mt-8 relative z-10">
        <AnimatedIcons />
      </div>

      <div className="mt-8 relative z-10">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span className={fontMono.className}>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
