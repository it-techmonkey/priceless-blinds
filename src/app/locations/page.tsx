import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Locations - Priceless Blinds",
  description:
    "Priceless Blinds is based in Dublin, Ireland and provides quality window blinds, measuring, fitting, and delivery across Dublin and surrounding areas.",
};

const primaryAreas = [
  "Drogheda",
  "Balbriggan",
  "Skerries",
  "Lusk",
  "Rush",
  "Donabate",
  "Swords",
];

const dublinAreas = [
  "Tallaght",
  "Sandymount",
  "Poppintree",
  "Mulhuddart",
  "Howth",
  "Donaghmede",
  "Cabra",
  "Ballyfermot",
  "Shankill",
  "Lucan",
  "Coolock",
  "Castleknock",
  "Blanchardstown",
  "Blackrock",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[30px] font-bold leading-[40px] text-[#001825] md:text-[40px] md:leading-[48px]">
      {children}
    </h2>
  );
}

function AreaCard({ area }: { area: string }) {
  return (
    <div className="flex min-h-12 items-center justify-center rounded-[2px] border border-[rgba(199,198,206,0.3)] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(14,20,43,0.03)] hover:border-[rgba(0,174,239,0.28)] hover:shadow-[0_8px_20px_rgba(14,20,43,0.06)]">
      <span className="text-center text-sm font-semibold leading-5 tracking-[0.35px] text-[#46464d]">
        {area}
      </span>
    </div>
  );
}

export default function LocationsPage() {
  return (
    <main>
      <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#001825] px-5 py-16 md:min-h-[440px] md:px-12 md:py-20">
        <Image
          src="/home/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[rgba(0,24,37,0.66)]" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-4 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            Priceless Blinds Dublin
          </p>
          <h1 className="text-[40px] font-bold leading-[50px] text-white md:text-[56px] md:leading-[64px]">
            Our Locations
          </h1>
          <p className="mt-5 max-w-[720px] text-[16px] leading-7 text-[rgba(255,255,255,0.88)] md:text-lg">
            Based in the heart of Dublin, we provide quality window blinds,
            measuring, fitting, and support across Dublin and nearby areas.
          </p>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <SectionHeading>Our Locations</SectionHeading>
          </div>

          <div className="flex flex-col gap-5 text-center text-[15px] leading-7 text-[#46464d] md:text-base lg:text-left">
            <p>
              Priceless Blinds is situated in the core heart of Ireland,
              Dublin, where you can easily get in touch with us for any query.
              We provide brilliant services across Dublin, with same-day support
              available where possible, and we have built a strong reputation
              among clients for quality window blinds solutions.
            </p>
            <p>
              We are widely known across Dublin, Ireland for dependable service
              and quality blinds for home and commercial windows. If you are
              based in Dublin, you can contact or visit us to learn more about
              window coverings for residential and commercial buildings.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
          <div className="mx-auto max-w-[820px] text-center">
            <SectionHeading>Areas We Cover</SectionHeading>
            <p className="mt-5 text-[15px] leading-7 text-[#46464d] md:text-base">
              We cover Dublin 1 to Dublin 24 and the surrounding locations
              listed below.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-6 shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-8">
              <h3 className="mb-5 text-center text-[24px] font-bold leading-8 text-[#001825] lg:text-left">
                Surrounding Areas
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {primaryAreas.map((area) => (
                  <AreaCard key={area} area={area} />
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-6 shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-8">
              <h3 className="mb-5 text-center text-[24px] font-bold leading-8 text-[#001825] lg:text-left">
                Dublin Areas
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {dublinAreas.map((area) => (
                  <AreaCard key={area} area={area} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-7 shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <SectionHeading>Best Price Possible</SectionHeading>
          </div>
          <div className="flex flex-col items-center gap-5 text-center text-[15px] leading-7 text-[#46464d] md:text-base lg:items-start lg:text-left">
            <p>
              Found a cheaper quote for Priceless Blinds elsewhere? We are proud
              to offer the best price possible, so we will match any cheaper
              quote for the same service. To find out more about our Priceless
              Blinds services, get in touch with us today.
            </p>
            <p>
              There are several reasons to choose Priceless Blinds Dublin,
              Ireland. We are professional and reliable solution providers with
              a wide variety of window blinds, accurate measuring, fitting
              options, years of experience, and doorstep delivery across Dublin.
            </p>
            <Link
              href="/contact"
              className="mt-2 flex min-h-12 items-center justify-center rounded-[2px] bg-[#00aeef] px-8 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#009bd6]"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
