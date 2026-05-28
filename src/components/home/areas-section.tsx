const areas = [
  "Drogheda",
  "Balbriggan",
  "Skerries",
  "Lusk",
  "Rush",
  "Donabate",
  "Swords",
  "Tallaght",
  "Sandymount",
  "Poppintree",
  "Mulhuddart",
  "Howth",
  "Donaghmede",
  "Cabra",
  "Ballyfermot",
  "Shankill",
  "Lucan",
  "Coolock",
  "Castleknock",
  "Blanchardstown",
  "Blackrock",
];

export function AreasSection() {
  return (
    <section className="bg-[#f9f9f9] py-14 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 md:px-12">
        <div className="flex w-full flex-col items-center gap-2">
          <h2 className="border-b-2 border-[rgba(0,24,37,0.2)] pb-2.5 text-center text-[30px] font-bold leading-[38px] text-[#001825] md:text-4xl md:leading-[44px]">
            Areas We Cover
          </h2>
          <p className="text-center text-base font-normal leading-6 text-[#46464d]">
            We provide reliable measuring, fitting, and delivery for quality
            manufactured blinds across Dublin and nearby areas.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex min-h-11 items-center justify-center rounded-[2px] border border-transparent bg-[#f8fafc] px-3 py-3 hover:border-[rgba(0,174,239,0.22)] hover:bg-white sm:px-4"
            >
              <span className="text-center text-[13px] font-semibold leading-5 tracking-[0.35px] text-[#46464d] sm:text-sm sm:tracking-[0.7px]">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
