const features = [
  { label: "Free Measuring & Fitting", icon: "measure" },
  { label: "Multiple Styles Available", icon: "styles" },
  { label: "Made to Measure Blinds", icon: "custom" },
  { label: "Competitive Quotes", icon: "quote" },
];

const testimonials = [
  {
    quote:
      "Excellent service and quality blinds. Very happy with the installation and speed of service.",
    author: "Christopher Swarup",
  },
  {
    quote:
      "Our blinds look great and have been fitted perfectly. Would highly recommend!",
    author: "Nabeela Ispahani",
  },
];

function FeatureIcon({ type }: { type: string }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,174,239,0.1)] text-[#001825]">
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === "measure" ? (
          <>
            <path d="M2 12C1.45 12 0.979167 11.8042 0.5875 11.4125C0.195833 11.0208 0 10.55 0 10V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H5V6H7V0H9V6H11V0H13V6H15V0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V10C20 10.55 19.8042 11.0208 19.4125 11.4125C19.0208 11.8042 18.55 12 18 12H2Z" fill="#001825"/>
          </>
        ) : null}
        {type === "styles" ? (
          <>
            <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.270833 7.31667 0.8125 6.1C1.35417 4.88333 2.0875 3.825 3.0125 2.925C3.9375 2.025 5.01667 1.3125 6.25 0.7875C7.48333 0.2625 8.8 0 10.2 0C11.5333 0 12.7917 0.229167 13.975 0.6875C15.1583 1.14583 16.1958 1.77917 17.0875 2.5875C17.9792 3.39583 18.6875 4.35417 19.2125 5.4625C19.7375 6.57083 20 7.76667 20 9.05C20 10.9667 19.4167 12.4375 18.25 13.4625C17.0833 14.4875 15.6667 15 14 15H12.15C12 15 11.8958 15.0417 11.8375 15.125C11.7792 15.2083 11.75 15.3 11.75 15.4C11.75 15.6 11.875 15.8875 12.125 16.2625C12.375 16.6375 12.5 17.0667 12.5 17.55C12.5 18.3833 12.2708 19 11.8125 19.4C11.3542 19.8 10.75 20 10 20ZM4.5 11C4.93333 11 5.29167 10.8583 5.575 10.575C5.85833 10.2917 6 9.93333 6 9.5C6 9.06667 5.85833 8.70833 5.575 8.425C5.29167 8.14167 4.93333 8 4.5 8C4.06667 8 3.70833 8.14167 3.425 8.425C3.14167 8.70833 3 9.06667 3 9.5C3 9.93333 3.14167 10.2917 3.425 10.575C3.70833 10.8583 4.06667 11 4.5 11ZM7.5 7C7.93333 7 8.29167 6.85833 8.575 6.575C8.85833 6.29167 9 5.93333 9 5.5C9 5.06667 8.85833 4.70833 8.575 4.425C8.29167 4.14167 7.93333 4 7.5 4C7.06667 4 6.70833 4.14167 6.425 4.425C6.14167 4.70833 6 5.06667 6 5.5C6 5.93333 6.14167 6.29167 6.425 6.575C6.70833 6.85833 7.06667 7 7.5 7ZM12.5 7C12.9333 7 13.2917 6.85833 13.575 6.575C13.8583 6.29167 14 5.93333 14 5.5C14 5.06667 13.8583 4.70833 13.575 4.425C13.2917 4.14167 12.9333 4 12.5 4C12.0667 4 11.7083 4.14167 11.425 4.425C11.1417 4.70833 11 5.06667 11 5.5C11 5.93333 11.1417 6.29167 11.425 6.575C11.7083 6.85833 12.0667 7 12.5 7ZM15.5 11C15.9333 11 16.2917 10.8583 16.575 10.575C16.8583 10.2917 17 9.93333 17 9.5C17 9.06667 16.8583 8.70833 16.575 8.425C16.2917 8.14167 15.9333 8 15.5 8C15.0667 8 14.7083 8.14167 14.425 8.425C14.1417 8.70833 14 9.06667 14 9.5C14 9.93333 14.1417 10.2917 14.425 10.575C14.7083 10.8583 15.0667 11 15.5 11Z" fill="#001825"/>
          </>
        ) : null}
        {type === "custom" ? (
          <>
            <path d="M1 18.5059V15.5059H4.1L1.55 7.15588C1.1 6.90588 0.729167 6.53922 0.4375 6.05588C0.145833 5.57255 0 5.05588 0 4.50588C0 3.67255 0.291667 2.96422 0.875 2.38088C1.45833 1.79755 2.16667 1.50588 3 1.50588C3.65 1.50588 4.22917 1.69338 4.7375 2.06838C5.24583 2.44338 5.6 2.92255 5.8 3.50588H9V2.50588C9 2.22255 9.09583 1.98505 9.2875 1.79338C9.47917 1.60172 9.71667 1.50588 10 1.50588C10.15 1.50588 10.2958 1.53922 10.4375 1.60588C10.5792 1.67255 10.7 1.77255 10.8 1.90588L12.5 0.305882C12.65 0.155882 12.8292 0.060049 13.0375 0.0183824C13.2458 -0.0232843 13.45 0.00588235 13.65 0.105882L17.55 1.90588C17.75 2.00588 17.8875 2.15172 17.9625 2.34338C18.0375 2.53505 18.0333 2.72255 17.95 2.90588C17.85 3.10588 17.7042 3.23505 17.5125 3.29338C17.3208 3.35172 17.1333 3.33922 16.95 3.25588L13.35 1.60588L11 3.80588V5.20588L13.35 7.35588L16.95 5.70588C17.1333 5.62255 17.325 5.61422 17.525 5.68088C17.725 5.74755 17.8667 5.87255 17.95 6.05588C18.05 6.25588 18.0583 6.44755 17.975 6.63088C17.8917 6.81422 17.75 6.95588 17.55 7.05588L13.65 8.90588C13.45 9.00588 13.2458 9.03505 13.0375 8.99338C12.8292 8.95172 12.65 8.85588 12.5 8.70588L10.8 7.10588C10.7 7.20588 10.5792 7.29755 10.4375 7.38088C10.2958 7.46422 10.15 7.50588 10 7.50588C9.71667 7.50588 9.47917 7.41005 9.2875 7.21838C9.09583 7.02672 9 6.78922 9 6.50588V5.50588H5.8C5.75 5.63922 5.69583 5.76422 5.6375 5.88088C5.57917 5.99755 5.5 6.12255 5.4 6.25588L10.4 15.5059H14V18.5059H1ZM3 5.50588C3.28333 5.50588 3.52083 5.41005 3.7125 5.21838C3.90417 5.02672 4 4.78922 4 4.50588C4 4.22255 3.90417 3.98505 3.7125 3.79338C3.52083 3.60172 3.28333 3.50588 3 3.50588C2.71667 3.50588 2.47917 3.60172 2.2875 3.79338C2.09583 3.98505 2 4.22255 2 4.50588C2 4.78922 2.09583 5.02672 2.2875 5.21838C2.47917 5.41005 2.71667 5.50588 3 5.50588Z" fill="#001825"/>
          </>
        ) : null}
        {type === "quote" ? (
          <>
            <path d="M12 18C10.0333 18 8.28333 17.4417 6.75 16.325C5.21667 15.2083 4.13333 13.7667 3.5 12H0V10H3.05C3.01667 9.81667 3 9.65 3 9.5C3 9.35 3 9.18333 3 9C3 8.81667 3 8.65 3 8.5C3 8.35 3.01667 8.18333 3.05 8H0V6H3.5C4.13333 4.23333 5.21667 2.79167 6.75 1.675C8.28333 0.558333 10.0333 0 12 0C13.15 0 14.2375 0.2 15.2625 0.6C16.2875 1 17.2 1.56667 18 2.3L16.25 4.05C15.6667 3.56667 15.0125 3.1875 14.2875 2.9125C13.5625 2.6375 12.8 2.5 12 2.5C10.75 2.5 9.6125 2.82083 8.5875 3.4625C7.5625 4.10417 6.78333 4.95 6.25 6H12V8H5.6C5.56667 8.18333 5.54167 8.35 5.525 8.5C5.50833 8.65 5.5 8.81667 5.5 9C5.5 9.18333 5.50833 9.35 5.525 9.5C5.54167 9.65 5.56667 9.81667 5.6 10H12V12H6.25C6.78333 13.05 7.5625 13.8958 8.5875 14.5375C9.6125 15.1792 10.75 15.5 12 15.5C12.8 15.5 13.5708 15.3625 14.3125 15.0875C15.0542 14.8125 15.7 14.4333 16.25 13.95L18 15.7C17.2 16.4333 16.2875 17 15.2625 17.4C14.2375 17.8 13.15 18 12 18Z" fill="#001825"/>
          </>
        ) : null}
      </svg>
    </span>
  );
}

function QuoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="30" viewBox="0 0 43 30" fill="none" className="absolute right-6 top-6 h-[30px] w-[42.5px] text-[#c7c6ce]">
      <path d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75Z" fill="#001825" fillOpacity="0.2"/>
    </svg>
  );
}

export function MadeToMeasureSection() {
  return (
    <section className="border-y border-[rgba(199,198,206,0.3)] bg-[#f8fafc] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-12">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left">
          <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[28px] font-bold leading-9 text-[#001825] md:pr-5 md:text-4xl md:leading-[44px]">
            Made to measure Blinds in
            <br />
            Dublin, Ireland
          </h2>

          <p className="text-[15px] font-normal leading-[25px] text-[#46464d] md:text-base md:leading-[26px]">
            Priceless Blinds supplies made-to-measure blinds in Dublin, Ireland
            for every size and shape of window. Our custom blinds are designed
            to look smart, fit accurately, and work well in both residential and
            commercial spaces. With a large variety of styles available, our
            team can help you choose a practical and attractive window blind
            solution for your property.
          </p>

          <div className="grid w-full grid-cols-2 gap-4 pt-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex min-h-[112px] flex-col items-center justify-center gap-3 rounded-[2px] bg-white/60 px-3 py-4 md:min-h-12 md:flex-row md:justify-start md:gap-0 md:bg-transparent md:px-0 md:py-0"
              >
                <FeatureIcon type={feature.icon} />
                <span className="text-center text-sm font-semibold leading-5 tracking-[0.35px] text-[#001825] md:pl-4 md:text-left md:tracking-[0.7px]">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-center rounded-[2px] border border-[rgba(199,198,206,0.3)] bg-white px-6 py-9 shadow-[0_12px_30px_rgba(14,20,43,0.08)] md:px-10 md:py-10">
          <QuoteIcon />
          <div className="flex flex-col gap-[31px]">
            {testimonials.map((item, index) => (
              <div key={item.author} className="flex flex-col gap-4">
                <blockquote className="text-[22px] italic leading-9 text-[#001825] md:text-2xl md:leading-10">
                  &quot;{item.quote}&quot;
                </blockquote>
                <p className="text-sm font-semibold uppercase leading-5 tracking-[1.4px] text-[#46464d]">
                  — {item.author}
                </p>
                {index < testimonials.length - 1 ? (
                  <div className="mt-[15px] h-px w-full bg-[rgba(199,198,206,0.3)]" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
