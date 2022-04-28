export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const links: Array<NavItem> = [
  {
    label: "Editor",
    href: "/app/",
  },
  {
    label: "Documents",
    children: [
      {
        label: "Documentation",
        subLabel: "Read the documentation",
        href: "/docs",
      },
      {
        label: "Questions",
        subLabel: "Frequently asked questions",
        href: "/docs/faq",
      },
      {
        label: "Contact",
        subLabel: "Have a question or a concern?",
        href: "/contact",
      },
   
    ],
  },
];

export default links;