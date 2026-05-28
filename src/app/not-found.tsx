import Link from "next/link";

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-9 w-9"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18"
        cy="18"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="m25.5 25.5 7 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#001825] px-5 py-20 text-white md:px-12 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,24,37,1),rgba(0,72,96,0.88))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />

        <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(0,174,239,0.14)] text-[#00aeef]">
            <SearchIcon />
          </div>

          <p className="mt-8 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            404 error
          </p>
          <h1 className="mt-3 text-[40px] font-bold leading-[50px] md:text-[58px] md:leading-[68px]">
            Page not found
          </h1>
          <p className="mt-5 max-w-[680px] text-[16px] leading-7 text-[rgba(255,255,255,0.86)] md:text-lg">
            The page you are looking for may have moved, changed name, or is no
            longer available.
          </p>

          <div className="mt-8 flex w-full max-w-[520px] flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex min-h-12 flex-1 items-center justify-center rounded-[2px] bg-[#00aeef] px-7 text-sm font-semibold leading-5 tracking-[0.7px] text-white hover:bg-[#009bd6] hover:shadow-[0_8px_18px_rgba(0,174,239,0.22)]"
            >
              BACK TO HOME
            </Link>
            <Link
              href="/ireland-blinds-quality-blinds-in-dublin"
              className="flex min-h-12 flex-1 items-center justify-center rounded-[2px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.08)] px-7 text-sm font-semibold leading-5 tracking-[0.7px] text-white hover:border-white hover:bg-[rgba(255,255,255,0.14)]"
            >
              VIEW BLINDS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
