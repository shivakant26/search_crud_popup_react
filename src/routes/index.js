import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Home from "../pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../component/Login";
import Layout from "../component/layout/Index";
import DashboardLayout from "../component/layout/DashboardLayout";
import { dashRouteArray } from "../utils/constant";
import PageNotFound from "../pages/404";
import LifeStyle from "../pages/LifeStyle";
import Travel from "../pages/Travel";
import Health from "../pages/Heath";

const MainRoute = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route path="*" element={<PageNotFound />} />
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          path="/life-style"
          element={
            <PublicRoutes>
              <LifeStyle />
            </PublicRoutes>
          }
        />
        <Route
          path="/travel"
          element={
            <PublicRoutes>
              <Travel />
            </PublicRoutes>
          }
        />
        <Route
          path="/health"
          element={
            <PublicRoutes>
              <Health />
            </PublicRoutes>
          }
        />
      </Route>
      <Route element={<DashboardLayout />}>
        {dashRouteArray?.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={<ProtectedRoutes>{item.component}</ProtectedRoutes>}
            >
              {item.subRoute?.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <ProtectedRoutes>{route.component}</ProtectedRoutes>
                    }
                  />
                );
              })}
            </Route>
          );
        })}
      </Route>
    </Routes>
  );
};
export default MainRoute;
