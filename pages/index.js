import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ripples from "react-ripples";
import styled from "styled-components";
import Header from "../public/UI_Components/Header";
import Button from "../public/UI_Components/Button";
import Footer from "../public/UI_Components/Footer";
const settings = {
  dots: true,
  autoplay: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  swipe: true,
  slidesToScroll: 1
};
const LandingPage = () => (
  <>
    <Header />
    <MainContainer id="home">
      <Banner>
        <div className="banner show-on-scroll">
          <div className="banner-content">
            <h1>
              We transform the <br />
              way you Procure, Market, Operate & Sell
            </h1>
            <p>
              We design amazing user experiences <br />
              that win over your customers
            </p>
            <Ripples color="rgba(251,251,251,0.5)" during={1200}>
              <Button
                text="Download App"
                borderRadius="24px"
                padding="24px"
                width="fit-content"
                type="primary"
                marginTop="30px"
                fontSize="16px"
                href="#downLoadApp"
              />
            </Ripples>
          </div>
          <div className="banner-image  show-on-scroll">
            <img src="/images/banner/bannerImage1x.png" alt="bannerImage" />
          </div>
          <div className="banner-content2">
            <div className="banner-content2Image">
              <img src="/images/banner/bannerImage2.png" alt="bannerImage" />
            </div>
            <div className="banner-content2Desc">
              <h2>
                Complete back <br />
                to back business
              </h2>
              <p>
                In today’s hyper-competitive market, your network defines your
                business. You must reach out to a maximum number of people for
                even a minimum scope of expansion. At Aggrow, we showcase your
                products online to a wide customer base. You can focus on
                expanding your business, while we take care of the operations.
                <br />
                <br />
                We, at Aggrow, aim to deliver the best quality products at
                competitive prices to our buyers. Our team of product experts
                have a vast experience in managing the supply chain. Along with
                a host of services & fulfilment options and cutting-edge
                technology we ensure our buyers a smooth experience.
              </p>
              <Ripples color="rgba(255, 103, 0, 0.2)" during={1600}>
                <Button
                  text="Connect with us"
                  type="orange"
                  height="42px"
                  padding="24px"
                  width="fit-content"
                  href="mailto:cs@aggrow.biz"
                />
              </Ripples>
            </div>
          </div>
        </div>
      </Banner>

      <AboutUs id="aboutus">
        <div className="about-content show-on-scroll">
          <h2>About Us</h2>
          <p>
            We are a unique digital platform allowing buyers to consolidate
            products, and procure their business needs efficiently.
          </p>
          <h5>
            We provide our sellers a unique digital platform and expose their
            products all stakeholders in the supply chain.
          </h5>
          <div className="about-count">
            <div className="about-countItem">
              <h2>100+</h2>
              <span>Categories</span>
            </div>
            <div className="about-countItem">
              <h2>100+</h2>
              <span>Categories</span>
            </div>
            <div className="about-countItem">
              <h2>100+</h2>
              <span>Categories</span>
            </div>
            <div className="about-countItem">
              <h2>100+</h2>
              <span>Categories</span>
            </div>
          </div>
          <div className="about-vision">
            <div className="about-visionItem">
              <div className="about-visionIcon">
                <img src="/images/banner/vision1.png" alt="vision1" />
              </div>
              <h2>Our Mission</h2>
              <p>
                Build and operate an efficient platform, deploying state of the
                art technology to aggregate the products and services required
                for buyers and sellers to effectively operate their business.
              </p>
            </div>
            <div className="about-visionItem">
              <div className="about-visionIcon">
                <img src="/images/banner/vision2.png" alt="vision1" />
              </div>
              <h2>Our Vision</h2>
              <p>
                To connect all the stakeholders of the supply chain with the
                necessary products, logistics and support to effeciently run
                their business.
              </p>
            </div>
          </div>

          <div className="about-location">
            <h2>We can support you no matter where you are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <div className="about-worldMap">
              <img src="/images/banner/worldMap.png" alt="worldMap" />
            </div>
          </div>
        </div>
      </AboutUs>

      <ValueProposition id="buyers">
        <div className="content">
          <h2>Value proposition</h2>
          <div className="content-list">
            <ul>
              <h2>Buyers</h2>
              <li>
                Browse various agri-commodities and more from across the
                country, on a single platform.
              </li>
              <li>Transparent pricing and payment terms.</li>
              <li>Get certified and avail credit facilities.</li>
              <li>Real time order tracking and support.</li>
              <li>Assured product quality and timely order fulfilment.</li>
              <li>
                With our various types of fulfilment, order as much as you need,
                as and when you need.
              </li>
            </ul>
            <ul>
              <h2>Sellers</h2>
              <li>
                Exposure to buyers across the country, reduced intermediaries
                and better margins.
              </li>
              <li>
                With our various types of fulfilments, we enable you to cater to
                all the stakeholders in supply chain.
              </li>
              <li>Seek expert marketing advice and sell strategically.</li>
              <li>Real time order tracking and support.</li>
              <li>
                Focus on expanding in your business, while we take care of
                operations.
              </li>
              <li>Receive payments without any delays or hassles.</li>
            </ul>
          </div>
        </div>
      </ValueProposition>
      <Fullfillment>
        <div className="content" id="explore">
          <h2>Our Fullfilment Model</h2>
          <p>
            Our unique fulfilment models provide a larger exposure to our
            sellers, and lets our buyers focus on expanding their business while
            we take care of the operations.
          </p>
          <div className="operation">
            <div className="operation-steps">
              <div className="operation-content">
                <div className="operation-icon">
                  <span
                    className="iconify"
                    data-icon="ph:truck-light"
                    data-inline="false"
                  ></span>
                </div>

                <h3>Explore products and buy</h3>

                <p>
                  Browse and choose from a wide range of products across
                  categories. Add the products to your cart, and place order.
                  Once we confirm the order, proceed to make payment. We will
                  ensure an efficient and on-time delivery.
                </p>
                <ul>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Explore Categories
                  </li>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Choose your products
                  </li>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Order your products
                  </li>
                </ul>
              </div>
              <div className="operation-image show-on-scroll">
                <img
                  src="/images/FulfillmentModel/operation1.png"
                  alt="operation1"
                />
              </div>
            </div>
            <div className="operation-steps">
              <div className="operation-content">
                <div className="operation-icon">
                  <span
                    className="iconify"
                    data-icon="ph:truck-light"
                    data-inline="false"
                  ></span>
                </div>
                <h3>Route sale</h3>
                <p>
                  Browse for trucks arriving to your location from various
                  places, choose a preferred date of dispatch and add products
                  to your cart, and place order. Once we confirm the order,
                  proceed to make payment. We will ensure an efficient and
                  on-time delivery.
                </p>
                <ul>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Explore Categories
                  </li>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Choose your products
                  </li>
                  <li id="splitDelivery">
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Order your products
                  </li>
                </ul>
              </div>
              <div className="operation-image show-on-scroll">
                <img
                  src="/images/FulfillmentModel/operation2.png"
                  alt="operation1"
                />
              </div>
            </div>

            <div className="operation-steps">
              <div className="operation-content">
                <div className="operation-icon">
                  <span
                    className="iconify"
                    data-icon="ph:truck-light"
                    data-inline="false"
                  ></span>
                </div>
                <h3>Split Deliveries</h3>
                <p>
                  Liked a product but you are out of space? <br />
                  Choose our split delivery service - you can split your order
                  and choose when you want each split order to be delivered.
                </p>
                <ul>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Explore Categories
                  </li>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Choose your products
                  </li>
                  <li id="routeSale">
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Decide how and when you need them delivered
                  </li>
                </ul>
              </div>
              <div className="operation-image show-on-scroll">
                <img
                  src="/images/FulfillmentModel/operation3.png"
                  alt="operation1"
                />
              </div>
            </div>

            <div className="operation-steps">
              <div className="operation-content">
                <div className="operation-icon">
                  <span
                    className="iconify"
                    data-icon="ph:truck-light"
                    data-inline="false"
                  ></span>
                </div>
                <h3>Book space in vehicles</h3>
                <p>
                  You can have your goods delivered from one place to another by
                  booking space on our vehicles moving on specific routes. All
                  you must do is give basic details about your cargo and deliver
                  it to the nearest Aggrow Warehouse, within a specified time.
                </p>
                <ul>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Choose your location
                  </li>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Enter cargo details
                  </li>
                  <li id="createLabel">
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Book space in our vehicles
                  </li>
                </ul>
              </div>
              <div className="operation-image show-on-scroll">
                <img
                  src="/images/FulfillmentModel/operation4.png"
                  alt="operation1"
                />
              </div>
            </div>

            <div className="operation-steps">
              <div className="operation-content">
                <div className="operation-icon">
                  <span
                    className="iconify"
                    data-icon="ph:truck-light"
                    data-inline="false"
                  ></span>
                </div>
                <h3>Private label</h3>
                <p>
                  Choose from a wide range of quality products and opt for our
                  private labelling services to get great products delivered in
                  your own brand.
                </p>
                <ul>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Explore products available for private lable
                  </li>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Upload your design
                  </li>
                  <li>
                    <span
                      className="iconify"
                      data-icon="ri:checkbox-circle-fill"
                      data-inline="false"
                    ></span>
                    Get the products delivered in your brand
                  </li>
                </ul>
              </div>
              <div className="operation-image show-on-scroll">
                <img
                  src="/images/FulfillmentModel/operation5.png"
                  alt="operation1"
                />
              </div>
            </div>
          </div>
        </div>
      </Fullfillment>

      <CarSeller>
        <div className="carSeller">
          <h2>Other value added services</h2>
          <p style={{ display: "none" }}>
            We provide you a platform to sell to an international community of
            buyers and take care of all the operations
          </p>
          <div className="carSeller-process">
            <div className="carSeller-count">
              <span>1</span>
              <div className="carSeller-desc">
                <h3>Sample requests</h3>
                <p>
                  Want to buy a particular product, but not sure about the
                  quality? You can request for a sample.
                </p>
              </div>
            </div>
            <div className="carSeller-count">
              <span>2</span>
              <div className="carSeller-desc">
                <h3>Q & Q Services</h3>
                <p>
                  Our efficient Quality & Quantity assaying team will ensure
                  that the best quality and right quantity will always be
                  delivered to our buyers.
                </p>
              </div>
            </div>
            <div className="carSeller-count">
              <span>3</span>
              <div className="carSeller-desc">
                <h3>Warehousing</h3>
                <p>
                  Users can book space at Aggrow operated warehouses for
                  specific periods and store their goods at our warehouses for a
                  nominal charge.
                </p>
              </div>
            </div>
            <div className="carSeller-count">
              <span>5</span>
              <div className="carSeller-desc">
                <h3>Private label</h3>
                <p>
                  Choose from a wide range of quality products and opt for our
                  private labelling services to get great products delivered in
                  your own brand
                </p>
              </div>
            </div>
            <div className="carSeller-count">
              <span>4</span>
              <div className="carSeller-desc">
                <h3>Market analytics</h3>
                <p>
                  We provide market analytics to both buyers and sellers to
                  enable them to buy and sell strategically
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial"  id="downLoadApp">
            <SliderContent style={{ display: "none" }}>
              <Slider {...settings}>
                <SliderItem>
                  <h3>
                    Lorem ipsum dolor sit amet, eu velit dolor noster eos, ne
                    brute affert sadipscing est, sit ne offendit consectetuer.
                    Vidisse pertinax dignissim est an. Lorem ipsum dolor sit
                    amet, eu velit dolor noster eos, ne brute affert sadipsc
                    est, sit ne offendit consectetuer. Vidisse pertinax
                    dignissim est an.
                    <div className="icon">
                      <img src="/images/banner/comment1.png" alt="comment1" />
                    </div>
                  </h3>
                  <div className="profile">
                    <div className="profile-image">
                      <img src="/images/banner/profileimage3.png" alt="" />
                    </div>
                    <div>
                      <h4 className="profile-name">James Ceo</h4>
                      <p className="profile-designation">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </SliderItem>
                <SliderItem>
                  <h3>
                    Lorem ipsum dolor sit amet, eu velit dolor noster eos, ne
                    brute affert sadipscing est, sit ne offendit consectetuer.
                    Vidisse pertinax dignissim est an. Lorem ipsum dolor sit
                    amet, eu velit dolor noster eos, ne brute affert sadipsc
                    est, sit ne offendit consectetuer. Vidisse pertinax
                    dignissim est an.
                    <div className="icon">
                      <img src="/images/banner/comment1.png" alt="comment1" />
                    </div>
                  </h3>
                  <div className="profile">
                    <div className="profile-image">
                      <img src="/images/banner/profileimage3.png" alt="" />
                    </div>
                    <div>
                      <h4 className="profile-name">James Ceo</h4>
                      <p className="profile-designation">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </SliderItem>{" "}
                <SliderItem>
                  <h3>
                    Lorem ipsum dolor sit amet, eu velit dolor noster eos, ne
                    brute affert sadipscing est, sit ne offendit consectetuer.
                    Vidisse pertinax dignissim est an. Lorem ipsum dolor sit
                    amet, eu velit dolor noster eos, ne brute affert sadipsc
                    est, sit ne offendit consectetuer. Vidisse pertinax
                    dignissim est an.
                    <div className="icon">
                      <img src="/images/banner/comment1.png" alt="comment1" />
                    </div>
                  </h3>
                  <div className="profile">
                    <div className="profile-image">
                      <img src="/images/banner/profileimage3.png" alt="" />
                    </div>
                    <div>
                      <h4 className="profile-name">James Ceo</h4>
                      <p className="profile-designation">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </SliderItem>
                <SliderItem>
                  <h3>
                    Lorem ipsum dolor sit amet, eu velit dolor noster eos, ne
                    brute affert sadipscing est, sit ne offendit consectetuer.
                    Vidisse pertinax dignissim est an. Lorem ipsum dolor sit
                    amet, eu velit dolor noster eos, ne brute affert sadipsc
                    est, sit ne offendit consectetuer. Vidisse pertinax
                    dignissim est an.
                    <div className="icon">
                      <img src="/images/banner/comment1.png" alt="comment1" />
                    </div>
                  </h3>
                  <div className="profile">
                    <div className="profile-image">
                      <img src="/images/banner/profileimage3.png" alt="" />
                    </div>
                    <div>
                      <h4 className="profile-name">James Ceo</h4>
                      <p className="profile-designation">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </SliderItem>
                <SliderItem>
                  <h3>
                    Lorem ipsum dolor sit amet, eu velit dolor noster eos, ne
                    brute affert sadipscing est, sit ne offendit consectetuer.
                    Vidisse pertinax dignissim est an. Lorem ipsum dolor sit
                    amet, eu velit dolor noster eos, ne brute affert sadipsc
                    est, sit ne offendit consectetuer. Vidisse pertinax
                    dignissim est an.
                    <div className="icon">
                      <img src="/images/banner/comment1.png" alt="comment1" />
                    </div>
                  </h3>
                  <div className="profile">
                    <div className="profile-image">
                      <img src="/images/banner/profileimage3.png" alt="" />
                    </div>
                    <div>
                      <h4 className="profile-name">James Ceo</h4>
                      <p className="profile-designation">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </SliderItem>
              </Slider>
            </SliderContent>

            <div className="downloadApp">
              <div className="downloadApp-desc">
                <h2>Download App</h2>
                <p>
                  We design amazing user experiences that <br />
                  win over your customers
                </p>

                <div className="appImage">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.aggrow"
                    target="_blank"
                  >
                    <img src="/images/banner/googlePlay.png" alt="" />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/aggrow/id1586095124"
                    target="_blank"
                  >
                    <img src="/images/banner/appStore.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="downloadApp-image">
                <img src="/images/banner/bannerImage1x.png" alt="bannerImage" />
              </div>
            </div>
          </div>
        </div>
      </CarSeller>
    </MainContainer>

    <Footer />
  </>
);

