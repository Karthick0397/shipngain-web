import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Link from "next/link";

// import "./header.scss";
import Ripples from "react-ripples";

const Footer = () => (
  <FooterContainer>
    <div className="footer">
      <div className="footer-top">
        <div className="footer-topLeft">
          <h2>Would you like to become a Buyer/Seller?</h2>
          <p>
            We are a global marketplace providing a unique
            <br />
            digital platform for buyers and sellers to connect and trade
          </p>
        </div>
        <Ripples color="rgba(251,251,251,0.5)" during={1800}>
          <Button
            text="Connect with us"
            height="60px"
            fontSize="16px"
            href="mailto:cs@aggrow.biz"
          />
        </Ripples>
      </div>
      <div className="footer-center">
        <div className="footer-contact">
          <h1>{/* Sales:<span> 9606464255</span>{" "} */}</h1>
          <h1>
            Need support?: <span>9606464255</span>
          </h1>
        </div>
        <div className="footer-link">
          <ul className="footer-linkList">
            <a href="#home">
              <li className="active">Home</li>
            </a>

            <a href="#buyers">
              <li>Sellers</li>
            </a>
            <a href="#buyers">
              <li>Buyers</li>
            </a>
            <a href="#aboutus">
              <li>About Us</li>
            </a>
            <a href="#aboutus">
              <li>Contact Us</li>
            </a>
          </ul>
          <ul className="footer-linkList">
            <a href="#explore">
              <li>Explore/Buy Product</li>
            </a>
            <a href="#routeSale">
              <li>Book Vehicle Space & Buy</li>
            </a>
            <a href="#splitDelivery">
              <li>Split Delivery Services</li>
            </a>
            <a href="#createLabel">
              <li>Create Private Label</li>
            </a>

            <li>Book Warehouse</li>
          </ul>
          <ul className="footer-linkList">
            <Link href="/termsConditions">
              <li>Terms & Conditions</li>
            </Link>
            <Link href="/privacyPolicy">
              <li>Privacy Policy</li>
            </Link>
            <Link href="/termsConditions">
              <li>Refund Policy</li>
            </Link>
            <Link href="/termsConditions">
              <li>Cancellation Policy</li>
            </Link>
          </ul>
          {/* <ul className="footer-linkList">
            <li>Aggrow in Mumbai</li>
            <li>Aggrow in Chennai</li>
            <li>Aggrow in Telangana</li>
            <li>Aggrow in Delhi</li>
            <li>Aggrow in Hyderabad</li>
          </ul> */}
        </div>
        <div className="footer-by">
          By SLV Agriventures Private Limited <br />
          <span>
            Desk I, II Floor, 172/7, Srinidhi Plaza, 12th Cross, Mahalakshmi
            Layout, Bangalore, Karnataka 560086 India
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 Aggrow. All rights reserved.</p>
        <div className="footer-mediaIcons">
          <li
            onClick={() =>
              window.open("https://www.facebook.com/Aggrow-110100834717497/")
            }
          >
            <span
              className="iconify"
              data-icon="fontisto:facebook"
              data-inline="false"
            ></span>
          </li>
          {/* <li>
            <span
              className="iconify"
              data-icon="icomoon-free:youtube"
              data-inline="false"
            ></span>
          </li> */}
          {/* <li>
            <span
              className="iconify"
              data-icon="dashicons:twitter"
              data-inline="false"
            ></span>
          </li> */}
          {/* <li>
            <span
              className="iconify"
              data-icon="jam:linkedin"
              data-inline="false"
            ></span>
          </li> */}
          <li
            onClick={() =>
              window.open(" https://www.instagram.com/aggrowindia/")
            }
          >
            <span
              className="iconify"
              data-icon="ion:logo-instagram"
              data-inline="false"
            ></span>
          </li>
        </div>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;

export const FooterContainer = styled.div`
  width: 100%;
  background: #293573;
  z-index: 999;
  padding-top: 250px;
  @media only screen and (max-width: 767px) {
    padding-top: 120px;
  }
  .footer {
    max-width: 1224px;
    width: 100%;
    margin: auto;
    padding: 24px 32px;
    @media only screen and (max-width: 767px) {
      padding: 20px;
    }
  }
  .footer-top {
    max-width: 1000px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0px;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
    }
    h2 {
      font-family: Inter;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      text-align: center;
      color: #ffffff;
      margin: 0px 0px 12px;
      @media only screen and (max-width: 1023px) {
        font-size: 26px;
        line-height: 36px;
      }

      @media only screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 29px;
        text-align: left;
      }
    }
    p {
      font-family: Inter;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      margin: 0px;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 30px;
      }
    }
    .react-ripples {
      border-radius: 34px;
    }
  }
  .footer-center {
    position: relative;
    padding: 50px 0px;
    border-top: 1px solid #46549c;
    border-bottom: 1px solid #46549c;
    @media only screen and (max-width: 767px) {
      padding: 50px 0px 50px;
    }
    .footer-by {
      width: 50%;
      font-family: Inter;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #98a2d9;
      margin: 30px 0px 0px;
      display: none;
      span {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        @media only screen and (max-width: 767px) {
          font-size: 12px !important;
          line-height: 16px !important;
        }
      }
      @media only screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 22px;
        width: 100%;
      }
    }
  }
  .footer-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
    & > h1 {
      font-family: Inter;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #98a2d9;
      margin-right: 50px;
      @media only screen and (max-width: 767px) {
        text-align: center;
        margin: 0px 20px;
        font-size: 16px;
        line-height: 19px;
      }
      span {
        font-weight: bold;
        margin-left: 5px;
      }
    }
  }
  .footer-link {
    display: flex;
    margin-top: 50px;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  .footer-linkList {
    width: 33%;
    padding: 0px;
    margin: 0px 0px 20px;
    @media only screen and (max-width: 767px) {
      width: 50%;
    }
    &:last-child {
      margin: 0px;
    }
    li {
      font-family: Inter;
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
      color: #98a2d9;
      cursor: pointer;
      margin: 0px;
      list-style-type: none;
      width: fit-content;
      @media only screen and (max-width: 767px) {
        font-size: 13px;
        line-height: 25px;
      }
      &:hover,
      &.active {
        color: #fff;
      }
    }
  }
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0px 20px;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
    & > p {
      font-family: Inter;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #98a2d9;
      margin: 0px;
      @media only screen and (max-width: 767px) {
        margin-bottom: 20px;
      }
    }
  }
  .footer-mediaIcons {
    display: flex;
    align-items: center;
    li {
      list-style-type: none;
    }
    .iconify {
      width: 20px;
      height: 20px;
      color: #98a2d9;
      margin-left: 20px;
      cursor: pointer;
      &:hover,
      &.active {
        color: #fff;
      }
    }
  }
`;
