import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SiteMenu, socialIconArray, tagsList } from "../utils/constant";
import NewsLatter from "../component/common/NewsLatter";
import PostCategory from "../component/common/PostCategory";
import SiteLogo from "../component/common/SiteLogo";
// import Header from "../component/Header";

const Home = () => {
  return (
    <>
      <div className="post_card_section">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
              <div className="blog">
                <img
                  src={require("../assets/images/hot-post-1.jpg.webp")}
                  alt="hot-blog-1"
                />
                <div className="overlay">
                  <div className="overlay_text">
                    <p className="category">lifestyle</p>
                    <h5>Postea senserit id eos, vivendo periculis ei qui</h5>
                    <span className="author">
                      <strong>jhon Doe</strong>
                      <span>20 April 2023</span>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <div className="blog mb-3">
                    <img
                      src={require("../assets/images/hot-post-2.jpg.webp")}
                      alt="hot-blog-2"
                    />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="category">lifestyle</p>
                        <h6>
                          Sed ut perspiciatis, unde omnis iste natus error sit
                        </h6>
                        <span className="author">
                          <strong>jhon Doe</strong>
                          <span>20 April 2023</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <div className="blog">
                    <img
                      src={require("../assets/images/hot-post-3.jpg.webp")}
                      alt="hot-blog-3"
                    />
                    <div className="overlay">
                      <div className="overlay_text">
                        <p className="category">lifestyle</p>
                        <h6>
                          Sed ut perspiciatis, unde omnis iste natus error sit
                        </h6>
                        <span className="author">
                          <strong>jhon Doe</strong>
                          <span>20 April 2023</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="recent_post_section">
        <Container>
          <Row>
            <Col md={8}>
              <div className="recent_post">
                <h2 className="heading-2">Recent posts</h2>
                <div className="recent_Cards">
                  <Row className="mb-4">
                    <Col xm={12} md={6}>
                      <Card className="recent_card">
                        <Card.Img
                          variant="top"
                          src={require("../assets/images/travel.jpg")}
                        />
                      </Card>
                    </Col>
                    <Col xm={12} md={6}>
                      <Card className="recent_card">
                        <Card.Img
                          variant="top"
                          src={require("../assets/images/travel.jpg")}
                        />
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col xm={12} md={6}>
                      <Card className="recent_card">
                        <Card.Img
                          variant="top"
                          src={require("../assets/images/travel.jpg")}
                        />
                      </Card>
                    </Col>
                    <Col xm={12} md={6}>
                      <Card className="recent_card">
                        <Card.Img
                          variant="top"
                          src={require("../assets/images/travel.jpg")}
                        />
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="life_style">
                <h2 className="heading-2">lifestyle</h2>
                <div className="life_style_cards">
                  <Row style={{ justifyContent: "space-between" }}>
                    <Col xs={12} sm={12} md={4}>
                      <Card className="lf_card">
                        <Card.Img
                          variant="top"
                          src={require("../assets/images/travel.jpg")}
                        />
                        <Card.Body>
                          <h6 className="heading-6">life style</h6>
                          <div className="card_title">
                            <a href="#">
                              Mel ut impetus suscipit tincidunt. Cum id ullum
                              laboramus persequeris.
                            </a>
                          </div>
                          <span className="author">
                            <strong>jhon Doe</strong>
                            <span>20 April 2023</span>
                          </span>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                      <Card className="lf_card">
                        <Card.Img
                          variant="top"
                          src={require("../assets/images/travel.jpg")}
                        />
                        <Card.Body>
                          <h6 className="heading-6">fashion,lifestyle</h6>
                          <div className="card_title">
                            <a href="#">
                              Mel ut impetus suscipit tincidunt. Cum id ullum
                              laboramus persequeris.
                            </a>
                          </div>
                          <span className="author">
                            <strong>jhon Doe</strong>
                            <span>20 April 2023</span>
                          </span>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sx={12} sm={12} md={4}>
                      <Card className="lf_card">
                        <Card.Img
                          variant="top"
                          src={require("../assets/images/travel.jpg")}
                        />
                        <Card.Body>
                          <h6 className="heading-6">technology</h6>
                          <div className="card_title">
                            <a href="#">
                              Mel ut impetus suscipit tincidunt. Cum id ullum
                              laboramus persequeris.
                            </a>
                          </div>
                          <span className="author">
                            <strong>jhon Doe</strong>
                            <span>20 April 2023</span>
                          </span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <h2 className="heading-small-2">Social Media</h2>
              <div className="social_media_group">
                {socialIconArray
                  ?.filter((el) => {
                    if (el.totalFollowers) {
                      return el;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <div key={index} className={`ssl_cmn ${item.extraClass}`}>
                        <span>{item.icon}</span>
                        <p>{item.totalFollowers}</p>
                        <p>Followers</p>
                      </div>
                    );
                  })}
              </div>
              <h2 className="heading-small-2">categories</h2>
              <PostCategory SiteMenu={SiteMenu} />
              <h2 className="heading-small-2">Newsletter</h2>
              <NewsLatter />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
