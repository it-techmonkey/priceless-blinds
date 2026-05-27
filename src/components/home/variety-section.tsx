import Image from "next/image";
import Link from "next/link";

export function VarietySection() {
  return (
    <section className="bg-[#f8fafc] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 px-5 md:grid-cols-2 md:gap-12 md:px-12">
        <div className="contents md:flex md:flex-col md:items-start md:justify-center md:py-4">
          <div className="order-1 w-full text-center md:pb-6 md:text-left">
            <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[28px] font-bold leading-9 text-[#001825] md:text-4xl md:leading-[46px]">
              Huge Variety of Custom
              <br />
              Blinds Available in
              <br />
              Dublin, Ireland
            </h2>
          </div>

          <div className="order-3 flex max-w-[560px] flex-col items-center gap-5 text-center text-[15px] font-normal leading-[25px] text-[#46464d] md:items-start md:pb-6 md:text-left md:text-base md:leading-[26px]">
            <p>
              Are you looking for something special in window blinds? Here we
              will suggest you check priceless blinds in Dublin, Ireland that
              will perfectly improve the beauty factor of your house windows.
              Our stylish window blinds option will pop up the interior of your
              house perfectly.
            </p>
            <p>
              We are the largest supplier of affordable window blinds in Dublin
              and we do not compromise in services. We offer quality
              manufactured window blinds all over Dublin, Ireland and you are
              free to compare our given quotes with other service providers.
            </p>
            <p>
              We have a wide range of quality manufactured blinds that will
              perfectly produce a luxurious look. Our blinds are highly suitable
              for commercial and residential windows. Your ordered blinds will
              be delivered to your doorstep to very next day.
            </p>

            <Link
              href="/contact"
              className="mt-1 flex min-h-12 items-center justify-center rounded-[2px] bg-[#00aeef] px-8 text-center text-sm font-semibold leading-5 tracking-[0.7px] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#009bd6] hover:shadow-[0_8px_18px_rgba(0,174,239,0.22)] md:mt-0"
            >
              BOOK A FREE CONSULTATION
            </Link>
          </div>
        </div>

        <div className="relative order-2 h-[280px] overflow-hidden rounded-[2px] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.3)] sm:h-[340px] md:order-none md:h-[520px] xl:h-[560px]">
          <Image
            src="/home/home-img1.webp"
            alt="Woman looking through high-quality window shutters"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
