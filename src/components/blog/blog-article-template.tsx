import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../../data/blog-posts";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-[30px] font-bold leading-[40px] text-[#001825] md:text-[40px] md:leading-[48px]">
      {children}
    </h2>
  );
}

export function BlogArticleTemplate({ post }: { post: BlogPost }) {
  return (
    <main>
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#001825] px-5 py-16 md:min-h-[480px] md:px-12 md:py-20">
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[rgba(0,24,37,0.64)]" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-4 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            Priceless Blinds Dublin Blogs
          </p>
          <h1 className="max-w-[940px] text-[38px] font-bold leading-[48px] text-white md:text-[54px] md:leading-[66px]">
            {post.articleTitle}
          </h1>
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f9f9f9] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <article className="mx-auto flex w-full max-w-[1040px] flex-col gap-12">
          <div>
            <Link
              href="/blog"
              className="mb-6 inline-flex text-sm font-semibold uppercase leading-5 tracking-[0.7px] text-[#00aeef] hover:text-[#001825]"
            >
              Back to blog
            </Link>
          </div>

          <div className="flex flex-col gap-12">
            {post.sections.map((section) => (
              <section key={section.title}>
                <SectionHeading>{section.title}</SectionHeading>
                <div className="mt-6 flex flex-col gap-5 text-center text-[15px] leading-7 text-[#46464d] md:text-base md:leading-7 lg:text-left">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
