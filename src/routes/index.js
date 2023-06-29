import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Home from "../pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import DashBoard from "../pages/Dashboard";
import TableData from "../component/dashboard/Table";
import Post from "../component/dashboard/Posts";
import Logout from "../component/Logout";
import Login from "../component/Login";
const MainRoute = () =>{
    return(
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <Home />
              </PublicRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/dashboard/"
            element={
              <ProtectedRoutes>
                <DashBoard />
              </ProtectedRoutes>
            }
          >
            <Route
              path="table-data"
              element={
                <ProtectedRoutes>
                  <TableData />
                </ProtectedRoutes>
              }
            />
            <Route
              path="posts"
              element={
                <ProtectedRoutes>
                  <Post />
                </ProtectedRoutes>
              }
            />
            <Route
            path="logout"
            element={<Logout />}
          />
          </Route>
        </Routes>
    )
}
export default MainRoute;