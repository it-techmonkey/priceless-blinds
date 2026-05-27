import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ireland Blinds - Priceless Blinds",
  description:
    "Priceless Blinds Dublin Ireland blinds offers a wide range of quality blinds for covering your home office windows perfectly at affordable prices.",
};

const intro =
  "Choose from a wide range of made-to-measure blinds, colors, finishes, and printed textures. Our Dublin team helps you find the right window covering for your home or office, with professional advice, accurate measuring, and dependable doorstep service.";

const blindTypes = [
  {
    title: "Wooden Venetian blinds",
    href: "/wooden-blinds-in-dublin-ireland",
    image: "/ireland-blinds/wooden-blinds-ireland.webp",
    description:
      "Specially designed wooden blinds add warmth, texture, and a premium finish to home and office windows. They are durable, naturally insulating, and made to measure for a precise fit.",
  },
  {
    title: "Roller blinds",
    href: "/roller-blinds-dublin-ireland",
    image: "/ireland-blinds/roller-blinds-ireland.webp",
    description:
      "Roller blinds are a clean, practical choice for almost any room. They cover windows neatly, are available in a broad range of colors, and suit both home and office interiors.",
  },
  {
    title: "Vertical blinds",
    href: "/vertical-blinds-in-dublin-ireland",
    image: "/ireland-blinds/vertical-blinds-ireland.webp",
    description:
      "Vertical blinds are smart, stylish, and ideal for larger windows or glass doors. Their adjustable strips make it easy to manage sunlight, privacy, and everyday comfort.",
  },
  {
    title: "PVC Waterproof Blinds",
    href: "/pvc-waterproof-blinds-in-dublin-ireland",
    image: "/ireland-blinds/pvc-waterproof-blinds-ireland.webp",
    description:
      "PVC waterproof blinds are made for moisture-prone spaces such as bathrooms and kitchens. They are easy to wipe clean, hard-wearing, and suitable for residential or commercial use.",
  },
  {
    title: "Roman blinds",
    href: "/roman-blinds-in-dublin-ireland",
    image: "/ireland-blinds/roman-blinds-ireland.webp",
    description:
      "Roman blinds bring a soft, tailored finish to your windows. Our team can measure, fit, and install them for a refined look that works beautifully in living spaces and bedrooms.",
  },
  {
    title: "Vision blinds",
    href: "/vision-blinds-in-dublin-ireland",
    image: "/ireland-blinds/vision-blinds-ireland.webp",
    description:
      "Vision blinds, also known as day and night blinds, use alternating sheer and opaque fabric strips. They let you balance privacy and natural light with a modern finish.",
  },
  {
    title: "Velux blinds",
    href: "/velux-blinds-in-dublin-ireland",
    image: "/ireland-blinds/velux-blinds-ireland.webp",
    description:
      "Velux blinds are designed for roof windows, helping you control overhead light and improve comfort. Choose from practical colors and finishes for a clean, fitted result.",
  },
  {
    title: "Metal Venetian blinds",
    href: "/metal-venetian-blinds-in-dublin",
    image: "/ireland-blinds/metal-venetian-ireland.webp",
    description:
      "Metal Venetian blinds are lightweight, affordable, and easy to adjust. They are a strong choice for privacy, sunlight control, and a crisp modern look across your windows.",
  },
  {
    title: "Conservatory blinds",
    href: "/conservatory-blinds-in-dublin",
    image: "/ireland-blinds/conservatory-blinds-ireland.webp",
    description:
      "Conservatory blinds help manage glare, warmth, and privacy while adding a finished look to the room. They are measured and fitted to suit the exact shape of your space.",
  },
  {
    title: "Integral blinds",
    href: "/integral-blinds-in-dublin-ireland",
    image: "/ireland-blinds/integral-blinds-ireland.webp",
    description:
      "Integral blinds offer a smart, low-maintenance window covering solution. They sit neatly within the glazing system, keeping the blind protected while maintaining a clean appearance.",
  },
];

function BlindImage({
  image,
  title,
}: {
  image?: string;
  title: string;
}) {
  if (!image) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center bg-[#eef2f6]">
        <div className="h-10 w-10 rounded-[2px] border border-[rgba(0,24,37,0.16)]" />
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={title}
      fill
      sizes="(min-width: 1280px) 389px, (min-width: 768px) 50vw, 100vw"
      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
    />
  );
}

function BlindCard({
  item,
}: {
  item: (typeof blindTypes)[number];
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2px] border border-[rgba(199,198,206,0.3)] bg-white p-px shadow-[0_4px_14px_rgba(14,20,43,0.04)] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(14,20,43,0.1)]">
      <Link
        href={item.href}
        aria-label={`View ${item.title}`}
        className="absolute inset-0 z-10"
      />
      <div className="relative h-[240px] overflow-hidden bg-[#e2e2e2] md:h-[280px] xl:h-[320px]">
        <BlindImage image={item.image} title={item.title} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="pb-3 text-center text-[23px] font-normal leading-8 text-[#001825] md:text-left md:text-[26px] md:leading-9">
          {item.title}
        </h2>
        <p className="pb-5 text-center text-[15px] font-normal leading-6 text-[#46464d] md:text-left">
          {item.description}
        </p>

        <div className="relative z-20 mt-auto grid gap-2">
          <a
            href="tel:1800911949"
            className="flex min-h-[44px] items-center justify-center rounded-[2px] border-2 border-[#00aeef] bg-white px-5 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-[#00aeef] hover:bg-[#f0fbff]"
          >
            CALL NOW
          </a>
          <Link
            href="/contact"
            className="flex min-h-[44px] items-center justify-center rounded-[2px] bg-[#00aeef] px-5 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#009bd6]"
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function IrelandBlindsPage() {
  return (
    <main>
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#001825] px-5 py-16 md:min-h-[520px] md:px-12 lg:min-h-[580px]">
        <Image
          src="/ireland-blinds/ireland-blinds-hero-img.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-[rgba(0,24,37,0.52)]" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-4 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            Quality blinds in Dublin
          </p>
          <h1 className="text-[40px] font-bold leading-[50px] text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.06),0_4px_1.5px_rgba(0,0,0,0.07)] md:text-[56px] md:leading-[64px]">
            Ireland Blinds
          </h1>
          <p className="mt-4 max-w-[672px] text-[16px] font-normal leading-7 text-[rgba(255,255,255,0.9)] md:text-lg">
            A wide range of made-to-measure blinds for covering your home and
            office windows beautifully, professionally, and at affordable
            prices.
          </p>
        </div>
      </section>

      <section className="bg-[#f9f9f9] px-5 pb-14 pt-10 md:px-12 md:pb-20 md:pt-14 lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-[768px] flex-col items-center gap-5 text-center">
          <p className="text-[16px] font-normal leading-7 text-[#46464d] md:text-lg md:leading-[29px]">
            {intro}
          </p>
          <div className="h-px w-24 bg-[#00aeef]" />
        </div>

        <div className="mx-auto mb-8 mt-12 flex w-full max-w-[1280px] flex-col items-center gap-3 text-center md:mt-14 lg:mt-16">
          <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[30px] font-bold leading-[40px] text-[#001825] md:text-[40px] md:leading-[48px]">
            Explore Our Blinds
          </h2>
          <p className="max-w-[720px] text-[15px] leading-7 text-[#46464d] md:text-base">
            Browse the main blind types available from Priceless Blinds and
            choose the right fit for each room, window, and finish.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blindTypes.map((item) => (
            <BlindCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
