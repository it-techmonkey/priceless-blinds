type PolicySection = {
  title?: string;
  paragraphs?: string[];
  list?: string[];
};

type PolicyPageProps = {
  title: string;
  eyebrow: string;
  description?: string;
  sections: PolicySection[];
};

export function PolicyPage({
  title,
  eyebrow,
  description,
  sections,
}: PolicyPageProps) {
  return (
    <main>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#001825] px-5 py-14 md:min-h-[380px] md:px-12 md:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,24,37,1),rgba(0,72,96,0.9))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-4 text-sm font-bold uppercase leading-5 tracking-[1.4px] text-[#00aeef]">
            {eyebrow}
          </p>
          <h1 className="text-[38px] font-bold leading-[48px] text-white md:text-[54px] md:leading-[64px]">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-[rgba(255,255,255,0.86)] md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </section>

      <section className="border-t border-[rgba(199,198,206,0.3)] bg-[#f8fafc] px-5 py-14 md:px-12 md:py-20 lg:py-24">
        <article className="mx-auto w-full max-w-[1040px] rounded-lg border border-[rgba(199,198,206,0.3)] bg-white p-6 shadow-[0_10px_28px_rgba(14,20,43,0.05)] md:p-10 lg:p-12">
          <div className="flex flex-col gap-9">
            {sections.map((section, index) => (
              <section
                key={`${section.title ?? "intro"}-${index}`}
                className="border-b border-[rgba(199,198,206,0.25)] pb-8 last:border-b-0 last:pb-0"
              >
                {section.title ? (
                  <h2 className="text-[24px] font-bold leading-8 text-[#001825] md:text-[30px] md:leading-10">
                    {section.title}
                  </h2>
                ) : null}

                {section.paragraphs?.length ? (
                  <div className="mt-4 flex flex-col gap-4 text-[15px] leading-7 text-[#46464d] md:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.list?.length ? (
                  <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-7 text-[#46464d] md:text-base">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
