import type { BlindDetailData } from "../components/blinds/blind-detail-template";

export type RoomBlindPageData = BlindDetailData & {
  slug: string;
  metaDescription: string;
};

function roomImages({
  folder,
  prefix,
  alt,
  count,
  detailImage,
}: {
  folder: string;
  prefix: string;
  alt: string;
  count: number;
  detailImage?: string;
}) {
  return {
    heroImage: `/blinds-by-room/${folder}/${prefix}-page-hero.jpg`,
    detailImage: detailImage
      ? {
          src: `/blinds-by-room/${folder}/${detailImage}`,
          alt,
        }
      : undefined,
    slideshowImages: Array.from({ length: count }, (_, index) => ({
      src: `/blinds-by-room/${folder}/${prefix}-page-img${index + 1}.webp`,
      alt,
    })),
  };
}

function featuredImage(folder: string, fileName: string, alt: string) {
  return {
    src: `/blinds-by-room/${folder}/${fileName}`,
    alt,
  };
}

const commonWarranty = [
  "Our roller blinds come with a manufacturing guarantee and workmanship warranty.",
  "Priceless Blinds Dublin, Ireland is a professional and reliable window blinds provider with a wide range of made-to-measure blinds, accurate fitting options, and doorstep delivery across Dublin.",
];

const commonTestimonial = {
  quote:
    "Great service from measuring through to fitting and blinds look great. Will recommend to friends and family. Thanks guys!",
  author: "Taz Hussein",
};

