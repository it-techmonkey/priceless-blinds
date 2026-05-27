import Image from "next/image";
import Link from "next/link";
import { ImageSlideshow } from "./image-slideshow";

type ContentSection = {
  title: string;
  body: string[];
};

type FeaturedContentSection = {
  image: { src: string; alt: string };
  imagePosition?: "left" | "right";
  sections: ContentSection[];
};

export type BlindDetailData = {
  title: string;
  eyebrow: string;
  description: string;
  introTitle?: string;
  heroImage: string;
  detailImage?: { src: string; alt: string };
  intro: string[];
  slideshowImages: { src: string; alt: string }[];
  sections: ContentSection[];
  featuredSections?: FeaturedContentSection[];
  warrantyTitle?: string;
  testimonial?: {
    quote: string;
    author: string;
  };
  warranty?: string[];
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[30px] font-bold leading-[40px] text-[#001825] md:text-[40px] md:leading-[48px]">
      {children}
    </h2>
  );
}

export function BlindDetailTemplate({ data }: { data: BlindDetailData }) {
  const [overviewSection, ...remainingSections] = data.sections;
  const featurePoints = remainingSections.slice(0, 4);
  const detailSections = remainingSections.slice(4);
  const detailImage = data.detailImage ?? data.slideshowImages[0];
  const featuredSections =
    data.featuredSections ??
    (detailSections.length
      ? [{ image: detailImage, imagePosition: "right" as const, sections: detailSections }]
      : []);

  return (
    <main>
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#001825] px-5 py-16 md:min-h-[520px] md:px-12 lg:min-h-[580px]">
        <Image
          src={data.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-[rgba(0,24,37,0.56)]" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-4 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            {data.eyebrow}
          </p>
          <h1 className="max-w-[900px] text-[40px] font-bold leading-[50px] text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.06),0_4px_1.5px_rgba(0,0,0,0.07)] md:text-[56px] md:leading-[64px]">
            {data.title}
          </h1>
          <p className="mt-4 max-w-[720px] text-[16px] font-normal leading-7 text-[rgba(255,255,255,0.9)] md:text-lg">
            {data.description}
          </p>

          <div className="mt-8 flex w-full max-w-[520px] flex-col gap-3 sm:flex-row">
            <a
              href="tel:1800911949"
              className="flex min-h-12 flex-1 items-center justify-center rounded-[2px] bg-[#00aeef] px-7 text-sm font-semibold leading-5 tracking-[0.7px] text-white hover:bg-[#009bd6] hover:shadow-[0_8px_18px_rgba(0,174,239,0.22)]"
            >
              CALL 1800 911 949
            </a>
            <Link
              href="/contact"
              className="flex min-h-12 flex-1 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.08)] px-7 text-sm font-semibold leading-5 tracking-[0.7px] text-white hover:border-white hover:bg-[rgba(255,255,255,0.14)]"
            >
              BOOK CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <SectionHeading>{data.introTitle ?? data.title}</SectionHeading>
          </div>

          <div className="flex flex-col gap-5 text-center text-[15px] leading-[25px] text-[#46464d] md:text-base md:leading-[26px] lg:text-left">
            {data.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <SectionHeading>Recent Installations</SectionHeading>
            <p className="max-w-[680px] text-[15px] leading-7 text-[#46464d] md:text-base">
              A closer look at our fitted blinds and the finish customers can
              expect from Priceless Blinds.
            </p>
          </div>

          <ImageSlideshow images={data.slideshowImages} />
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mx-auto max-w-[880px] text-center">
            <SectionHeading>{overviewSection.title}</SectionHeading>
            <div className="mt-6 flex flex-col gap-4 text-[15px] leading-6 text-[#46464d] md:text-base">
              {overviewSection.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featurePoints.map((section, index) => (
              <article
                key={section.title}
                className="rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-6 text-center shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-8 lg:text-left"
              >
                <div className="flex justify-center lg:justify-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(0,174,239,0.1)] text-sm font-bold leading-5 text-[#00aeef]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-[24px] font-bold leading-8 text-[#001825] md:text-[28px] md:leading-9">
                  {section.title}
                </h3>
                <div className="mt-4 flex flex-col gap-4 text-[15px] leading-6 text-[#46464d] md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {featuredSections.map((featureSection, index) => {
        const isImageLeft = featureSection.imagePosition === "left";

        return (
          <section
            key={`${featureSection.image.src}-${index}`}
            className="border-t border-[rgba(199,198,206,0.3)] bg-[#dff5fb]"
          >
            <div className="grid min-h-[620px] lg:grid-cols-2">
              <div
                className={[
                  "flex items-center px-5 py-14 md:px-12 md:py-20",
                  isImageLeft
                    ? "lg:order-2 lg:pl-12 lg:pr-[max(3rem,calc((100vw-1280px)/2))]"
                    : "lg:pl-[max(3rem,calc((100vw-1280px)/2))] lg:pr-12",
                ].join(" ")}
              >
                <div className="w-full max-w-[720px] text-center lg:text-left">
                  <span className="text-xs font-bold uppercase leading-4 tracking-[1.4px] text-[#00aeef]">
                    Made to measure service
                  </span>
                  <div className="mt-6 flex flex-col gap-9">
                    {featureSection.sections.map((section) => (
                      <article key={section.title}>
                        <h2 className="text-[28px] font-bold leading-9 text-[#001825] md:text-[32px] md:leading-[42px]">
                          {section.title}
                        </h2>
                        <div className="mt-4 flex flex-col gap-4 text-[15px] leading-6 text-[#263143] md:text-base md:leading-[26px]">
                          {section.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={[
                  "relative min-h-[360px] lg:min-h-[620px]",
                  isImageLeft ? "lg:order-1" : "",
                ].join(" ")}
              >
                <Image
                  src={featureSection.image.src}
                  alt={featureSection.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  className={[
                    "absolute inset-0 via-[rgba(223,245,251,0.18)] to-transparent lg:block",
                    isImageLeft
                      ? "bg-gradient-to-l from-[#dff5fb]"
                      : "bg-gradient-to-r from-[#dff5fb]",
                  ].join(" ")}
                />
              </div>
            </div>
          </section>
        );
      })}

      {data.testimonial || data.warranty ? (
        <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 lg:grid-cols-2">
            {data.testimonial ? (
              <div className="rounded-lg border border-[rgba(199,198,206,0.3)] bg-[#001825] p-7 text-center shadow-[0_12px_30px_rgba(14,20,43,0.12)] md:p-9 lg:text-left">
                <p className="text-[24px] font-normal italic leading-9 text-white md:text-[28px] md:leading-10">
                  &quot;{data.testimonial.quote}&quot;
                </p>
                <p className="mt-5 text-sm font-semibold uppercase leading-5 tracking-[1.4px] text-[rgba(255,255,255,0.76)]">
                  - {data.testimonial.author}
                </p>
              </div>
            ) : null}

            {data.warranty ? (
              <div className="rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-7 text-center shadow-[0_8px_24px_rgba(14,20,43,0.05)] md:p-9 lg:text-left">
                <h2 className="text-[28px] font-bold leading-9 text-[#001825]">
                  {data.warrantyTitle ?? data.title}
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-[15px] leading-6 text-[#46464d] md:text-base">
                  {data.warranty.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/ireland-blinds-quality-blinds-in-dublin"
                    className="flex min-h-12 items-center justify-center rounded-[2px] border-2 border-[#00aeef] bg-white px-5 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-[#00aeef] hover:bg-[#f0fbff]"
                  >
                    VIEW OTHER BLIND TYPES
                  </Link>
                  <Link
                    href="/contact"
                    className="flex min-h-12 items-center justify-center rounded-[2px] bg-[#00aeef] px-5 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#009bd6]"
                  >
                    BOOK A FREE CONSULTATION
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </main>
  );
}
