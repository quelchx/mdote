import { FeatureProps } from "../components/Heading/DocumentsHeading";
import { MetaState } from "../components/Layout/MetaContainer";

interface FAQProps {
  ques: string;
  ans: string;
}

export interface MetaData {
  [data: string]: MetaState;
}

export const faq: FAQProps[] = [
  {
    ques: "What is Mdote?",
    ans: "Mdote is a markdown based note taking editor. You can write regular text or markdown",
  },
  {
    ques: "Can I use it for free?",
    ans: "Mdote is free to use, if you want additional features we offer a paid membership",
  },
  {
    ques: "How do I use Mdote?",
    ans: "Mdote is free to use, if you want additional features we offer a paid membership",
  },
  {
    ques: "Why should I use Mdote?",
    ans: "Mdote is a markdown based note taking editor. You can write regular text or markdown",
  },
];

export const meta: MetaData = {
  index: {
    title: "Mdote - Home Page",
    desc: "Mdote, a simple, elegant markdown text-editor",
  },
  login: {
    title: "Login to your account",
    desc: "Mdote user login page",
  },
  register: {
    title: "Register your account",
    desc: "Mdote user registration page",
  },
  editor: {
    title: "Mdote",
    desc: "Mdote Editor - The Markdown note taking editor",
  },
  themes: {
    title: "Mdote Themes",
    desc: "Browse the latest and most popular Mdote themes",
  },
  fonts: {
    title: "Mdote Fonts",
    desc: "Browse the latest and most popular Mdote fonts",
  },
  docs: {
    title: "Mdote Documents",
    desc: "Check out Mdotes documentation",
  },
  faq: {
    title: "FAQ",
    desc: "Have a question about Mdote - Check out our frequently asked questions",
  },
  contact: {
    title: "Contact",
    desc: "Have a question or concern? Please contact us and let us know",
  },
};