export default LandingPage;

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 120px;
  background-color: #f5f8f9;
  // overflow-x: hidden;
  @media only screen and (max-width: 1023px) {
    margin-top: 100px;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 70px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  background: #faf5f1;
  padding-top: 10px;

  .banner {
    max-width: 1224px;
    width: 100%;
    margin: auto;
    padding: 20px 32px;
    height: 590px;
    margin-top: 0px;
    position: relative;
    @media only screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 840px;
      padding: 20px;
    }

    &.is-visible h1 {
      transform: none;
      // opacity:1;
      // letter-spacing:0px;
    }

    &-content {
      width: 52%;
      position: absolute;
      margin-top: 30px;

      @media only screen and (max-width: 767px) {
        position: relative;
        width: 100%;
        margin-top: 0px;
      }
      & > h1 {
        font-family: Inter;
        font-weight: bold;
        font-size: 50px;
        line-height: 61px;
        color: #2f2d65;
        margin: 0px 0px 20px;
        // letter-spacing:2px;
        transition: all 4s 0.25s cubic-bezier(0, 1, 0.3, 1),
          opacity 0.3s 0s ease-out;
        will-change: transform;
        transform: translate(-10%, -100%);
        // opacity:0;
        @media only screen and (max-width: 1200px) {
          font-size: 40px;
          line-height: 50px;
        }
        @media only screen and (max-width: 1100px) {
          font-size: 34px;
          line-height: 50px;
        }
        @media only screen and (max-width: 1023px) {
          font-size: 30px;
          line-height: 45px;
        }
        @media only screen and (max-width: 767px) {
          font-size: 26px;
          line-height: 31px;
          margin: 0px 0px 10px;
        }
      }
      .primary {
        height: 48px;
      }

      & > p {
        font-family: Inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #5d5d83;
        margin: 0px 0px 30px;
        display: none;
        @media only screen and (max-width: 1200px) {
          font-size: 16px;
          line-height: 24px;
        }
        @media only screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
    &-content2 {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding: 50px;
      position: absolute;
      top: 78%;
      width: 100%;
      width: 96%;
      left: 20px;
      @media only screen and (max-width: 1023px) {
        width: 95%;
        padding: 30px;
      }

      @media only screen and (max-width: 767px) {
        flex-direction: column;
        padding: 30px 18px;
        width: 96%;
        left: 2%;
      }
    }
    &-content2Image {
      width: 236px;
      height: 236px;
      margin-right: 120px;
      @media only screen and (max-width: 1023px) {
        margin-right: 50px;
      }
      @media only screen and (max-width: 767px) {
        margin-right: 0px;
        width: 150px;
        height: 150px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-content2Desc {
      width: 52%;
      @media only screen and (max-width: 1023px) {
        width: 60%;
      }
      @media only screen and (max-width: 767px) {
        width: 100%;
        margin-top: 20px;
      }
      .react-ripples {
        border-radius: 34px;
      }
      h2 {
        font-family: Inter;
        font-weight: bold;
        font-size: 30px;
        line-height: 36px;
        color: #2f2d65;
        margin: 0px 0px 30px;
        position: relative;
        @media only screen and (max-width: 1023px) {
          font-size: 24px;
          line-height: 30px;
        }
        @media only screen and (max-width: 767px) {
          font-size: 24px;
          line-height: 29px;
        }
        &::after {
          content: "";
          left: 0px;
          bottom: -10px;
          position: absolute;
          height: 2px;
          width: 40px;
          background-color: #ff6700;
        }
      }
      p {
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #5d5d83;
        margin: 0px 0px 30px;
        @media only screen and (max-width: 1023px) {
          font-size: 13px;
          line-height: 20px;
        }
        @media only screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
    &-image {
      margin-right: -20px;
      margin-left: auto;
      width: 626px;
      opacity: 0;
      transform: translateY(10em);
      transition: transform 4s 0s cubic-bezier(0, 1, 0.3, 1),
        opacity 0.3s 0s ease-out;
      max-width: 600px;
      width: 90%;
      will-change: transform, opacity;

      &.is-visible {
        opacity: 1;
        transform: translateY(0em);
      }
      @media only screen and (max-width: 1200px) {
        width: 580px;
      }
      @media only screen and (max-width: 1023px) {
        width: 450px;
      }
      @media only screen and (max-width: 767px) {
        margin-top: 30px;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin-top: -60px;
        margin-right: -60px;
        @media only screen and (max-width: 1023px) {
          margin-top: 0px;
        }
        @media only screen and (max-width: 767px) {
          width: 117%;
          margin-top: 0px;
          margin-right: 0px;
          // margin-left: -20px;
        }
      }
    }
  }
`;

export const ValueProposition = styled.div`
  width: 100%;
  background: #fff;
  padding-top: 64px;

  @media only screen and (max-width: 1023px) {
    margin-top: 280px;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 0px;
    padding: 40px 20px 0px;
  }
  @media only screen and (max-width: 350px) {
    margin-top: 550px;
  }
  .content {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    margin-top: 0px;
    position: relative;

    @media screen and (max-width: 1024px) and (min-width: 600px) {
      padding: 0px 24px;
    }
    & > h2 {
      font-family: Inter;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #2f2d65;
      margin: 0px auto 50px;
      text-align: center;
      position: relative;
      max-width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (max-width: 1024px) and (min-width: 768px) {
        justify-content: space-between;
      }
      @media only screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 24px;
        margin: 0px auto 40px;
      }

      &::after {
        content: "";
        height: 2px;
        max-width: 40px;
        width: 100%;
        margin: auto;
        margin-top: 10px;
        background-color: #ff6700;
        @media only screen and (max-width: 767px) {
          margin-top: 6px;
        }
      }
    }
    ul {
      padding: 0px;
      margin: 0px;
      width: 40%;
      @media screen and (max-width: 1024px) {
        width: 48%;
      }
      @media only screen and (max-width: 767px) {
        width: 100%;
        margin-bottom: 30px;
      }
      & > h2 {
        font-family: Inter;
        font-weight: 500;
        font-size: 28px;
        line-height: 36px;
        color: #2f2d65;
        margin: 0px 0px 20px;
        @media only screen and (max-width: 767px) {
          font-size: 18px;
          line-height: 24px;
          margin: 0px 0px 10px;
        }
      }
      li {
        font-family: Inter;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #5d5d83;
        margin-bottom: 10px;
        padding-left: 20px;
        position: relative;
        list-style-type: none;
        @media only screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 21px;
          padding-left: 18px;
        }
        &::after {
          content: "";
          position: absolute;
          left: 0px;
          top: 10px;
          width: 8px;
          height: 8px;
          background: #ff6700;
          border-radius: 50%;
          @media only screen and (max-width: 767px) {
            width: 10px;
            height: 10px;
            top: 8px;
          }
        }
      }
    }
    .content-list {
      display: flex;
      justify-content: space-around;
      @media only screen and (max-width: 767px) {
        flex-direction: column;
      }
    }
  }
`;
export const Fullfillment = styled.div`
  width: 100%;
  background: #fff;
  padding-top: 100px;
  @media only screen and (max-width: 767px) {
    margin-top: 0px;
    padding: 10px 20px 0px;
  }
  .content {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    margin-top: 0px;
    position: relative;
    & > h2 {
      font-family: Inter;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #2f2d65;
      margin: 0px auto 40px;
      text-align: center;
      position: relative;
      max-width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media only screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 24px;
        margin: 0px auto 20px;
      }

      &::after {
        content: "";
        height: 2px;
        max-width: 40px;
        width: 100%;
        margin: auto;
        margin-top: 10px;
        background-color: #ff6700;
        @media only screen and (max-width: 767px) {
          margin-top: 6px;
        }
      }
    }
    & > p {
      font-family: Inter;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #5d5d83;
      width: 50%;
      margin: auto;
      @media only screen and (max-width: 767px) {
        width: 100%;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
  .operation {
    margin-top: 100px;
    padding: 0px 32px 64px 32px;
    @media only screen and (max-width: 767px) {
      padding: 0px 0px 30px;
      margin-top: 50px;
    }
  }
  .operation-steps {
    display: flex;
    margin-bottom: 200px;
    &:last-child {
      margin-bottom: 0px;
    }
    @media only screen and (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
      flex-direction: column-reverse;
      margin-bottom: 100px;
    }
    &:nth-child(2n) {
      flex-direction: row-reverse;
      .operation-image {
        justify-content: flex-start;
        margin-right: 30px;
        @media only screen and (max-width: 1023px) {
          margin-right: 0px;
        }
      }
      @media only screen and (max-width: 1023px) {
        flex-direction: column-reverse;
      }
    }
  }
  .operation-content {
    width: 100%;
    max-width: 390px;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
    & > h3 {
      font-family: Inter;
      font-weight: 500;
      font-size: 28px;
      line-height: 38px;
      color: #2f2d65;
      margin: 0px 0px 20px;
      @media only screen and (max-width: 1100px) {
        font-size: 22px;
        line-height: 29px;
      }
      @media only screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
        margin: 0px 0px 15px;
      }
    }
    & > p {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #5d5d83;
      margin: 0px 0px 42px;
      @media only screen and (max-width: 1100px) {
        font-size: 15px;
        line-height: 24px;
      }
      @media only screen and (max-width: 1023px) {
        text-align: center;
      }
      @media only screen and (max-width: 767px) {
        text-align: center;
        font-size: 14px;
        line-height: 22px;
        margin: 0px 0px 30px;
      }
    }
    ul {
      margin: 0px;
      padding: 0px;

      @media only screen and (max-width: 767px) {
        // display: flex;
        // flex-direction: column;
        // width: 90%;
      }
    }
    li {
      display: flex;
      align-items: center;
      font-family: Inter;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #2f2d65;
      margin-bottom: 16px;
      @media only screen and (max-width: 1100px) {
        font-size: 15px;
        line-height: 20px;
      }
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
      }
      .iconify {
        color: #ff6700;
        min-width: 24px;
        width: 24px;
        height: 24px;
        margin-right: 10px;
        @media only screen and (max-width: 767px) {
          min-width: 22px;
          width: 22px;
          height: 22px;
        }
      }
    }
  }
  .operation-image {
    opacity: 0.5;
    transform: translateY(10em);
    transition: transform 4s 0s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0s ease-out;
    max-width: 600px;
    width: 90%;
    will-change: transform, opacity;
    display: flex;
    justify-content: end;
    @media only screen and (max-width: 767px) {
      max-width: 100%;
      width: 100%;
      transform: translateY(5em);
    }
    img {
      @media only screen and (max-width: 767px) {
        width: 100%;
        height: 100%;
      }
    }
  }
  .operation-image.is-visible {
    opacity: 1;
    transform: none;
  }
  .operation-icon {
    background: #00ccc2;
    border-radius: 80px;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 30px;
    .iconify {
      width: 50px;
      height: 50px;
      color: #fff;
      @media only screen and (max-width: 767px) {
        width: 30px;
        height: 30px;
      }
    }
    @media only screen and (max-width: 767px) {
      width: 54px;
      height: 54px;
    }
  }
  .operation-image {
  }
`;

export const AboutUs = styled.div`
  width: 100%;
  background-color: #f5f8f9;
  margin-top: 400px;
  @media only screen and (max-width: 767px) {
    margin-top: 570px;
  }
  .about-content {
    max-width: 1224px;
    width: 100%;
    margin: auto;
    padding: 80px 32px 64px;
    position: relative;
    @media only screen and (max-width: 767px) {
      padding: 20px;
    }
    &.is-visible .about-count h2 {
      // animation: text 2s 1;
      @media only screen and (max-width: 767px) {
        animation: none;
      }
    }
    &.is-visible .about-visionItem {
      transform: none;
      opacity: 1;
    }
    & > h2 {
      font-family: Inter;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #2f2d65;
      margin: 0px auto 40px;
      text-align: center;
      position: relative;
      max-width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media only screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
        margin: 0px auto 20px;
      }

      &::after {
        content: "";
        height: 2px;
        max-width: 40px;
        width: 100%;
        margin: auto;
        margin-top: 10px;
        background-color: #ff6700;
      }
    }
    & > p {
      font-family: Inter;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #5d5d83;
      width: 70%;
      margin: auto;
      margin-bottom: 20px;
      @media only screen and (max-width: 767px) {
        width: 100%;
        font-size: 14px;
        line-height: 22px;
        color: #2f2d65;
        font-weight: 500;
      }
    }
    & > h5 {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #5d5d83;
      width: 50%;
      margin: 0px auto 0px;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 22px;
        width: 100%;
      }
    }
  }
  .about-count {
    display: flex;
    width: 100%;
    margin: 50px 0px 0px;
    display: none;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .about-countItem {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width: 767px) {
      width: 50%;
      flex-direction: column;
      margin-bottom: 32px;
    }
    @keyframes text {
      0% {
        color: #fff;
        transform: translateY(-40px);
      }
      30% {
        letter-spacing: 5px;
        transform: translateY(-40px);
      }
      85% {
        letter-spacing: 0px;
        transform: translateY(-40px);
      }
    }
    & > h2 {
      font-family: Inter;
      font-weight: bold;
      font-size: 50px;
      line-height: 30px;
      text-align: center;
      color: #ff6700;
      margin: 0px 0px 10px;
      background: #faf5f1;
      z-index: 1;
      @media only screen and (max-width: 767px) {
        font-size: 40px;
        line-height: 21px;
      }
    }
    & > span {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      color: #5d5d83;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
  .about-vision {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 50px 0px 0px;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .about-visionItem {
    width: 48.8%;
    background: #ffffff;
    border-radius: 20px;
    padding: 50px;
    opacity: 1;
    transform: scale(1.05) translateZ(50px);
    transition: transform 4s 0.25s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0s ease-out;
    will-change: transform;
    &:first-child {
      transform: scale(1.05) translateZ(-50px);
      transition: transform 4s 0.25s cubic-bezier(0, 1, 0.3, 1),
        opacity 0.3s 0s ease-out;
      will-change: transform;
      @media only screen and (max-width: 767px) {
        transform: translateY(-20px);
        transition: transform 5s 0.25s cubic-bezier(0, 1, 0.3, 1),
          opacity 0.3s 0s ease-out;
      }
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
      padding: 18px 16px;
      margin-bottom: 10px;
      border-radius: 16px;
      transform: translateZ(20px);
      transition: transform 5s 0.25s cubic-bezier(0, 1, 0.3, 1),
        opacity 0.3s 0s ease-out;
    }
    & > h2 {
      font-family: Inter;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #2f2d65;
      margin: 0px 0px 16px;
      position: relative;
      @media only screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
        margin: 0px 0px 12px;
      }
      &::after {
        content: "";
        left: 0px;
        bottom: -10px;
        position: absolute;
        height: 2px;
        width: 40px;
        background-color: #ff6700;
        display: none;
      }
    }
    & > p {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #5d5d83;
      margin: 0px;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
  .about-visionIcon {
    width: 50px;
    height: 50px;
    margin-bottom: 50px;
    @media only screen and (max-width: 767px) {
      margin-bottom: 24px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .about-location {
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
    & > h2 {
      font-family: Inter;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #2f2d65;
      margin: 0px auto 40px;
      text-align: center;
      position: relative;
      max-width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media only screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 29px;
      }

      &::after {
        content: "";
        height: 2px;
        max-width: 40px;
        width: 100%;
        margin: auto;
        margin-top: 10px;
        background-color: #ff6700;
      }
    }
    & > p {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #5d5d83;
      width: 80%;
      margin: auto;
      margin-bottom: 20px;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 22px;
        width: 100%;
      }
    }
  }
  .about-worldMap {
    width: 768px;
    height: 353px;
    margin-top: 50px;
    @media only screen and (max-width: 767px) {
      width: 100%;
      height: 152px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const CarSeller = styled.div`
  width: 100%;
  background: #f5f8f9;
  position: relative;
  padding-bottom: 100px;
  @media only screen and (max-width: 767px) {
    padding-bottom: 0px;
  }
  .carSeller {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 100px 20px;
    position: relative;
    @media only screen and (max-width: 767px) {
      padding: 40px 20px;
    }
    & > h2 {
      font-family: Inter;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #2f2d65;
      margin: 0px auto 40px;
      text-align: center;
      position: relative;
      max-width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media only screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 24px;
        margin: 0px auto 20px;
      }

      &::after {
        content: "";
        bottom: -10px;
        // position: absolute;
        height: 2px;
        max-width: 40px;
        width: 100%;
        margin: auto;
        margin-top: 10px;
        background-color: #ff6700;
        @media only screen and (max-width: 767px) {
          margin-top: 6px;
        }
      }
    }
    & > p {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #5d5d83;
      width: 50%;
      margin: auto;
      @media only screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
        width: 100%;
      }
    }
  }
  .carSeller-process {
    display: flex;
    margin-top: 50px;
    padding-bottom: 80px;
    flex-wrap: wrap;
    justify-content: center;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .carSeller-count {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 40px;
    @media only screen and (max-width: 767px) {
      width: 100%;
      flex-direction: row;
      align-items: flex-start;
      padding-bottom: 0px;
    }

    &:nth-last-child(2) {
      @media only screen and (max-width: 767px) {
        order: 5;
        &::after {
          width: 0px;
          height: 0px;
        }
      }
    }
    &:nth-child(3) {
      &::after {
        width: 50%;
        @media only screen and (max-width: 767px) {
          height: 100%;
          width: 1px;
        }
      }
      &::before {
        content: "";
        position: absolute;
        right: 0px;
        top: 30px;
        width: 1px;
        height: 100%;
        border-right: 1.5px dashed #ff6700;
        @media only screen and (max-width: 767px) {
          height: 0px;
          width: 0px;
        }
      }
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 30px;
      width: 100%;
      border-bottom: 1.5px dashed #ff6700;
      @media only screen and (max-width: 767px) {
        left: 25px;
        top: 17%;
        width: 1px;
        height: 100%;
        border-right: 1.5px dashed #ff6700;
      }
    }
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      background: #ff6700;
      border-radius: 80px;
      font-family: Inter;
      font-weight: bold;
      font-size: 26px;
      line-height: 24px;
      color: #ffffff;
      margin: 0px 0px 36px;
      z-index: 1;
      @media only screen and (max-width: 767px) {
        min-width: 56px;
        height: 56px;
        font-size: 24px;
        line-height: 26px;
        font-weight: 600;
      }
    }
  }
  .carSeller-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 767px) {
      margin-left: 20px;
      margin-top: 8px;
      margin-bottom: 20px;
      align-items: flex-start;
    }
    & > h3 {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      margin: 0px 0px 4px;
      color: #2f2d65;
      width: 80%;
      @media only screen and (max-width: 1200px) {
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 10px;
        font-weight: 500;
      }
      @media only screen and (max-width: 767px) {
        text-align: left;
      }
    }
    & > p {
      font-family: Inter;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #5d5d83;
      margin: 0px;
      width: 80%;
      @media only screen and (max-width: 1200px) {
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        width: 90%;
      }
      @media only screen and (max-width: 767px) {
        text-align: left;
      }
    }
  }
  .testimonial {
    margin-top: 80px;
    margin-bottom: 140px;
    @media only screen and (max-width: 1023px) {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .slick-dots {
      bottom: -50px;
      left: 0px;
      z-index: 1;
      @media only screen and (max-width: 767px) {
        bottom: 0px;
      }
    }
    .slick-dots li {
      width: 9px;
      margin: 0 1px;
    }
    .slick-dots li button {
      width: 8px;
      height: 8px;
    }
    .slick-dots li button:before {
      font-size: 9px;
      width: 8px;
      height: 8px;
      color: rgba(196, 196, 196, 0.5);
      opacity: 1 !important;
    }
    .slick-dots li.slick-active button:before {
      color: #f34732;
    }
  }
  .downloadApp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 85px 82px;
    position: absolute;
    bottom: -270px;
    width: 100%;
    bottom: -270px;
    width: 96%;
    left: 20px;
    @media only screen and (max-width: 1100px) {
      padding: 50px 35px;
    }
    @media only screen and (max-width: 767px) {
      padding: 34px 20px;
      left: 7px;
      bottom: -120px;
    }
    @media only screen and (max-width: 360px) {
      padding: 24px 14px;
    }
  }
  .downloadApp-desc {
    & > h2 {
      font-family: Inter;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #2f2d65;
      margin: 0px 0px 20px;
      @media only screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        margin: 0px 0px 10px;
      }
    }
    & > p {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #5d5d83;
      margin: 0px 0px 44px;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        margin: 0px 0px 30px;
      }
    }
  }
  .downloadApp-image {
    position: absolute;
    right: 0px;
    width: 626px;
    @media only screen and (max-width: 1023px) {
      width: 406px;
    }
    @media only screen and (max-width: 767px) {
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .appImage {
    display: flex;
    width: 50%;
    justify-content: flex-start;

    @media only screen and (max-width: 767px) {
      justify-content: center;
      width: 100%;
    }

    & > a {
      margin-right: 24px;
      img {
        border-radius: 10px;
        margin-right: 24px;
        @media only screen and (max-width: 1023px) {
          width: 70%;
        }
        @media only screen and (max-width: 600px) {
          width: 100%;
          border-radius: 4px;
          max-width: 100%;
          margin-right: 10px;
        }
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
`;
export const SliderContent = styled.div`
  width: 50%;
  margin: auto;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
  .slick-slider {
    @media only screen and (max-width: 767px) {
      width: 100%;
      overflow: hidden;
      height: 354px;
    }
    @media only screen and (max-width: 360px) {
      height: 400px;
    }
  }
`;
export const SliderItem = styled.div`
  padding-left: 50px;
  & > h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    color: #4b4b4b;
    position: relative;
    @media only screen and (max-width: 1200px) {
      font-size: 18px;
      line-height: 25px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 24px;
    }
    .icon {
      position: absolute;
      left: -45px;
      top: -2px;
    }
  }
  .profile {
    display: flex;
    align-items: center;
    margin-top: 30px;
    @media only screen and (max-width: 767px) {
      margin-left: -50px;
    }
    &-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 14px;
      @media only screen and (max-width: 767px) {
        width: 60px;
        height: 60px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-name {
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 150.2%;
      color: #4b4b4b;
      margin: 0px 0px 0px;
    }
    &-designation {
      font-family: Inter;
      font-weight: 400;
      font-size: 14px;
      line-height: 150.2%;
      color: #4b4b4b;
      margin: 0px;
    }
  }
`;
