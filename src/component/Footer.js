import { Col, Container, Row } from "react-bootstrap";
import SiteLogo from "./common/SiteLogo";
import { Link } from "react-router-dom";
import PostCategory from "./common/PostCategory";
import { SiteMenu } from "../utils/constant";
import NewsLatter from "./common/NewsLatter";
import { socialIconArray, tagsList } from "../utils/constant";
const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={3}>
              <div className="footer_site_details">
                <SiteLogo classAttr="ft-logo" />
                <p>
                  Nec feugiat nisl pretium fusce id velit ut tortor pretium.
                  Nisl purus in mollis nunc sed. Nunc non blandit massa enim
                  nec.
                </p>
                <div className="footer_social_icons">
                  <ul>
                    {socialIconArray?.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link className={item.footerbgClass} to="#javascript">
                            {item.icon}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <PostCategory SiteMenu={SiteMenu} />
            </Col>
            <Col xs={12} sm={12} md={3}>
              <div className="tags">
                {tagsList?.map((item, index) => {
                  return (
                    <a key={index} href="#javascript">
                      {item}
                    </a>
                  );
                })}
              </div>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <NewsLatter />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