export const roomBlindPages: RoomBlindPageData[] = [
  {
    slug: "dining-room-blinds",
    title: "Dining Room Blinds",
    eyebrow: "Blinds by room",
    description:
      "Dining room blinds in Dublin with custom colours, quality materials, and made-to-measure fitting for a brighter, more polished dining space.",
    metaDescription:
      "Dining Room Blinds in Dublin from Priceless Blinds. Custom dining room blinds with free measuring, fitting, daylight control, and stylish colours.",
    introTitle: "Why Choose Priceless Blinds?",
    relatedHref: "/dining-room-blinds",
    relatedLabel: "VIEW BLINDS BY ROOM",
    ...roomImages({
      folder: "dining-room",
      prefix: "dining-room",
      alt: "Dining room blinds fitted in Dublin",
      count: 6,
      detailImage: "dining-room-page-section1.png",
    }),
    intro: [
      "If you are looking for high-quality dining room blinds in Dublin, Priceless Blinds offers custom window blinds in a wide range of styles and colours. Our dining room blinds are made with quality materials and selected to complement the rest of your home decor.",
      "We help make dining areas feel brighter, smarter, and more comfortable with blinds that suit the window size, room style, and privacy needs. Customers across Dublin choose our service for reliable measuring, fitting, and made-to-measure window blind solutions.",
    ],
    sections: [
      {
        title: "Complete Daylight Control Option",
        body: [
          "Dining room blinds can help manage daylight while protecting the privacy of your home. We offer blackout and non-blackout options, allowing you to choose the right balance of brightness, shade, and comfort for the room.",
        ],
      },
      {
        title: "Perfect Quality Roller Blinds",
        body: [
          "Priceless Blinds has a large stock of stylish window blinds, including Venetian Blinds, Roller Blinds, Roman Blinds, Vertical Blinds, and many other options. We help you select a reliable solution that works well for dining room windows.",
        ],
      },
      {
        title: "Make the Dinning Room Brighter in Look",
        body: [
          "Bright colours and carefully chosen finishes can lift the look of your dining room. Our manufactured window blinds are durable, attractive, and suitable for long-term use in busy home spaces.",
        ],
      },
      {
        title: "Stylish in Look and Impressive Colors",
        body: [
          "We offer a strong choice of colours and styles so your dining room blinds can match the rest of your decor. Our team can guide you toward a finish that looks elegant and works practically every day.",
        ],
      },
      {
        title: "Free Measuring and Fitting of Window Blinds",
        body: [
          "When you choose Priceless Blinds, our professional team can visit your property, measure the windows, and fit the blinds free of cost. This gives you a clean, accurate installation without unnecessary delay.",
        ],
      },
      {
        title: "Always Available for Your Assistance",
        body: [
          "Our team is available to help you choose the right blinds for your dining room and other areas of your home. We focus on a smart, dependable solution that improves your window presentation.",
        ],
      },
    ],
    featuredSections: [
      {
        image: featuredImage(
          "dining-room",
          "dining-room-page-section2.jpg",
          "Dining room blinds with made-to-measure fitting",
        ),
        imagePosition: "left",
        sections: [
          {
            title: "Free Measuring and Fitting of Window Blinds",
            body: [
              "Our fitting service is designed to make the full process simple. From measuring the dining room windows to installing the finished blinds, Priceless Blinds helps you get a neat and reliable result.",
            ],
          },
        ],
      },
    ],
    testimonial: commonTestimonial,
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: commonWarranty,
  },
  {
    slug: "living-room-blinds",
    title: "Living Room Blinds",
    eyebrow: "Blinds by room",
    description:
      "Living room blinds in Dublin with elegant finishes, durable materials, daylight control, and professional made-to-measure fitting.",
    metaDescription:
      "Living Room Blinds in Dublin from Priceless Blinds. Beautifully crafted blinds for living rooms with free measuring, fitting, and durable finishes.",
    introTitle: "Vertical Roman Blinds for the Living Room Area",
    relatedHref: "/living-room-blinds",
    relatedLabel: "VIEW BLINDS BY ROOM",
    ...roomImages({
      folder: "living-room",
      prefix: "living-room",
      alt: "Living room blinds fitted in Dublin",
      count: 8,
      detailImage: "living-room-page-section1.jpg",
    }),
    intro: [
      "Priceless Blinds Dublin offers beautifully crafted living room blinds for homes and offices. Our manufactured window blinds are elegant, durable, and designed to add a more refined look to your living room.",
      "Living room blinds are available in different sizes, shades, and styles. They help control daylight, support better privacy, and improve the room's overall comfort while offering a modern alternative to curtains.",
    ],
    sections: [
      {
        title: "Fancy Finishes and Durable Living Room Blinds",
        body: [
          "Priceless Blinds uses quality materials to manufacture living room blinds that look stylish and last well. Choose from edge-to-edge finishes, colours, and blind types that suit the character of your home.",
        ],
      },
      {
        title: "Enhance the Grace of your Living Room Décor",
        body: [
          "Our window blinds can improve the look of your living room decor while adding everyday function. Our team visits your property, measures your windows, recommends suitable options, and provides fitting and delivery.",
        ],
      },
      {
        title: "Affordable in Prices",
        body: [
          "We offer quality Roller Blinds, Vertical Blinds, Venetian Blinds, Roman Blinds, and other living room blinds at competitive prices. Our goal is to provide durable window blinds without compromising service.",
        ],
      },
      {
        title: "Roller Blinds for Living Room Windows",
        body: [
          "Roller blinds are a popular and attractive option for living room windows. They are simple to use, neat in appearance, and suitable for customers who want a reliable and stylish window covering.",
        ],
      },
    ],
    featuredSections: [
      {
        image: featuredImage(
          "living-room",
          "living-room-page-section2.jpg",
          "Living room blinds with elegant finish",
        ),
        imagePosition: "left",
        sections: [
          {
            title: "Enhance the Grace of your Living Room Décor",
            body: [
              "With the right colour, texture, and fit, living room blinds can make the room feel more complete. Priceless Blinds helps you select a solution that is attractive, practical, and suited to daily use.",
            ],
          },
        ],
      },
    ],
    testimonial: commonTestimonial,
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: commonWarranty,
  },
  {
    slug: "bedroom-blinds",
    title: "Bedroom Blinds",
    eyebrow: "Blinds by room",
    description:
      "Bedroom blinds in Dublin for privacy, comfort, blackout control, and made-to-measure fitting in a wide choice of colours and shades.",
    metaDescription:
      "Bedroom Blinds Dublin Ireland from Priceless Blinds. Made-to-measure bedroom window blinds with free measuring, fitting, privacy, and colour options.",
    introTitle: "Bedroom Window Blinds Dublin Ireland",
    relatedHref: "/bedroom-blinds",
    relatedLabel: "VIEW BLINDS BY ROOM",
    ...roomImages({
      folder: "bedroom",
      prefix: "bedroom",
      alt: "Bedroom blinds fitted in Dublin",
      count: 9,
      detailImage: "bedroom-page-section1.jpg",
    }),
    intro: [
      "Bedroom blinds are an important part of creating a private, comfortable, and well-finished room. Priceless Blinds Dublin supplies quality window blinds for bedrooms in a wide range of modern styles and colours.",
      "Our stock includes Roman Blinds, Conservatory Blinds, Roller Blinds, Venetian Blinds, and Vertical Blinds. Each option can be made to measure for your bedroom windows, helping you achieve privacy, comfort, and a polished look.",
    ],
    sections: [
      {
        title: "How Priceless Blinds Are a Perfect Choice for Your Home?",
        body: [
          "Priceless Blinds is trusted by customers across Dublin, Ireland for quality bedroom blinds, professional measuring, and dependable fitting. We help you choose a window covering that suits your room and lifestyle.",
        ],
      },
      {
        title: "Quality Window Blinds for Bedroom Windows",
        body: [
          "We manufacture and supply quality bedroom window blinds designed to improve privacy, comfort, and room style. Our team focuses on providing a reliable solution for every bedroom window size.",
        ],
      },
      {
        title: "Local Manufactured Bedroom Window Blinds",
        body: [
          "Our locally supplied bedroom blinds combine durable quality with affordable pricing. Customers across Dublin choose Priceless Blinds for a service that is practical, professional, and easy to recommend.",
        ],
      },
      {
        title: "Perfect Solution for Improving the Décor of your Bedroom",
        body: [
          "Roman Blinds, Vertical Blinds, Venetian Blinds, and other bedroom blind options can quickly improve the decor of your room. We help you select colours and finishes that complement your bedroom style.",
        ],
      },
      {
        title: "Availability of Every Color and Shade",
        body: [
          "We offer a wide variety of colours and shades for bedroom blinds. Whether your bedroom decor is soft, neutral, bold, or modern, we can recommend a suitable window covering solution.",
        ],
      },
      {
        title: "Bedroom Window Blinds at Your Doorstep",
        body: [
          "Priceless Blinds delivers bedroom window blinds and other window blinds directly to your doorstep. Our made-to-measure service helps ensure the blinds are prepared accurately and fitted professionally.",
        ],
      },
    ],
    featuredSections: [
      {
        image: featuredImage(
          "bedroom",
          "bedroom-page-section2.jpg",
          "Bedroom blinds for privacy and comfort",
        ),
        imagePosition: "left",
        sections: [
          {
            title: "Bedroom Window Blinds at Your Doorstep",
            body: [
              "From measurement to delivery, our bedroom blinds service is built around convenience. We help you get the right blind style, size, and finish without unnecessary hassle.",
            ],
          },
        ],
      },
    ],
    testimonial: commonTestimonial,
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: commonWarranty,
  },
  {
    slug: "bathroom-blinds",
    title: "Bathroom Blinds",
    eyebrow: "Blinds by room",
    description:
      "Bathroom blinds in Dublin with moisture-resistant options, privacy control, stylish colours, and made-to-measure fitting.",
    metaDescription:
      "Bathroom Blinds in Dublin from Priceless Blinds. Quality bathroom window blinds including roller, vertical, and moisture-resistant options.",
    introTitle: "Roller and Vertical Blinds for Bathroom Windows",
    relatedHref: "/bathroom-blinds",
    relatedLabel: "VIEW BLINDS BY ROOM",
    ...roomImages({
      folder: "bathroom",
      prefix: "bathroom",
      alt: "Bathroom blinds fitted in Dublin",
      count: 8,
      detailImage: "bathroom-page-section1.webp",
    }),
    intro: [
      "Priceless Blinds Dublin is a trusted window blinds provider across Ireland, offering custom bathroom blinds for homes in Dublin. Our range includes wooden blinds, Venetian blinds, vertical blinds, roller blinds, roman blinds, and conservatory blinds.",
      "Bathroom blinds need to provide privacy while handling moisture and everyday use. Our made-to-measure bathroom blinds are designed to cover the windows neatly, add a graceful finish, and remain durable over time.",
    ],
    sections: [
      {
        title: "Perfect Fit Bathroom Blinds Dublin",
        body: [
          "Perfect fit bathroom blinds help cover the window cleanly while supporting privacy and daylight control. We measure your bathroom windows accurately so the final blinds sit neatly and look complete.",
        ],
      },
      {
        title: "Aluminum Bathroom Window Blinds Dublin",
        body: [
          "Bathroom environments are full of moisture, so durable blind materials are important. Aluminium bathroom blinds with a waterproof coating are a strong, long-lasting solution for windows exposed to steam and humidity.",
        ],
      },
      {
        title: "Affordable & Durably Manufactured Window Blinds",
        body: [
          "Priceless Blinds offers colourful, stylish, and durable bathroom window blinds at reasonable rates. Our blinds are manufactured for quality and designed to perform well in moisture-prone spaces.",
        ],
      },
      {
        title: "Stylish in Look and Colorful Window Blinds",
        body: [
          "Choose from a wide range of shades and finishes for bathroom blinds and other windows in your home. Our team can help you select a style that looks clean and suits your interior.",
        ],
      },
    ],
    featuredSections: [
      {
        image: featuredImage(
          "bathroom",
          "bathroom-page-section2.jpg",
          "Bathroom blinds with moisture-resistant finish",
        ),
        imagePosition: "left",
        sections: [
          {
            title: "Aluminum Bathroom Window Blinds Dublin",
            body: [
              "Aluminium bathroom blinds are practical for humid rooms because they are easy to maintain and made to withstand moisture. They help protect privacy while keeping the room fresh and modern.",
            ],
          },
        ],
      },
    ],
    testimonial: commonTestimonial,
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: commonWarranty,
  },
  {
    slug: "kitchen-blinds-in-ireland",
    title: "Kitchen Blinds in Ireland",
    eyebrow: "Blinds by room",
    description:
      "Kitchen blinds in Ireland with waterproof, wooden, vertical, and made-to-measure options for stylish and durable window coverage.",
    metaDescription:
      "Kitchen Blinds in Ireland from Priceless Blinds. Top-quality kitchen window blinds in Dublin with waterproof, wooden, and made-to-measure options.",
    introTitle: "Select Wooden Kitchen Blinds in Dublin",
    relatedHref: "/kitchen-blinds-in-ireland",
    relatedLabel: "VIEW BLINDS BY ROOM",
    ...roomImages({
      folder: "kitchen",
      prefix: "kitchen",
      alt: "Kitchen blinds fitted in Dublin",
      count: 12,
      detailImage: "kitchen-page-section1.webp",
    }),
    intro: [
      "Priceless Blinds Dublin, Ireland offers top-quality manufactured kitchen blinds for many types of home windows. Our kitchen window blinds are stylish, durable, and designed to give the room a cleaner finish than curtains.",
      "If your current kitchen blinds feel outdated, our fresh stock includes colourful and practical options for kitchen windows and the rest of your home. We help you choose a blind that suits the room and performs well every day.",
    ],
    sections: [
      {
        title: "Waterproof Window Blinds for Kitchen",
        body: [
          "Kitchen windows need a practical solution that can handle everyday use. Our waterproof and aluminium blind options are designed to brighten the kitchen, control daylight, and offer a durable window covering.",
        ],
      },
      {
        title: "Made-to-Measure Kitchen Blinds",
        body: [
          "Made-to-measure kitchen blinds are prepared to fit the exact size and shape of your kitchen windows. This gives a cleaner finish and helps the blinds operate smoothly after installation.",
        ],
      },
      {
        title: "Durably Manufactured Vertical Blinds for Kitchen Windows",
        body: [
          "Priceless Blinds Dublin supplies durable kitchen window blinds, including vertical blinds and other reliable options. We maintain a wide stock and guide customers toward the most suitable solution for their home.",
        ],
      },
      {
        title: "24/7 Services All Over Dublin",
        body: [
          "Our team is available to help with kitchen blinds and window blinds for the full home. You can contact Priceless Blinds for advice, product options, measuring, and fitting support across Dublin.",
        ],
      },
    ],
    featuredSections: [
      {
        image: featuredImage(
          "kitchen",
          "kitchen-page-section2.jpg",
          "Kitchen blinds made to measure",
        ),
        imagePosition: "left",
        sections: [
          {
            title: "Made-to-Measure Kitchen Blinds",
            body: [
              "A made-to-measure kitchen blind improves the final look of the room and avoids poor fitting. Priceless Blinds measures carefully and supplies kitchen blinds that match the needs of your window.",
            ],
          },
        ],
      },
    ],
    testimonial: commonTestimonial,
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: commonWarranty,
  },
  {
    slug: "office-blinds-in-dublin",
    title: "Office Blinds in Dublin",
    eyebrow: "Blinds by room",
    description:
      "Office blinds in Dublin for commercial windows, with roller, vertical, Venetian, and made-to-measure options at affordable prices.",
    metaDescription:
      "Office Blinds in Dublin from Priceless Blinds. Quality commercial window blinds with roller, vertical, Venetian, free measuring, and fitting options.",
    introTitle: "Authentic Roller and Vertical Blinds for Commercial Windows",
    relatedHref: "/office-blinds-in-dublin",
    relatedLabel: "VIEW BLINDS BY ROOM",
    ...roomImages({
      folder: "office-blinds",
      prefix: "office-blinds",
      alt: "Office blinds fitted in Dublin",
      count: 10,
      detailImage: "office-blinds-page-section1.webp",
    }),
    intro: [
      "Priceless Blinds Dublin offers quality office blinds at affordable prices for commercial and residential windows. Our blinds help improve the look of your workspace while supporting privacy, daylight control, and comfort.",
      "We supply Roman blinds, vertical blinds, Venetian blinds, roller blinds, wooden blinds, and other commercial window blind options. Orders can be delivered to your doorstep, with measuring and fitting support available across Dublin.",
    ],
    sections: [
      {
        title: "Complete Daylight Control Option",
        body: [
          "Office owners often need reliable daylight control for comfort and productivity. Roller Blinds, Aluminium Blinds, and Vertical Blinds can help reduce glare and manage heat and cold during changing weather.",
        ],
      },
      {
        title: "Enhance Life of Your Office Windows",
        body: [
          "Quality office blinds can help protect windows from harsh sunlight while improving the appearance of the workplace. Vertical Blinds, Roller Blinds, Venetian Blinds, and other options are durable choices for office interiors.",
        ],
      },
      {
        title: "Bring Elegance to Your Office Windows",
        body: [
          "Our office window blinds are available in attractive colours and styles. You can review the available options and choose a finish that suits the office environment and presents the workspace professionally.",
        ],
      },
      {
        title: "Durable in Quality Affordable in Price",
        body: [
          "Priceless Blinds provides quality office blinds at affordable rates, with free delivery and fitting support. Our made-to-measure service helps ensure each blind is prepared for the correct window size.",
        ],
      },
      {
        title: "24/7 Services all Over Dublin, Ireland",
        body: [
          "If you need advice for office blinds in Dublin, our team is available to help. We can visit your office, review the windows, and suggest the best covering options for each area.",
        ],
      },
    ],
    featuredSections: [
      {
        image: featuredImage(
          "office-blinds",
          "office-blinds-page-section2.jpg",
          "Office blinds for commercial windows",
        ),
        imagePosition: "left",
        sections: [
          {
            title: "Durable in Quality Affordable in Price",
            body: [
              "Our office blinds are made to support day-to-day commercial use while keeping costs practical. Priceless Blinds combines durable materials, accurate measuring, and professional fitting for a reliable office finish.",
            ],
          },
        ],
      },
    ],
    testimonial: commonTestimonial,
    warrantyTitle: "Ready to order your ideal roller blinds?",
    warranty: commonWarranty,
  },
];

export const roomBlindPageMap = Object.fromEntries(
  roomBlindPages.map((page) => [page.slug, page]),
);
