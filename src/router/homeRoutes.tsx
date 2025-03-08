import { Home } from "@/components/pages/Home";
import { Setting } from "@/components/pages/Setting";
import { UserManagement } from "@/components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "",
    chldren: <Home />,
  },
  {
    path: "user_management",
    chldren: <UserManagement />,
  },
  {
    path: "setting",
    chldren: <Setting />,
  },
];
