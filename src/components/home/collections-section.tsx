import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Wooden Blinds",
    href: "/wooden-blinds-in-dublin-ireland",
    image: "/home/wooden-blind.webp",
    description:
      "High-quality wooden blinds made for Dublin homes and offices, with a warm finish and a precise fit for different window types.",
  },
  {
    title: "Roller Blinds",
    href: "/roller-blinds-dublin-ireland",
    image: "/home/roller-blinds.webp",
    description:
      "Practical roller blinds, including blackout options, supplied with free window measuring and professional fitting.",
  },
  {
    title: "Roman Blinds",
    href: "/roman-blinds-in-dublin-ireland",
    image: "/home/roman-blinds.webp",
    description:
      "Quality fabric Roman Blinds made to the right size for residential and commercial windows.",
  },
  {
    title: "Vertical Blinds",
    href: "/vertical-blinds-in-dublin-ireland",
    image: "/home/vertical-blinds.webp",
    description:
      "Elegant vertical blinds manufactured with quality materials and fitted neatly for privacy and daylight control.",
  },
  {
    title: "Vision Blinds",
    href: "/vision-blinds-in-dublin-ireland",
    image: "/home/vision-blinds.webp",
    description:
      "Day and night Vision blinds made with quality materials for flexible privacy and light control.",
  },
  {
    title: "Metal Venetian Blinds",
    href: "/metal-venetian-blinds-in-dublin",
    image: "/home/metal-venetian.webp",
    description:
      "Affordable, lightweight Metal Venetian Blinds in Dublin, ideal for clean styling and easy light adjustment.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[9.33px] w-[9.33px] shrink-0"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 5h7M5.5 2l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CollectionsSection() {
  return (
    <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] py-14 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 md:items-start md:px-12">
        <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-center text-[30px] font-bold leading-[38px] text-[#001825] md:text-4xl md:leading-[44px]">
          Explore Our Collections
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((item) => (
            <article
              key={item.href}
              className="flex h-full flex-col overflow-hidden rounded-[2px] border border-[rgba(199,198,206,0.3)] bg-white p-px shadow-[0_4px_14px_rgba(14,20,43,0.04)] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(14,20,43,0.1)]"
            >
              <h3 className="order-1 px-4 pb-4 pt-5 text-center text-[22px] font-normal leading-8 text-[#001825] md:order-2 md:pb-2 md:pt-4 md:text-left md:text-2xl">
                {item.title}
              </h3>

              <div className="relative order-2 h-[220px] bg-[#e2e2e2] sm:h-[260px] md:order-1 md:h-[300px] xl:h-[340px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 379px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="order-3 flex flex-1 flex-col items-center px-4 pb-5 text-center md:items-start md:pb-4 md:text-left">
                <p className="pb-4 text-[15px] font-normal leading-[23px] text-[#46464d]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-auto flex items-center gap-1 text-sm font-semibold uppercase leading-5 tracking-[0.7px] text-[#001825] hover:text-[#00aeef]"
                >
                  <span>View Now</span>
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
