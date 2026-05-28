import Image from "next/image";
import Link from "next/link";

function BadgeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M4.43333 12.25L3.325 10.3833L1.225 9.91667L1.42917 7.75833L0 6.125L1.42917 4.49167L1.225 2.33333L3.325 1.86667L4.43333 0L6.41667 0.845833L8.4 0L9.50833 1.86667L11.6083 2.33333L11.4042 4.49167L12.8333 6.125L11.4042 7.75833L11.6083 9.91667L9.50833 10.3833L8.4 12.25L6.41667 11.4042L4.43333 12.25ZM4.92917 10.7625L6.41667 10.1208L7.93333 10.7625L8.75 9.3625L10.3542 8.98333L10.2083 7.35L11.2875 6.125L10.2083 4.87083L10.3542 3.2375L8.75 2.8875L7.90417 1.4875L6.41667 2.12917L4.9 1.4875L4.08333 2.8875L2.47917 3.2375L2.625 4.87083L1.54583 6.125L2.625 7.35L2.47917 9.0125L4.08333 9.3625L4.92917 10.7625ZM5.80417 8.19583L9.1 4.9L8.28333 4.05417L5.80417 6.53333L4.55 5.30833L3.73333 6.125L5.80417 8.19583Z" fill="white"/>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[#f8fafc] py-10 md:min-h-[560px]">
      <div className="absolute inset-0">
        <Image
          src="/home/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,24,37,0.95)] via-[rgba(0,24,37,0.8)] via-50% to-[rgba(0,24,37,0)]" />
      </div>

      <div className="relative flex w-full max-w-[1440px] flex-col items-center px-5 py-16 text-center md:items-start md:px-12 md:py-24 md:text-left">
        <div className="pb-7">
          <div className="flex items-center rounded-[2px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-[17px] py-[9px] backdrop-blur-[2px]">
            <BadgeIcon />
            <span className="pl-2 text-xs font-bold uppercase leading-4 tracking-[0.6px] text-white">
              Free Measuring &amp; Fitting in Dublin Ireland
            </span>
          </div>
        </div>

        <div className="max-w-[768px] pb-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.06),0_4px_1.5px_rgba(0,0,0,0.07)]">
          <h1 className="max-w-[640px] text-[34px] font-bold leading-[43px] text-white md:text-[50px] md:leading-[62px]">
            Quality Window Blinds
            <br />
            Dublin, Ireland
          </h1>
        </div>

        <p className="max-w-[640px] pb-7 text-[15px] font-normal leading-7 text-[rgba(255,255,255,0.86)] md:text-[17px] md:leading-7">
          Enhance your home or office with local made-to-measure blinds,
          crafted in a wide choice of colours, textures, and finishes, then
          professionally measured and fitted across Dublin.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="flex min-h-12 items-center justify-center rounded-[2px] bg-[#00aeef] px-7 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#009bd6] hover:shadow-[0_12px_24px_rgba(0,174,239,0.22)]"
          >
            BOOK A FREE CONSULTATION
          </Link>
          <Link
            href="/ireland-blinds-quality-blinds-in-dublin"
            className="flex min-h-12 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-7 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white backdrop-blur-[2px] hover:border-white hover:bg-[rgba(255,255,255,0.16)]"
          >
            EXPLORE COLLECTIONS
          </Link>
        </div>
      </div>
    </section>
  );
}
