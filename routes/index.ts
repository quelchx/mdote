import { IconType } from "react-icons";

import {
  FiHome,
  FiSettings,
  FiStar,
} from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const routes: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Your Notes", icon: FiStar, path: "/app/user/notes" },
  { name: "Settings", icon: FiSettings, path: "/app/user/settings" },
];

export default routes;