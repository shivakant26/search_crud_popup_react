import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import { dashboardRoute } from "../constant";

const DashBoard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="dashboard">
        <Row>
          <Col xm={12} sm={12} md={3}>
            <div className="sidebar">
              <div className="profile_image">
                <img
                  src={require("../assets/images/profile.jpg")}
                  alt="profile_image"
                />
              </div>
              <ul>
                {dashboardRoute?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={activeIndex === index ? "active" : ""}
                      onClick={() => setActiveIndex(index)}
                    >
                      <Link to={item.slug}>{item.linkName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col xm={12} sm={12} md={9}>
            <div className="dashboard_content">
              {location.pathname === "/dashboard" ? (
                <>
                  <div className="dashboard_index">
                    <h2>Dashboard</h2>
                  </div>
                </>
              ) : (
                <Outlet />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashBoard;
