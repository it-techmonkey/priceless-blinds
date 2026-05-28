import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, trustParagraph } from "../../data/blog-posts";

export const metadata: Metadata = {
  title: "Blog - Priceless Blinds",
  description:
    "Window Blinds Dublin, Ireland, beautifully crafted and high-quality blinds Dublin, Ireland. Priceless Blinds a trusted name in manufactured blinds",
};

export default function BlogPage() {
  return (
    <main>
      <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#001825] px-5 py-16 md:min-h-[440px] md:px-12 md:py-20">
        <Image
          src="/blog/blog-page-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-78"
        />
        <div className="absolute inset-0 bg-[rgba(0,24,37,0.64)]" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-4 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            Priceless Blinds Dublin Blogs
          </p>
          <h1 className="text-[40px] font-bold leading-[50px] text-white md:text-[56px] md:leading-[64px]">
            Blog
          </h1>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-[rgba(199,198,206,0.3)] bg-white shadow-[0_12px_30px_rgba(14,20,43,0.06)] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(14,20,43,0.1)]"
              >
                <div className="relative h-[240px] bg-[#e2e2e2] sm:h-[260px] xl:h-[220px]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <h2 className="absolute bottom-5 left-5 right-5 text-[18px] font-bold leading-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)]">
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-7 shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-center text-[30px] font-bold leading-[40px] text-[#001825] md:text-[40px] md:leading-[48px] lg:text-left">
            Priceless Blinds Dublin, Ireland
          </h2>
          <p className="text-center text-[15px] leading-7 text-[#46464d] md:text-base lg:text-left">
            {trustParagraph}
          </p>
        </div>
      </section>
    </main>
  );
}
