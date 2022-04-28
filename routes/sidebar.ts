import { IconType } from "react-icons";

import {
  FiBookOpen,
  FiInfo,
  FiMail
} from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const routes: Array<LinkItemProps> = [
  { name: "Documents", icon: FiBookOpen, path: "/docs" },
  { name: "Questions", icon: FiInfo, path: "/docs/faq" },
  // { name: "Contact", icon: FiMail, path: "/contact" },
];

export default routes;