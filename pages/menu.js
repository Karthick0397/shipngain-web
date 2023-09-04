/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import Header from "../public/UI_Components/Header";
// import Button from "../public/UI_Components/Button";
// import Footer from "../public/UI_Components/Footer";
// import facebook from "../public/images/mediaImages/facebook-logo-svgrepo-com.png";
// import instagram from "../public/images/mediaImages/instagram-with-circle-svgrepo-com.png";
// import youtube from "../public/images/mediaImages/youtube-symbol-svgrepo-com (1).png";
// import linkdin from "../public/images/mediaImages/linkedin-icon-logo-svgrepo-com.png";
// import twitter from "../public/images/mediaImages/twitter-svgrepo-com.png";
const MenuPage = () => {
  return (
    <>
      <Header type="menu" />

      <MainContainer>
        <MenuList>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>Sellers</li>
          </Link>
          <Link href="/">
            <li>Buyers</li>
          </Link>
          <Link href="/">
            <li>Download App</li>
          </Link>
        </MenuList>
        <MenuContent>
          <h3>Download App</h3>
          <ul>
            <li>
              <img
                src="/images/mediaImages/facebook-logo-svgrepo-com.png"
                alt="facebook"
              />
            </li>
            <li>
              <img
                src="/images/mediaImages/youtube-symbol-svgrepo-com (1).png"
                alt="youtube"
              />
            </li>
            <li>
              <img
                src="/images/mediaImages/instagram-with-circle-svgrepo-com.png"
                alt="instagram"
              />
            </li>
            <li>
              <img
                src="/images/mediaImages/linkedin-icon-logo-svgrepo-com.png"
                alt="linkdin"
              />
            </li>
            <li>
              <img
                src="/images/mediaImages/twitter-svgrepo-com.png"
                alt="twitter"
              />
            </li>
          </ul>
        </MenuContent>
        {/* <MenuContent>
          <h3>Sales</h3>
          <p>9606464255</p>
        </MenuContent> */}
        <MenuContent>
          <h3>Need Support?</h3>
          <p>9844187378</p>
        </MenuContent>
      </MainContainer>
    </>
  );
};
MenuPage.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
};
export default MenuPage;

const MainContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  padding: 20px 50px 40px;
  background-color: #fff;
  @media only screen and (max-width: 600px) {
    padding: 20px 20px 40px;
    margin-top: 80px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  li {
    font-family: Inter;
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;
    color: #2f2d65;
    margin-bottom: 32px;
    cursor: pointer;
    list-style-type: none;
  }
`;

const MenuContent = styled.div`
  margin-bottom: 32px;
  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 18px;
    line-height: 24px;
    color: #fd7722;
    margin-bottom: 8px;
  }
  p {
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #2f2d65;
  }
  ul {
    padding: 0px;
    display: flex;
    li {
      list-style-type: none;
      margin-right: 16px;
      cursor: pointer;
    }
  }
`;
