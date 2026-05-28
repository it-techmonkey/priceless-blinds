export type BlogPost = {
  slug: string;
  title: string;
  articleTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
};

export const trustParagraph =
  "Several reasons you will see behind selecting the Priceless Blinds Dublin, Ireland. We are the most professional and reliable solution providers all over Dublin, Ireland. We have a vast variety available of window blinds with perfect fitting and measuring options. We have years of experience in the relevant field and we assure you to deliver quality manufactured window blinds on your doorstep without any delay in time. Book your appointment with Priceless blinds in Dublin, Ireland, and our professional team will be at your doorstep for measuring.";

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-made-window-blinds-shutters-in-dublin-ireland",
    title: "Custom Made Window Blinds & Shutters in Dublin & Ireland",
    articleTitle: "Custom Made Window Blinds & Shutters in Dublin & Ireland",
    metaDescription:
      "Priceless Blinds Dublin Ireland blinds offers a wide range of quality blinds home office windows. We provide Custom Made Window Blinds & Shutters in Dublin.",
    image: "/blog/blog1/blog1-hero-img.jpg",
    imageAlt: "Custom made window blinds and shutters in Dublin and Ireland",
    sections: [
      {
        title: "Custom Made Window Blinds",
        paragraphs: [
          "Priceless Blinds Dublin Ireland blinds offers a wide range of quality blinds for covering your home office windows perfectly at affordable prices. We will assure you the quality of the manufactured all blinds type will be exceptional and we will also give you a vast choice for the selection of desired color and printed textures. You are free to choose our quality service anytime you want and our professional team is always ready to provide you with the best and effective solution at your doorstep. Our stylish and impressive window blinds options are listed below and choose whatever you like for the windows.",
        ],
      },
      {
        title: "Wooden Venetian blinds",
        paragraphs: [
          "Priceless Blinds has specially designed wooden blinds which are considered the best option to enhance the interior of your house. We are specialized in manufacturing quality made wooden blinds all over Dublin, Ireland. We assure you that our manufactured window blinds are exceptional in quality and long-lasting solutions for home windows. Wooden blinds are considered the best insulator and they will help out the area to maintain its perfect temperature respectively. All the way you will get the finest solution for your home and office windows from Priceless Blinds in Dublin, Ireland. If you are willing to install this incredible solution over commercial windows, you are going to make the best decision. We will deliver the wooden blinds with accurate measuring according to your home and office windows at your doorstep.",
          "Priceless Blinds is one of the trusted names in selling quality manufactured blinds in Dublin, Ireland for the last many years. Our leading wooden blinds , vertical blinds , Integral Blinds , Conservatory Blinds , Metal Venetian blinds , and many others are preferred all over Dublin, Ireland.",
        ],
      },
    ],
  },
  {
    slug: "window-designer-blinds-dublin-incredible-value",
    title: "Window designer blinds Dublin, Incredible Value",
    articleTitle: "Window designer blinds Dublin, Incredible Value",
    metaDescription:
      "Priceless Blinds is one of the trusted window designer blinds Dublin, Ireland. offering quality manufactured window blinds all over Dublin at affordable rates.",
    image: "/blog/blog2/blog2-hero-img.png",
    imageAlt: "Window designer blinds Dublin incredible value",
    sections: [
      {
        title: "Window designer blinds Dublin",
        paragraphs: [
          "Priceless Blinds is one of the trusted window designer blinds Dublin , Ireland. We are offering quality manufactured window blinds all over Dublin at affordable rates. We have all types of windows covering treatments for office and home windows. We have rapidly grown our trust in the local market of Dublin, Ireland among our valued customers by delivering the perfect window blinds solution. We proudly present reliable window blind solutions for home and office windows that will be highly effective to hide any type of bad impression of the windows. At Priceless Blinds Dublin Ireland, we always prefer to provide long-lasting, reliable, and quality manufactured window blinds for commercial or residential buildings. We provide made-to-measure window blinds in Dublin, Ireland. We have a wide range of styles, finishes, and materials for the specific interior respectively. Our quality manufactured window blinds treatment is cool in colors, elegant in beauty, and smart in use for every type and size of the window.",
        ],
      },
      {
        title: "Incredible Value",
        paragraphs: [
          "Priceless Blinds Dublin, Ireland will never compromise in services, and customer satisfaction is our top priority. We assure you that you will get the best value for money for our custom window blinds solutions. We have a wide stock available of Venetian Blinds, Roller Blinds, Roman Blinds , Vertical Blinds, Velux Blinds, and many others. A vast variety of blind colors are available with amazing textures printed. We offer the best and quality manufactured blinds at affordable rates all over Dublin, Ireland. You can match our given quotes and the quality of blinds with others. You will surely find us competitive in the market and you will recommend Priceless Blinds to your contact circle as well.",
          "We assure you that you will find the best quality window shades for the commercial and residential windows from Priceless blinds. We offer high-quality manufactured window blinds at affordable rates. Our reputation among our valued clients is noticeable and they also recommend Priceless Blinds to others.",
        ],
      },
    ],
  },
];

export const blogPostMap = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
);
