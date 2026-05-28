import Image from "next/image";
import Link from "next/link";

export function SupplierSection() {
  return (
    <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 px-5 md:grid-cols-2 md:gap-12 md:px-12">
        <div className="contents md:flex md:flex-col md:items-start md:justify-center md:py-4">
          <div className="order-1 w-full text-center md:pb-6 md:text-left">
            <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[28px] font-bold leading-9 text-[#001825] md:text-4xl md:leading-[46px]">
              Priceless Blinds: A
              <br />
              Trusted Name in
              <br />
              Window Blinds Supplier
              <br />
              all over Dublin, Ireland
            </h2>
          </div>

          <div className="order-3 flex max-w-[560px] flex-col items-center text-center md:items-start md:text-left">
            <p className="text-[15px] font-normal leading-[25px] text-[#46464d] md:pb-6 md:text-base md:leading-[26px]">
              Priceless Blinds Dublin supplies high-quality, stylish window
              blinds for offices and homes across Dublin, Ireland. We deliver
              ordered blinds quickly, provide professional fitting, and offer
              free measuring so every blind is prepared for the correct window
              size. From first advice to final installation, our team is here to
              help you choose window blinds that look neat, fit well, and meet
              the practical needs of your space.
            </p>

            <Link
              href="/contact"
              className="mt-6 flex min-h-12 items-center justify-center rounded-[2px] bg-[#00aeef] px-8 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#009bd6] hover:shadow-[0_8px_18px_rgba(0,174,239,0.22)] md:mt-0"
            >
              BOOK A FREE CONSULTATION
            </Link>
          </div>
        </div>

        <div className="relative order-2 h-[280px] overflow-hidden rounded-[2px] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.3)] sm:h-[340px] md:order-first md:h-[520px] xl:h-[560px]">
          <Image
            src="/home/home-img2.webp"
            alt="Priceless Blinds supplier"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
