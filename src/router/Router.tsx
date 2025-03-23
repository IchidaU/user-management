import { FC, memo } from "react";
import { Routes, Route } from "react-router";

import { Login } from "@/components/pages/Login";
import { homeRoutes } from "./homeRoutes";
import { Page404 } from "@/components/pages/Page404";
import { HeaderLayout } from "@/components/templates/HeaderLayout";
import { LoginUserProvider } from "@/providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home">
          {homeRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<HeaderLayout>{route.chldren}</HeaderLayout>}
            />
          ))}
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
