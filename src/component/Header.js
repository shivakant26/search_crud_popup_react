import { Col, Container, Row } from "react-bootstrap";
import SiteLogo from "./common/SiteLogo";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import { SiteMenu, socialIconArray} from "../utils/constant";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="header-top">
        <Container>
          <Row className="hd_top">
            <Col xs={12} sm={12} md={4}>
              <div className="social_icon">
                {socialIconArray?.map((item, index) => {
                  return <span key={index}>
                  <Link to="">{item.icon}</Link>
                  </span>
                })}
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <SiteLogo />
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="humberger_menu">
                <Hamburger
                  className={{ position: "relative" }}
                  toggled={isOpen}
                  toggle={setOpen}
                />
                {isOpen && (
                  <div className="mobile_menu">
                    <ul>
                      {SiteMenu?.filter((el) => {
                        if (el.forMobile) {
                          return el;
                        }
                      })?.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link to={item.endPoint}>{item.label}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <span>
                  <HiSearch />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header">
        <Container>
          <Row>
            <div className="site-menu">
              <ul>
                {SiteMenu?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.endPoint}>{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Header;
