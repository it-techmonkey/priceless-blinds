import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Before and After Blinds - Priceless Blinds",
  description:
    "Before and After Blinds from Priceless Blinds Ireland. See how made-to-measure blinds can change the look, feel, and ambiance of a room.",
};

const transformations = [
  {
    before: "/before-after/before-1.webp",
    after: "/before-after/after-1.webp",
  },
  {
    before: "/before-after/before-2.webp",
    after: "/before-after/after-2.webp",
  },
  {
    before: "/before-after/before-3.webp",
    after: "/before-after/after-3.webp",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-center text-[30px] font-bold leading-[40px] text-[#001825] md:text-[40px] md:leading-[48px]">
      {children}
    </h2>
  );
}

export default function BeforeAndAfterPage() {
  return (
    <main>
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#001825] px-5 py-16 md:min-h-[460px] md:px-12 md:py-20">
        <Image
          src="/before-after/before-and-after-hro-img.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[rgba(0,24,37,0.62)]" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-4 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            Priceless Blinds gallery
          </p>
          <h1 className="max-w-[820px] text-[40px] font-bold leading-[50px] text-white md:text-[56px] md:leading-[64px]">
            Before and After Blinds
          </h1>
          <p className="mt-5 max-w-[720px] text-[16px] leading-7 text-[rgba(255,255,255,0.88)] md:text-lg">
            Browse our before and after gallery to see how Priceless Blinds can
            change the ambiance, look, and feel of a room.
          </p>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10">
          <div className="mx-auto flex max-w-[820px] flex-col items-center gap-4 text-center">
            <p className="text-[15px] leading-7 text-[#46464d] md:text-base">
              Browse our gallery of before and afters below. Each example shows
              how professionally measured and fitted window blinds can make a
              room feel cleaner, brighter, and more complete.
            </p>
          </div>

          <div className="grid w-full gap-8">
            {transformations.map((item) => (
              <article
                key={item.before}
                className="overflow-hidden rounded-lg border border-[rgba(199,198,206,0.35)] bg-white shadow-[0_12px_30px_rgba(14,20,43,0.06)]"
              >
                <div className="grid gap-px bg-[rgba(199,198,206,0.35)] lg:grid-cols-2">
                  <div className="bg-white">
                    <div className="flex min-h-12 items-center px-5">
                      <h3 className="text-sm font-bold uppercase leading-5 tracking-[1.2px] text-[#001825]">
                        Before
                      </h3>
                    </div>
                    <div className="relative h-[260px] bg-[#e2e2e2] sm:h-[340px] lg:h-[420px]">
                      <Image
                        src={item.before}
                        alt="Before blinds installation"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-white">
                    <div className="flex min-h-12 items-center justify-between px-5">
                      <h3 className="text-sm font-bold uppercase leading-5 tracking-[1.2px] text-[#001825]">
                        After
                      </h3>
                      <span className="text-xs font-semibold uppercase leading-4 tracking-[0.8px] text-[#00aeef]">
                        Priceless Blinds
                      </span>
                    </div>
                    <div className="relative h-[260px] bg-[#e2e2e2] sm:h-[340px] lg:h-[420px]">
                      <Image
                        src={item.after}
                        alt="After blinds installation"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-7 shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <SectionHeading>Priceless Blinds Dublin, Ireland</SectionHeading>
          </div>
          <div className="flex flex-col items-center gap-5 text-center text-[15px] leading-7 text-[#46464d] md:text-base lg:items-start lg:text-left">
            <p>
              Priceless Blinds Dublin, Ireland is a professional and reliable
              solution provider across Dublin. We offer a wide variety of
              quality manufactured window blinds with accurate measuring,
              perfect fitting options, and dependable doorstep delivery.
            </p>
            <p>
              Book your appointment with Priceless Blinds in Dublin, Ireland,
              and our professional team will visit your property to measure your
              windows and help you choose the right blinds for your space.
            </p>
            <Link
              href="/contact"
              className="mt-2 flex min-h-12 items-center justify-center rounded-[2px] bg-[#00aeef] px-8 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#009bd6]"
            >
              BOOK A FREE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
