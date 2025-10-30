import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Empowering&nbsp;</span>
        <span className={title({ color: "violet" })}>Health&nbsp;</span>
        <br />
        <span className={title()}>Through Knowledge and Care.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Expert medical consultations, trusted health articles, and online
          wellness courses — all in one place.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Book Consultation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
        >
          <GithubIcon size={20} />
          Visit Website
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Dr. Iwula’s Health Platform.
          </span>
        </Snippet>
      </div>
    </section>
  );
}
