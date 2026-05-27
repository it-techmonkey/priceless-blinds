import type { BlindDetailData } from "../components/blinds/blind-detail-template";

export type BlindDetailPageData = BlindDetailData & {
  slug: string;
  metaDescription: string;
};

function pageImages({
  folder,
  prefix,
  alt,
  count,
  section,
}: {
  folder: string;
  prefix: string;
  alt: string;
  count: number;
  section?: string;
}) {
  return {
    heroImage: `/ireland-blinds/${folder}/${prefix}-page-hero.jpg`,
    detailImage: section
      ? {
          src: `/ireland-blinds/${folder}/${prefix}-page-${section}.jpg`,
          alt,
        }
      : undefined,
    slideshowImages: Array.from({ length: count }, (_, index) => ({
      src: `/ireland-blinds/${folder}/${prefix}-page-img${index + 1}.webp`,
      alt,
    })),
  };
}

function sectionImage(folder: string, prefix: string, section: string, alt: string) {
  return {
    src: `/ireland-blinds/${folder}/${prefix}-page-${section}.jpg`,
    alt,
  };
}

export const blindDetailPages: BlindDetailPageData[] = [
  {
    slug: "vertical-blinds-in-dublin-ireland",
    title: "Vertical Blinds in Dublin, Ireland",
    eyebrow: "Vertical blinds",
    description:
      "Made-to-measure vertical blinds in Dublin for homes and offices, with professional advice, accurate measuring, and expert fitting.",
    metaDescription:
      "Vertical Blinds in Dublin, Ireland for home and office windows. Priceless Blinds provides made-to-measure vertical blinds with free measuring and fitting.",
    introTitle: "Vertical Blinds in Dublin, Ireland",
    ...pageImages({
      folder: "vertical-blinds",
      prefix: "vertical-blinds",
      alt: "Vertical blinds fitted in Dublin",
      count: 11,
      section: "section",
    }),
    intro: [
      "Vertical blinds are a smart and practical choice for home and office windows in Dublin. Priceless Blinds supplies made-to-measure vertical blinds that help manage privacy, daylight, and the overall look of your space.",
      "Our team provides free measuring and fitting across Dublin, Ireland, so every blind is made to suit the exact size and shape of your windows or glass doors. Choose from a wide range of colours, textures, and finishes for a clean, professional result.",
    ],
    sections: [
      {
        title: "Vertical Blinds for Every Window",
        body: [
          "Our vertical blinds are manufactured for a precise fit and are suitable for a wide variety of window sizes. We measure carefully, customise each blind to the window, and deliver a neat finish that improves privacy and light control.",
        ],
      },
      {
        title: "Privacy and Daylight Control Solution",
        body: [
          "Vertical blinds allow you to adjust the slats throughout the day, giving you control over privacy and natural light without fully covering the window. This makes them ideal for living rooms, offices, patio doors, and larger glazed areas.",
        ],
      },
      {
        title: "Temperature Insulation",
        body: [
          "A well-fitted vertical blind can help reduce harsh sunlight and improve comfort during warmer or colder weather. It is a simple way to make rooms feel more balanced while keeping the window treatment stylish.",
        ],
      },
      {
        title: "Pet and Child Safety",
        body: [
          "We fit vertical blinds with safe, practical operation in mind. Cord and control positions are considered during installation to help keep the blind secure and suitable for family homes.",
        ],
      },
      {
        title: "Affordable Vertical Blinds",
        body: [
          "Priceless Blinds offers quality vertical blinds at competitive prices without compromising on service. From the first measurement to the final fitting, our team focuses on value, reliability, and a polished finish.",
        ],
      },
      {
        title: "Get Affordable Perfect Fit Vertical Blinds for Windows",
        body: [
          "Our affordable vertical blinds are made to cover each window cleanly and protect the privacy of your home or office. We provide professional installation so the blinds sit correctly and operate smoothly from day one.",
        ],
      },
      {
        title: "Perfect fitting Over Home and Office Windows",
        body: [
          "Every window is measured before manufacturing, helping us avoid unwanted gaps and poor alignment. Whether you need vertical blinds for a single room or a full property, we deliver a dependable made-to-measure service in Dublin.",
        ],
      },
    ],
    testimonial: {
      quote:
        "We are very happy with our bespoke vertical blinds. Neat installation, spot on with the measurement, delivered what we have agreed and good people.",
      author: "Michelle Ting Co",
    },
    warrantyTitle: "Vertical Blinds in Dublin",
    warranty: [
      "All our vertical blinds come with a workmanship warranty and a manufacturers' guarantee. Our trained team will guide you from quote to fitting and make sure you receive a professional service from start to finish.",
    ],
  },
  {
    slug: "roller-blinds-dublin-ireland",
    title: "Roller Blinds Dublin, Ireland",
    eyebrow: "Roller blinds",
    description:
      "Made-to-measure roller blinds in Dublin with clean styling, durable fabrics, and professional measuring and fitting.",
    metaDescription:
      "Roller Blinds Dublin, Ireland from Priceless Blinds. Made-to-measure roller blinds with free measuring, fitting, blackout options, and durable fabrics.",
    introTitle: "Made to Measure Roller Blinds in Dublin, Ireland",
    ...pageImages({
      folder: "roller-blinds",
      prefix: "roller-blinds",
      alt: "Roller blinds fitted in Dublin",
      count: 14,
    }),
    intro: [
      "Priceless Blinds supplies made-to-measure roller blinds for homes and offices across Dublin, Ireland. Each blind is measured accurately and fitted with care so your windows look clean, modern, and complete.",
      "Roller blinds are a versatile option for everyday privacy, sunlight control, and interior style. With a wide choice of colours, textures, blackout fabrics, and practical finishes, they suit bedrooms, kitchens, living spaces, and office windows.",
    ],
    sections: [
      {
        title: "Free Window Measuring of Roller Blinds All Over Dublin, Ireland",
        body: [
          "Our team provides free window measuring for roller blinds throughout Dublin. We visit your property, take accurate measurements, help you choose the right fabric, and prepare the blinds for a precise made-to-measure fit.",
        ],
      },
      {
        title: "Blackout Roller Blinds",
        body: [
          "Blackout roller blinds are ideal for bedrooms, nurseries, and media rooms where reduced daylight and privacy matter. They help create a calmer room while keeping the window finish simple and elegant.",
        ],
      },
      {
        title: "Textured Roller Blinds",
        body: [
          "Textured roller blinds add depth and character to a window without making the room feel busy. They are a strong choice when you want a practical blind that also complements your interior design.",
        ],
      },
      {
        title: "Waterproof Roller Blinds",
        body: [
          "Waterproof roller blinds are a reliable solution for kitchens, bathrooms, and moisture-prone spaces. They are easy to clean, durable in daily use, and designed to keep their appearance for longer.",
        ],
      },
      {
        title: "Thermal Roller Blinds",
        body: [
          "Thermal roller blinds help reduce glare and improve comfort during changing weather. Their insulating qualities make them a practical option for rooms that need better heat and light control.",
        ],
      },
      {
        title: "Roller Blinds Dublin, Ireland",
        body: [
          "Our roller blinds in Dublin are made for long-lasting performance and a neat finish. Whether you need a single blind or a full home installation, Priceless Blinds delivers professional measuring, fitting, and dependable advice.",
        ],
      },
      {
        title: "Exceptionally Made Roller Blinds in Dublin, Ireland",
        body: [
          "We offer a wide range of customised roller blinds in Dublin, from subtle neutral fabrics to bold printed textures. Every blind is manufactured to suit your window size and fitted to give your home or office a polished look.",
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
      author: "Taz Hussein",
    },
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and our team will be happy to help.",
      "Our roller blinds come with a manufacturing guarantee and workmanship warranty.",
    ],
  },
  {
    slug: "roman-blinds-in-dublin-ireland",
    title: "Roman Blinds in Dublin, Ireland",
    eyebrow: "Roman blinds",
    description:
      "Roman blinds in Dublin with soft fabric finishes, made-to-measure fitting, and a refined look for homes and offices.",
    metaDescription:
      "Roman Blinds in Dublin, Ireland from Priceless Blinds. Fabric Roman blinds with free measuring, fitting, blackout options, colours, and patterns.",
    introTitle: "Free Measuring and Fitting in Ireland",
    ...pageImages({
      folder: "roman-blinds",
      prefix: "roman-blinds",
      alt: "Roman blinds fitted in Dublin",
      count: 5,
      section: "section",
    }),
    intro: [
      "Priceless Blinds provides free measuring and fitting for Roman blinds in Dublin and across Ireland. Our team helps you choose the right fabric, pattern, and finish, then fits each blind neatly to your window.",
      "Roman blinds bring a softer, more tailored look than standard blinds. They work well in living rooms, bedrooms, dining rooms, and offices where comfort, privacy, and style are equally important.",
    ],
    sections: [
      {
        title: "Quality Manufactured Roman in Blinds Dublin",
        body: [
          "Our Roman blinds are manufactured with quality fabrics and careful attention to detail. They add warmth to a room while helping control privacy, sunlight, and insulation throughout the year.",
        ],
      },
      {
        title: "Fantastic Fabric Blinds",
        body: [
          "We offer a wide selection of Roman blind fabrics, including plain, textured, and patterned options. Each fabric is chosen to help you match your blinds with the colour and character of your interior.",
        ],
      },
      {
        title: "Roman Fold Style Blinds",
        body: [
          "Roman blinds fold into soft horizontal layers when raised, creating a classic and elegant finish. This fold style makes them especially suitable for rooms where you want a warmer, more decorative window treatment.",
        ],
      },
      {
        title: "Unique Pattern and Colors",
        body: [
          "Choose from a broad range of colours, prints, and textures to suit your home or office. Our team can guide you toward a Roman blind fabric that fits your room and still performs well every day.",
        ],
      },
      {
        title: "Blackout Roman Blinds",
        body: [
          "Blackout Roman blinds are a strong option for bedrooms and private spaces. They help reduce unwanted daylight, support better rest, and give the room a comfortable, finished feel.",
        ],
      },
      {
        title: "Stylish Roman Blinds in Dublin, Ireland",
        body: [
          "Our stylish Roman blinds in Dublin combine fabric quality with accurate measuring and fitting. They are made to suit each window and help improve both the appearance and comfort of your room.",
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
      author: "Taz Hussein",
    },
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and we will be happy to help.",
      "Our roman blinds come with a manufacturing guarantee and workmanship warranty.",
    ],
  },
  {
    slug: "vision-blinds-in-dublin-ireland",
    title: "Vision Blinds in Dublin, Ireland",
    eyebrow: "Vision blinds",
    description:
      "Vision blinds in Dublin, also known as day and night blinds, for modern privacy, light control, and made-to-measure fitting.",
    metaDescription:
      "Vision Blinds in Dublin, Ireland from Priceless Blinds. Day and night blinds with free measuring, fitting, privacy control, and modern fabric finishes.",
    ...pageImages({
      folder: "vision-blinds",
      prefix: "vision-blinds",
      alt: "Vision blinds fitted in Dublin",
      count: 5,
      section: "section",
    }),
    intro: [
      "Vision blinds, also known as day and night blinds, are a modern choice for homes and offices in Dublin. Their alternating fabric layers allow you to manage daylight and privacy with a smooth, contemporary finish.",
      "Priceless Blinds supplies made-to-measure Vision blinds at competitive prices across Dublin, Ireland. We help you choose the right colour and fabric, then measure and fit the blinds for a clean result.",
    ],
    sections: [
      {
        title: "Perfect Fit Vision Blinds in Dublin, Ireland",
        body: [
          "Our Vision blinds are made to fit your windows accurately, giving you a smart finish with practical light control. Professional measuring and fitting help the blinds sit correctly and operate smoothly.",
        ],
      },
      {
        title: "Free Measuring and Fitting option",
        body: [
          "Priceless Blinds offers free measuring and fitting for Vision blinds and other blind types across Dublin. Book an appointment and our team will visit your property to measure your windows and advise on the best option.",
        ],
      },
      {
        title: "Exceptional Quality Vision Blinds at Affordable Rates",
        body: [
          "We supply quality Vision blinds at affordable rates without reducing the standard of service. The result is a stylish, durable window covering that works well in modern homes and office spaces.",
        ],
      },
      {
        title: "Complete Blackout Option",
        body: [
          "Vision blinds can be adjusted for stronger privacy and reduced light when needed. For bedrooms and private rooms, our team can guide you toward fabric choices that support better light control.",
        ],
      },
      {
        title: "Amazingly Printed and Textured",
        body: [
          "Choose from printed, textured, and plain Vision blind fabrics to match your interior. Each option is selected for appearance, function, and long-term everyday use.",
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
      author: "Taz Hussein",
    },
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and our team will be happy to help.",
    ],
  },
  {
    slug: "velux-blinds-in-dublin-ireland",
    title: "Velux Blinds in Dublin, Ireland",
    eyebrow: "Velux blinds",
    description:
      "Velux blinds in Dublin for roof windows, with blackout, thermal, privacy, and colour options fitted professionally.",
    metaDescription:
      "Velux Blinds in Dublin, Ireland from Priceless Blinds. Roof window blinds with blackout, thermal, privacy, colour options, free measuring and fitting.",
    introTitle: "Velux Blinds in Dublin, Ireland",
    ...pageImages({
      folder: "velux-blinds",
      prefix: "velux-blinds",
      alt: "Velux blinds fitted in Dublin",
      count: 7,
      section: "section",
    }),
    intro: [
      "Velux blinds are designed to cover roof windows cleanly where curtains or standard blinds are not suitable. Priceless Blinds supplies and fits Velux blinds in Dublin, helping you manage overhead light, privacy, and comfort.",
      "Our range includes blackout Velux blinds, thermal options, and a wide choice of colours. Each blind is measured for the window and fitted professionally so it works smoothly and looks complete.",
    ],
    sections: [
      {
        title: "Free fitting and Measuring option All Over Dublin",
        body: [
          "We provide free measuring and fitting for Velux blinds across Dublin. Our team visits your property, checks the roof window size, and recommends the most suitable option for your room.",
        ],
      },
      {
        title: "Blackout Velux Blinds",
        body: [
          "Blackout Velux blinds are ideal for bedrooms, attic rooms, and spaces where strong daylight needs to be reduced. They help create a darker, more comfortable room while keeping the roof window easy to use.",
        ],
      },
      {
        title: "Colorful Velux Blinds",
        body: [
          "Our Velux blinds are available in a range of colours to suit your interior. Whether you prefer a soft neutral or a stronger shade, we can help you choose a finish that fits the room.",
        ],
      },
      {
        title: "Privacy Control Statement",
        body: [
          "Velux blinds help improve privacy in rooms with roof windows while still allowing you to control daylight. They are a practical and reliable choice for homes throughout Dublin.",
        ],
      },
      {
        title: "Thermal Velux Blinds",
        body: [
          "Thermal Velux blinds can help reduce glare and support better temperature control. They are especially useful for rooms that receive direct sunlight or feel exposed during changing weather.",
        ],
      },
      {
        title: "Priceless Blinds Will Provide You the Ultimate Solution of Velux Blinds",
        body: [
          "Priceless Blinds provides dependable Velux blind solutions for roof windows in Dublin. From product selection to fitting, our team focuses on quality materials, accurate measurements, and a tidy final result.",
        ],
      },
      {
        title: "Affordable Price of Velux Blinds",
        body: [
          "We offer Velux blinds at competitive prices while maintaining professional service and reliable product quality. Our team can guide you through the available options and help you choose the right blind for your budget.",
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
      author: "Taz Hussein",
    },
    warrantyTitle: "Ready to order your ideal Velux blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and we will be happy to help.",
      "Our Velux blinds come with a manufacturing guarantee and workmanship warranty.",
    ],
  },
  {
    slug: "conservatory-blinds-in-dublin",
    title: "Conservatory Blinds in Dublin",
    eyebrow: "Conservatory blinds",
    description:
      "Conservatory blinds in Dublin for windows and doors, with made-to-measure fitting, light control, and improved comfort.",
    metaDescription:
      "Conservatory Blinds in Dublin from Priceless Blinds. Made-to-measure conservatory blinds for doors and windows with free measuring, fitting, and delivery.",
    ...pageImages({
      folder: "conservatory-blinds",
      prefix: "conservatory-blinds",
      alt: "Conservatory blinds fitted in Dublin",
      count: 7,
      section: "section1",
    }),
    intro: [
      "Conservatory blinds help make your space more comfortable, private, and visually complete. Priceless Blinds supplies made-to-measure conservatory blinds in Dublin for windows, doors, and larger glazed areas.",
      "Our blinds are designed to reduce glare, manage sunlight, and improve the look of your conservatory. With professional measuring and fitting, each blind is made to suit the exact shape and size of the space.",
    ],
    sections: [
      {
        title: "Perfect Fit Blinds for Doors",
        body: [
          "Conservatory blinds can be fitted to doors as well as windows, giving you a consistent finish across the room. We measure carefully so the blinds sit neatly and provide practical privacy without affecting everyday use.",
        ],
      },
      {
        title: "Sophisticated Blinds",
        body: [
          "Our conservatory blinds are available in colours and finishes that can complement both traditional and contemporary interiors. They add a refined look while keeping the room useful throughout the day.",
        ],
      },
      {
        title: "Exceptionally Manufactured",
        body: [
          "Priceless Blinds manufactures conservatory blinds using durable materials selected for daily performance. The blinds are designed to look good, operate smoothly, and handle regular use in bright glazed spaces.",
        ],
      },
      {
        title: "Long time Usage Option",
        body: [
          "Quality materials and accurate fitting help our conservatory blinds remain reliable over time. They are a strong option for homeowners who want a practical window covering that also improves comfort.",
        ],
      },
      {
        title: "Free Measuring and Installation Option",
        body: [
          "We offer free measuring and installation for conservatory blinds in Dublin. Our team checks every window and door, prepares the blinds to size, and fits them carefully to reduce gaps and improve the finish.",
        ],
      },
      {
        title: "Free Shipping Services",
        body: [
          "Priceless Blinds provides free delivery for ordered blinds across Dublin and Ireland. Once your conservatory blinds are ready, we deliver and fit them professionally so your space is ready to enjoy.",
        ],
      },
    ],
    featuredSections: [
      {
        image: sectionImage(
          "conservatory-blinds",
          "conservatory-blinds",
          "section2",
          "Conservatory blinds fitted in Dublin",
        ),
        imagePosition: "left",
        sections: [
          {
            title: "Free Shipping Services",
            body: [
              "Our free shipping service makes the ordering process straightforward. From measurement to delivery and fitting, Priceless Blinds keeps the conservatory blind installation simple, professional, and dependable.",
            ],
          },
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
      author: "Taz Hussein",
    },
    warrantyTitle: "Ready to order your ideal Conservatory Blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and we will be happy to help.",
      "Our conservatory blinds come with a manufacturing guarantee and workmanship warranty.",
    ],
  },
  {
    slug: "wooden-blinds-in-dublin-ireland",
    title: "Wooden Blinds in Dublin, Ireland",
    eyebrow: "Wooden blinds",
    description:
      "Wooden blinds in Dublin for warm interiors, precise light control, natural style, and made-to-measure fitting.",
    metaDescription:
      "Wooden Blinds in Dublin, Ireland from Priceless Blinds. Made-to-measure wooden blinds with free measuring, fitting, privacy control, and natural finishes.",
    ...pageImages({
      folder: "wooden-blinds",
      prefix: "wooden-blinds",
      alt: "Wooden blinds fitted in Dublin",
      count: 8,
    }),
    intro: [
      "Wooden blinds add warmth, structure, and a premium finish to home and office windows. Priceless Blinds supplies made-to-measure wooden blinds across Dublin, Ireland, with professional measuring and fitting.",
      "They are a practical choice for privacy, daylight control, and natural interior style. With a wide selection of finishes and textures, wooden blinds can suit living rooms, bedrooms, offices, and commercial spaces.",
    ],
    sections: [
      {
        title: "Luxury Wooden Blinds with Free Measuring and Fitting option",
        body: [
          "We provide free measuring and fitting for wooden blinds in Dublin. Our team measures each window accurately, helps you choose the right finish, and fits the blinds so they sit cleanly with no unnecessary gaps.",
        ],
      },
      {
        title: "Effectively control daylight and Privacy",
        body: [
          "Wooden blinds give you flexible control over light and privacy. Adjust the slats to brighten the room, soften glare, or create a more private setting without fully closing off the window.",
        ],
      },
      {
        title: "Natural Wooden Blinds",
        body: [
          "Our natural wooden blinds are manufactured with quality materials and a refined finish. They bring texture and warmth to interiors while offering everyday function for different window sizes.",
        ],
      },
      {
        title: "Made To Measure Wooden Blinds",
        body: [
          "Every wooden blind is made to suit the exact measurements of your window. This made-to-measure approach gives a cleaner appearance and helps the blind operate smoothly after installation.",
        ],
      },
      {
        title: "Exceptionally Made Wooden Blinds",
        body: [
          "We focus on quality at every stage, from material selection to final fitting. Our wooden blinds are designed to be durable, attractive, and suitable for homes and offices throughout Dublin.",
        ],
      },
    ],
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and we will be happy to help.",
      "Contact us for a free brochure and our team will help you explore wooden blinds, finishes, textures, and other made-to-measure blind options.",
    ],
  },
  {
    slug: "pvc-waterproof-blinds-in-dublin-ireland",
    title: "PVC Waterproof Blinds in Dublin, Ireland",
    eyebrow: "PVC Waterproof Blinds",
    description:
      "PVC waterproof blinds in Dublin for kitchens, bathrooms, and moisture-prone spaces, with durable made-to-measure fitting.",
    metaDescription:
      "PVC Waterproof Blinds in Dublin, Ireland from Priceless Blinds. Waterproof blinds for kitchens and bathrooms with free measuring, fitting, and delivery.",
    ...pageImages({
      folder: "waterproof-blinds",
      prefix: "waterproof-blinds",
      alt: "PVC waterproof blinds fitted in Dublin",
      count: 7,
      section: "section",
    }),
    intro: [
      "PVC waterproof blinds are a practical choice for kitchens, bathrooms, and other moisture-prone areas. Priceless Blinds supplies made-to-measure PVC waterproof blinds in Dublin for residential and commercial windows.",
      "These blinds are durable, easy to clean, and suitable for everyday use where ordinary fabric blinds may not perform well. Our team provides professional measuring, fitting, and advice across Dublin, Ireland.",
    ],
    sections: [
      {
        title: "Order Our Broacher",
        body: [
          "Ask for our brochure to explore PVC waterproof blinds, colours, finishes, and printed options. Our team can help you choose a blind that suits your kitchen, bathroom, or commercial space.",
        ],
      },
      {
        title: "Rust Proof",
        body: [
          "PVC waterproof blinds are designed for damp environments and will not rust like some other materials. This makes them a reliable option for bathrooms, kitchens, utility rooms, and similar spaces.",
        ],
      },
      {
        title: "Moisture Resistant",
        body: [
          "Moisture resistance is one of the main benefits of PVC waterproof blinds. They can handle humid conditions while keeping the window covered, practical, and easy to maintain.",
        ],
      },
      {
        title: "Wipe clean",
        body: [
          "PVC waterproof blinds are simple to wipe clean with a cloth and suitable cleaning product. This helps them stay fresh and presentable even in rooms with regular steam, splashes, or moisture.",
        ],
      },
      {
        title: "Blackout option",
        body: [
          "Blackout PVC waterproof blinds help reduce unwanted sunlight and improve privacy. They can be adjusted when you want natural light and closed when you need stronger coverage.",
        ],
      },
      {
        title: "Hide Perfectly Home Kitchen and Bathroom Windows",
        body: [
          "Our PVC waterproof blinds are made to cover kitchen and bathroom windows neatly. They are also suitable for schools, restaurants, factories, and other commercial areas that need durable window coverings.",
        ],
      },
      {
        title: "Free Fitting and Measuring Option",
        body: [
          "Priceless Blinds provides free measuring and fitting for PVC waterproof blinds in Dublin. We measure the windows carefully, prepare the blinds to size, and install them for a clean, dependable finish.",
        ],
      },
      {
        title: "Free Delivery All Over Dublin, Ireland",
        body: [
          "We deliver ordered PVC waterproof blinds and other blind types across Dublin and Ireland. Our made-to-measure service keeps the process convenient from first enquiry to final fitting.",
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
      author: "Taz Hussein",
    },
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and we will be happy to help.",
      "Our PVC waterproof blinds come with a manufacturing guarantee and workmanship warranty.",
    ],
  },
  {
    slug: "integral-blinds-in-dublin-ireland",
    title: "Integral Blinds in Dublin Ireland",
    eyebrow: "Integral blinds",
    description:
      "Integral blinds in Dublin for clean, low-maintenance window covering between glass panes, with professional measuring and fitting.",
    metaDescription:
      "Integral Blinds in Dublin, Ireland from Priceless Blinds. Made-to-measure integral blinds with free measuring, fitting, insulation, privacy, and blackout control.",
    ...pageImages({
      folder: "integral-blinds",
      prefix: "integral-blinds",
      alt: "Integral blinds fitted in Dublin",
      count: 8,
      section: "section1",
    }),
    intro: [
      "Integral blinds are a smart window covering solution fitted between glass panes for a clean, protected finish. Priceless Blinds supplies integral blinds in Dublin for customers who want privacy, light control, and a low-maintenance design.",
      "Because the blind is enclosed within the glazing unit, it stays protected from dust and everyday handling. Our team provides guidance, measuring, and fitting for a reliable integral blind solution.",
    ],
    sections: [
      {
        title: "Why Prefer Integral Blinds?",
        body: [
          "Integral blinds sit between panes of glass, making them ideal for a neat and modern window finish. They can support insulation, privacy, and daylight control while keeping the blind mechanism protected.",
        ],
      },
      {
        title: "Quality Manufactured Integral Blinds in Dublin, Ireland",
        body: [
          "Priceless Blinds supplies quality manufactured integral blinds across Dublin, Ireland. Each solution is selected and fitted with attention to durability, appearance, and everyday ease of use.",
        ],
      },
      {
        title: "Free Measuring and Fitting of Integral Blinds in Dublin",
        body: [
          "Our team provides free measuring and fitting for integral blinds in Dublin. We assess the windows, discuss your requirements, and help ensure the final installation is accurate and professional.",
        ],
      },
      {
        title: "Integral Blinds are Good Insulator",
        body: [
          "Integral blinds can help support insulation by reducing the impact of heat and cold through the window area. They are a practical option for customers who want comfort as well as privacy.",
        ],
      },
      {
        title: "Perfect Solution for Every Window",
        body: [
          "Integral blinds work well for a wide range of window and door applications. Their enclosed design keeps the blind clean, protected, and suitable for both home and office use.",
        ],
      },
      {
        title: "A Complete Blackout Solution",
        body: [
          "For bedrooms, children's rooms, and private spaces, integral blinds can provide strong light control and privacy. They can be adjusted easily when you want daylight or closed for a more private setting.",
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
      author: "Taz Hussein",
    },
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and we will be happy to help.",
      "Our integral blinds come with a manufacturing guarantee and workmanship warranty.",
    ],
  },
  {
    slug: "metal-venetian-blinds-in-dublin",
    title: "Metal Venetian Blinds in Dublin",
    eyebrow: "Metal Venetian blinds",
    description:
      "Metal Venetian blinds in Dublin for affordable, lightweight, durable light control with made-to-measure fitting.",
    metaDescription:
      "Metal Venetian Blinds in Dublin from Priceless Blinds. Affordable lightweight Venetian blinds with free measuring, fitting, privacy control, and durable finishes.",
    ...pageImages({
      folder: "metal-venetian",
      prefix: "metal-venetian",
      alt: "Metal Venetian blinds fitted in Dublin",
      count: 8,
      section: "section1",
    }),
    intro: [
      "Metal Venetian blinds are a lightweight, durable, and affordable option for homes and offices in Dublin. Priceless Blinds supplies made-to-measure Metal Venetian blinds that provide flexible control over light and privacy.",
      "Their adjustable slats make them suitable for active spaces such as kitchens, offices, living rooms, and commercial interiors. We provide professional measuring, fitting, and delivery across Dublin and Ireland.",
    ],
    sections: [
      {
        title: "Quality Material Made Metal Venetian Blinds",
        body: [
          "Our Metal Venetian blinds are manufactured from quality materials for a crisp finish and reliable daily use. They are designed to be practical, easy to adjust, and suitable for a wide range of window sizes.",
        ],
      },
      {
        title: "Huge Variety of Colors",
        body: [
          "Choose from a broad range of colours to match your interior style. Whether you want a subtle finish or a stronger accent, our team can help you select the right Metal Venetian blinds for your space.",
        ],
      },
      {
        title: "Economy Metal Venetian Blinds",
        body: [
          "Metal Venetian blinds offer strong value because they are affordable, durable, and easy to maintain. They give homes and offices a smart appearance without exceeding the budget.",
        ],
      },
      {
        title: "Fire Retardant Window Protection",
        body: [
          "Metal Venetian blinds provide an additional layer of protection and durability for window areas. Their material quality makes them especially useful in commercial settings where long-lasting performance matters.",
        ],
      },
      {
        title: "Perfect Fit Solution",
        body: [
          "With professional measuring and fitting, your Metal Venetian blinds are made to sit neatly against the window. This helps avoid visible gaps and gives the installation a balanced, professional look.",
        ],
      },
      {
        title: "Best Insulator of Heat",
        body: [
          "Metal Venetian blinds can help reduce harsh sunlight and manage heat during warmer weather. Adjusting the slats gives you practical control over glare, privacy, and comfort throughout the day.",
        ],
      },
    ],
    testimonial: {
      quote:
        "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
      author: "Taz Hussein",
    },
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: [
      "Get in touch by message or call 1800911949 and we will be happy to help.",
      "Our Metal Venetian blinds come with a manufacturing guarantee and workmanship warranty.",
    ],
  },
];

export const blindDetailPageMap = Object.fromEntries(
  blindDetailPages.map((page) => [page.slug, page]),
);

export const verticalBlinds = blindDetailPageMap[
  "vertical-blinds-in-dublin-ireland"
] as BlindDetailPageData;
