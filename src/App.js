import "./App.css";
import DashBoard from "./component/Dashboard";
import Login from "./component/Login";
import TableData from "./component/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PublicRoutes from "./component/routes/PublicRoutes";
import ProtectedRoutes from "./component/routes/ProtectedRoutes";
import Logout from "./component/Logout";
// import Dropdowns from "./component/Dropdowns";
// import data, { LoanData, aboutData, serviceData, wordpressData } from "./component/data";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
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
            path="logout"
            element={<Logout />}
          />
          </Route>
        </Routes>
      </Router>
      {/* <div style={{display:"flex"}}>
        <Dropdowns data={aboutData}/>
        <Dropdowns data={LoanData}/>
        <Dropdowns data={wordpressData}/>
        <Dropdowns data={serviceData}/> 
      </div> */}
      
    </div>
  );
};

export default App;
