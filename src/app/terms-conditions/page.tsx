import type { Metadata } from "next";
import { PolicyPage } from "../../components/policy/policy-page";

export const metadata: Metadata = {
  title: "Terms & Conditions - Priceless Blinds",
  description:
    "We reserve the right to change the conditions of use at any time. We advise you to review the conditions of use on a regular basis.",
};

const sections = [
  {
    paragraphs: [
      "We reserve the right to change the conditions of use at any time. We advise you to review the conditions of use on a regular basis. Accessing and using this website after such changes have been posted constitutes acceptance by you of these conditions.",
    ],
  },
  {
    title: "Disclaimer",
    paragraphs: [
      "Priceless Blinds will take every care and precaution to ensure that the content and information published on this website is accurate and up-to-date. However, we cannot guarantee the accuracy of the content or information contained on these pages. Any person using the information provided does so entirely at their own risk. Please verify the accuracy of any information before acting upon it. Priceless Blinds also reserves the right to change information at any time without notice.",
    ],
  },
  {
    title: "Applicable law",
    paragraphs: [
      "The laws of Ireland govern these conditions of use, and you agree that Irish courts shall have exclusive jurisdiction in any dispute. Any personal data collected through this website will be treated as confidential in line with the principles of the General Data Protection Regulation (GDPR).",
    ],
  },
  {
    title: "Copyright and neighboring rights",
    paragraphs: [
      "The material featured on this site is subject to copyright protection unless otherwise indicated. Copyright-protected material (other than the Priceless Blinds logo) may be reproduced free of charge in any format or medium for research, private study, web-based discussion, or internal circulation within an organisation. This is subject to the material being reproduced accurately and not used in a misleading context. Where any copyright-protected items on this site are republished or copied to others, the source of the material must be identified and the copyright status acknowledged.",
      "The permission to reproduce copyright-protected material does not extend to any material on this site identified as being the copyright of a third party. For further information on copyright policy and licensing arrangements, please contact us. The copying and use of the Priceless Blinds logo is not permitted without prior approval from Priceless Blinds.",
    ],
  },
  {
    title: "Virus protection",
    paragraphs: [
      "We make every effort to check and test material at all stages of production. However, it is always wise for users to run an antivirus program on all material downloaded from the internet. Priceless Blinds cannot accept responsibility for any loss, disruption, or damage to your data or computer system that may occur while using material from this website.",
    ],
  },
  {
    title: "Links to and from other websites",
    paragraphs: [
      "Priceless Blinds is not responsible for the content or reliability of external websites and does not necessarily endorse the views expressed within them. Links to external sites should not be taken as endorsement of any kind. We cannot guarantee that these links will work all the time, and we have no control over the availability of the linked pages.",
      "Priceless Blinds encourages users to establish hypertext links to the site. You do not have to ask permission to link directly to pages hosted on the website. However, permission must be obtained if you intend to use our logo.",
      "if you have any further query please contact us at info@pricelessblinds.ie",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      eyebrow="Priceless Blinds"
      description="We reserve the right to change the conditions of use at any time."
      sections={sections}
    />
  );
}
