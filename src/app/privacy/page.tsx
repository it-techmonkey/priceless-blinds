import type { Metadata } from "next";
import { PolicyPage } from "../../components/policy/policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy - Priceless Blinds",
  description:
    "Privacy Policy for PricelessBlinds.ie This privacy policy has been created to better serve those concerned with how their",
};

const sections = [
  {
    paragraphs: ["Privacy Policy for PricelessBlinds.ie"],
  },
  {
    paragraphs: [
      "This privacy policy has been created to better serve those concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as defined under data protection laws, is information that can be used on its own or with other information to identify, contact, or locate an individual or to identify an individual in context. Please read our privacy policy carefully to understand how we collect, use, protect, or otherwise handle your PII in accordance with our website.",
    ],
  },
  {
    title: "What personal information do we collect?",
    paragraphs: [
      "When ordering or registering on our site, as appropriate, you may be asked to enter your name or other details to enhance your experience with PricelessBlinds.ie.",
    ],
  },
  {
    title: "When do we collect information?",
    paragraphs: [
      "We collect information from you when you fill out a form, place an order, or enter any information on our website.",
    ],
  },
  {
    title: "How do we use your information?",
    paragraphs: [
      "We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, browse the website, or use certain other features in the following ways:",
    ],
    list: ["To administer a contest, promotion, survey, or other site feature."],
  },
  {
    title: "How do we protect visitor information?",
    paragraphs: [
      "Our website is regularly scanned for security vulnerabilities to ensure your visit to our site is as safe as possible. We also use routine malware scanning.",
      "We do not currently use an SSL certificate as:",
    ],
    list: [
      "We only provide articles and general information.",
      "We never request sensitive personal or private information such as credit card details or email addresses.",
    ],
  },
  {
    title: "Do we use ‘cookies’?",
    paragraphs: [
      "We do not use cookies for tracking purposes. You can set your browser to warn you each time a cookie is sent, or you can disable cookies altogether. This can be done through your browser settings (the process may vary depending on the browser).",
      "If cookies are disabled, some features may not function as intended, but you will still be able to place orders.",
    ],
  },
  {
    title: "Third-Party Disclosure",
    paragraphs: [
      "We do not sell, trade, or transfer your Personally Identifiable Information to outside parties.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "We do not include or offer third-party products or services on our website.",
    ],
  },
  {
    title: "Google",
    paragraphs: [
      "Google’s advertising requirements can be found in their Advertising Principles, designed to ensure a positive user experience (see https://support.google.com/adwordspolicy/answer/1316548?hl=en ).",
      "While we have not currently enabled Google AdSense on our site, we may consider doing so in the future.",
    ],
  },
  {
    title: "GDPR Compliance",
    paragraphs: [
      "As a business operating in Ireland, PricelessBlinds.ie complies with the General Data Protection Regulation (GDPR). We respect your rights as a data subject and will handle your data securely and lawfully.",
    ],
  },
  {
    title: "Contacting Us",
    paragraphs: [
      "If you have any questions regarding this privacy policy, you can contact us using the information below:",
      "Priceless Blinds Ireland",
      "Website: www.PricelessBlinds.ie",
      "Email: info@pricelessblinds.ie",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      eyebrow="Priceless Blinds"
      description="Privacy Policy for PricelessBlinds.ie"
      sections={sections}
    />
  );
}
