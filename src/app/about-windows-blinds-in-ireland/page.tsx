import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Windows blinds in Ireland - Priceless Blinds",
  description:
    "Priceless Blinds is one of the trusted window blinds suppliers in Dublin, Ireland.",
};

const contentSections = [
  {
    title: "Who We Are",
    paragraphs: [
      "Priceless Blinds is a trusted window blinds supplier in Dublin, Ireland. We provide quality manufactured window blinds at affordable rates, with window covering treatments for both office and home windows. Over the years, we have built strong local trust by delivering reliable solutions that improve the look and comfort of every space.",
      "At Priceless Blinds Dublin Ireland, we focus on long-lasting, reliable, and made-to-measure window blinds for commercial and residential buildings. With a wide range of styles, finishes, and materials, our blinds are designed to look elegant, work beautifully, and fit every type and size of window.",
    ],
  },
  {
    title: "Best Value for Money",
    paragraphs: [
      "Priceless Blinds Dublin, Ireland never compromises on service, and customer satisfaction is always our priority. We offer strong value for custom window blinds, with a wide stock of Venetian Blinds, Roller Blinds, Roman Blinds, Vertical Blinds, Velux Blinds, and many other styles.",
      "We work with valued clients across Dublin, Ireland, providing commercial and residential window covering solutions. Free nationwide next-day delivery is available, and our professional team can visit your home to measure your windows accurately after your appointment booking.",
    ],
  },
  {
    title: "Where We Are?",
    paragraphs: [
      "Priceless Blinds is based in Dublin, Ireland, serving customers across the city with free window measuring and blind installation services. We also offer affordable window blinds in Dublin, along with premium doorstep delivery nationwide.",
      "You can send us the accurate measurements of the windows where you want to install perfect fit blinds, or book our team for professional measuring. From the heart of Dublin, we provide quick shipping and attractive window-covering solutions across Ireland.",
    ],
  },
  {
    title: "Contact Us for Our Brochure",
    paragraphs: [
      "Feel free to contact us with any query about the right window shades treatment. Our professional team is ready to help with clear, accurate advice and high-quality solutions.",
      "Send us an email with your contact details to receive our brochure at your doorstep. You will find reliable, durable, and affordable window blinds for both commercial and residential windows from Priceless Blinds.",
    ],
  },
];

const valueCards = [
  {
    title: "Wide Stock Available",
    icon: "stock" as const,
    text: "Choose from Venetian Blinds, Roller Blinds, Roman Blinds, Vertical Blinds, Velux Blinds, and many other styles, with a strong variety of colors, textures, and finishes.",
  },
  {
    title: "Nationwide Delivery",
    icon: "delivery" as const,
    text: "Free nationwide next-day delivery is available, with professional measuring support for customers who want a precise made-to-measure blinds service.",
  },
];

function ValueIcon({ type }: { type: "stock" | "delivery" }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,174,239,0.1)] text-[#00aeef]">
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === "stock" ? (
          <>
            <rect x="4" y="4" width="12" height="12" rx="2" fill="currentColor" />
            <path
              d="M7 8h6M7 11h4"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <path
              d="M3 6h9v8H3V6Zm9 3h3l2 2v3h-5V9Z"
              fill="currentColor"
            />
            <circle cx="7" cy="15" r="1.4" fill="currentColor" />
            <circle cx="15" cy="15" r="1.4" fill="currentColor" />
          </>
        )}
      </svg>
    </span>
  );
}

function LocationPinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[50px] w-10 text-[#00aeef]"
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0C10.6 0 3 7.6 3 17c0 12.7 17 33 17 33s17-20.3 17-33C37 7.6 29.4 0 20 0Zm0 23.2A6.2 6.2 0 1 1 20 10.8a6.2 6.2 0 0 1 0 12.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SectionHeading({
  title,
  align = "left",
}: {
  title: string;
  align?: "left" | "center";
}) {
  return (
    <h2
      className={[
        "border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[30px] font-bold leading-[40px] text-[#001825] md:text-[40px] md:leading-[48px]",
        align === "center" ? "mx-auto text-center" : "text-center lg:text-left",
      ].join(" ")}
    >
      {title}
    </h2>
  );
}

export default function AboutPage() {
  const [whoWeAre, bestValue, whereWeAre, brochure] = contentSections;

  return (
    <main>
      <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#001825] py-14 md:min-h-[430px] md:py-20">
        <Image
          src="/home/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,24,37,0.96)] via-[rgba(0,24,37,0.78)] to-[rgba(0,24,37,0.42)]" />

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 text-center md:px-12">
          <p className="mb-4 text-sm font-semibold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            Priceless Blinds Dublin
          </p>
          <h1 className="max-w-[820px] text-[36px] font-bold leading-[46px] text-white md:text-[52px] md:leading-[64px]">
            About | Windows blinds in Ireland
          </h1>
          <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-[rgba(255,255,255,0.82)] md:text-base">
            Quality manufactured, made-to-measure blinds for homes and offices
            across Dublin, Ireland.
          </p>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-24">
          <div className="flex items-start justify-center lg:justify-start">
            <SectionHeading title={whoWeAre.title} />
          </div>

          <div className="mx-auto flex max-w-[576px] flex-col gap-6 text-center text-[15px] font-normal leading-[25px] text-[#46464d] md:text-base md:leading-[26px] lg:mx-0 lg:text-left">
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mx-auto flex max-w-[896px] flex-col items-center gap-2 text-center">
            <SectionHeading title={bestValue.title} align="center" />
            <p className="text-[15px] font-normal leading-[25px] text-[#46464d] md:text-base md:leading-[26px]">
              Priceless Blinds Dublin, Ireland will never compromise in
              services, and customer satisfaction is our top priority.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.7fr_0.82fr]">
            <div className="relative min-h-[340px] overflow-hidden rounded-lg border border-[rgba(199,198,206,0.3)] shadow-[0_12px_30px_rgba(14,20,43,0.08)] sm:min-h-[460px] lg:min-h-[560px]">
              <Image
                src="/about/about-img1.webp"
                alt="Made to Measure Excellence"
                fill
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,24,37,0.8)] to-[rgba(0,24,37,0)]" />
              <h3 className="absolute bottom-8 left-6 right-6 text-[26px] font-normal leading-9 text-white md:bottom-10 md:left-8 md:text-[28px]">
                Made to Measure Excellence
              </h3>
            </div>

            <div className="grid gap-6">
              {valueCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-7 text-center shadow-[0_8px_24px_rgba(14,20,43,0.06)] md:p-8 lg:text-left"
                >
                  <span className="mx-auto block w-fit lg:mx-0">
                    <ValueIcon type={card.icon} />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold uppercase leading-5 tracking-[0.7px] text-[#001825]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-normal leading-6 text-[#46464d] md:text-base">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
          <div className="contents lg:flex lg:flex-col lg:justify-center lg:gap-6 lg:text-left">
            <div className="order-1 text-center lg:text-left">
              <SectionHeading title={whereWeAre.title} />
            </div>
            <div className="order-3 flex flex-col gap-5 text-center text-[15px] font-normal leading-[25px] text-[#46464d] md:text-base md:leading-[26px] lg:text-left">
              {whereWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative order-2 flex min-h-[300px] items-center justify-center overflow-hidden rounded-lg border border-[rgba(199,198,206,0.3)] bg-[#eef2f6] shadow-[0_10px_28px_rgba(14,20,43,0.07)] md:min-h-[384px] lg:order-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,24,37,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,24,37,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
            <div className="relative flex flex-col items-center gap-2">
              <LocationPinIcon />
              <h3 className="text-[28px] font-normal leading-9 text-[#001825]">
                Dublin, Ireland
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-6 shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeading title={brochure.title} />
          </div>
          <div className="flex flex-col gap-5 text-center text-[15px] font-normal leading-[25px] text-[#46464d] md:text-base md:leading-[26px] lg:text-left">
            {brochure.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
