"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SlideshowImage = {
  src: string;
  alt: string;
};

type ImageSlideshowProps = {
  images: SlideshowImage[];
};

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const hasMultipleImages = images.length > 1;
  const activeDotIndex = images.length ? activeIndex % images.length : 0;

  useEffect(() => {
    if (!hasMultipleImages) {
      return;
    }

    const timer = window.setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((currentIndex) => currentIndex + 1);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [hasMultipleImages]);

  if (!images.length) {
    return null;
  }

  const loopImages = hasMultipleImages ? [...images, ...images] : images;

  function showPreviousSlide() {
    if (!hasMultipleImages) {
      return;
    }

    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(images.length);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
          setActiveIndex(images.length - 1);
        });
      });

      return;
    }

    setIsTransitioning(true);
    setActiveIndex((currentIndex) => currentIndex - 1);
  }

  function showNextSlide() {
    if (!hasMultipleImages) {
      return;
    }

    setIsTransitioning(true);
    setActiveIndex((currentIndex) => currentIndex + 1);
  }

  function showSlide(index: number) {
    setIsTransitioning(true);
    setActiveIndex(index);
  }

  return (
    <div className="installation-carousel relative w-full overflow-hidden">
      <div
        className={`flex gap-5 ${
          isTransitioning
            ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            : ""
        }`}
        style={{
          transform: `translateX(calc(var(--slide-size) * -${activeIndex}))`,
        }}
        onTransitionEnd={() => {
          if (activeIndex >= images.length) {
            setIsTransitioning(false);
            setActiveIndex(0);
          }
        }}
      >
        {loopImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative min-h-[260px] shrink-0 basis-full overflow-hidden rounded-lg border border-[rgba(199,198,206,0.3)] bg-[#e2e2e2] shadow-[0_8px_24px_rgba(14,20,43,0.06)] md:min-h-[340px] md:[flex-basis:calc((100%_-_40px)_/_3)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {hasMultipleImages ? (
        <>
          <button
            type="button"
            aria-label="Show previous installation"
            onClick={showPreviousSlide}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(0,24,37,0.12)] bg-white/85 text-[#001825] shadow-[0_8px_20px_rgba(14,20,43,0.08)] backdrop-blur-sm hover:border-[rgba(0,174,239,0.4)] hover:bg-white hover:text-[#00aeef] md:left-4"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Show next installation"
            onClick={showNextSlide}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(0,24,37,0.12)] bg-white/85 text-[#001825] shadow-[0_8px_20px_rgba(14,20,43,0.08)] backdrop-blur-sm hover:border-[rgba(0,174,239,0.4)] hover:bg-white hover:text-[#00aeef] md:right-4"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="mt-7 flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show installation ${index + 1}`}
                aria-current={activeDotIndex === index}
                onClick={() => showSlide(index)}
                className={[
                  "h-2.5 rounded-full border border-transparent transition-all",
                  activeDotIndex === index
                    ? "w-7 bg-[#00aeef]"
                    : "w-2.5 bg-[rgba(0,24,37,0.22)] hover:bg-[rgba(0,174,239,0.45)]",
                ].join(" ")}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
