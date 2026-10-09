import Link from "next/link";

export function PumpkinIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7c0-2 .9-3.3 2.6-3.8"
        stroke="#5b7a3a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="7.5" cy="14" rx="5" ry="6.5" fill="#f97316" />
      <ellipse cx="16.5" cy="14" rx="5" ry="6.5" fill="#f97316" />
      <ellipse cx="12" cy="14" rx="4.5" ry="7" fill="#fb923c" />
    </svg>
  );
}

function BatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 16 53 9l3 8c8-7 22-9 40-3-6 2-10 8-10 14-4-5-11-5-14 1-3-5-10-4-13 3-2-2-6 2-9 10-3-8-7-12-9-10-3-7-10-8-13-3-3-6-10-6-14-1 0-6-4-12-10-14 18-6 32-4 40 3l3-8Z" />
    </svg>
  );
}

function CobwebIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M120 0 5 0M120 0 13.8 44M120 0 38.7 81.3M120 0 76 106.2M120 0V115" />
      <path d="M85 0Q90.8 5.8 87.7 13.4Q95.3 16.5 95.3 24.7Q103.5 24.7 106.6 32.3Q114.2 29.2 120 35" />
      <path d="M55 0Q65.8 10.8 59.9 24.9Q74.1 30.7 74 46Q89.3 45.9 95.1 60.1Q109.2 54.2 120 65" />
      <path d="M25 0Q40.8 15.8 32.2 36.4Q52.9 44.9 52.8 67.2Q75.1 67.1 83.6 87.8Q104.2 79.2 120 95" />
    </svg>
  );
}

export function HalloweenBar() {
  return (
    <div className="bg-[#1a1024] px-5 py-2 md:px-12">
      <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-xs font-semibold leading-5 tracking-[0.35px] text-white md:text-[13px]">
        <PumpkinIcon className="h-4 w-4 shrink-0" />
        <span>Happy Halloween from Priceless Blinds</span>
        <Link
          href="/contact"
          className="text-[#ff9d45] underline underline-offset-2 hover:text-white"
        >
          Book a free consultation
        </Link>
      </p>
    </div>
  );
}

export function HeroHalloweenDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <CobwebIcon className="absolute right-0 top-0 h-[84px] w-[84px] text-white opacity-50 md:h-[150px] md:w-[150px]" />
      <BatIcon className="absolute right-[24%] top-[13%] hidden w-14 -rotate-12 text-[#140c1e] opacity-80 md:block" />
      <BatIcon className="absolute right-[14%] top-[27%] hidden w-9 rotate-6 text-[#140c1e] opacity-70 md:block" />
      <BatIcon className="absolute right-[33%] top-[30%] hidden w-7 -rotate-6 text-[#140c1e] opacity-60 md:block" />
    </div>
  );
}
