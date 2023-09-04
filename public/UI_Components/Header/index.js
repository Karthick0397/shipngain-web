import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Ripples from "react-ripples";
import styled from "styled-components";
import Button from "../Button";
// import "./header.scss";

const Header = props => (
  <HeaderContainer className={props.type}>
    <div className="header">
      <Link href="/">
        <div className="header-logo">
          <img src="/images/Header/aggrow_2.png" alt="logo" />
        </div>
      </Link>

      <div className="header-navbar">
        <ul>
          <a href="#home">
            <li className="active">Home</li>
          </a>
          <a href="#downLoadApp">
            <li>Download app</li>
          </a>

          <a href="#buyers">
            <li>Sellers</li>
          </a>
          <a href="#buyers">
            <li>Buyers</li>
          </a>
        </ul>
        <Ripples color="rgba(255, 103, 0, 0.2)" during={1600}>
          <Button
            text="Connect with us"
            type="orange"
            height="42px"
            padding="24px"
            href="mailto:cs@aggrow.biz"
          />
        </Ripples>
      </div>
      <Link href="/menu">
      <div className="header-hamburger">
        <div className="nav-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      </Link>
    </div>
  </HeaderContainer>
);

Header.propTypes = {
  type: PropTypes.string
};
export default Header;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  background: #faf5f1;
  z-index: 999;
  &.menu {
    background: #fff;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1220px;
    width: 100%;
    margin: auto;
    height: 120px;
    padding: 20px 30px;

    @media only screen and (max-width: 767px) {
      height: 70px;
      padding: 20px;
    }
    &-logo {
      width: 200px;
      height: 120px;
      cursor: pointer;
      @media only screen and (max-width: 1023px) {
        width: 144px;
        height: auto;
      }
      @media only screen and (max-width: 767px) {
        width: 100px;
        height: 62px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &-navbar {
      display: flex;
      align-items: center;
      @media only screen and (max-width: 767px) {
        display: none !important;
      }
      .react-ripples {
        border-radius: 34px;
      }
      ul {
        margin: 0px;
        padding: 0px;
        display: flex;
        align-items: center;
        li {
          font-family: Inter;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #3f3f3f;
          list-style-type: none;
          margin-right: 40px;
          cursor: pointer;
          @media only screen and (max-width: 1023px) {
            font-size: 16px;
            line-height: 19px;
            margin-right: 25px;
          }
          &:hover,
          &.active {
            color: #ff6700;
          }
        }
      }
    }
  }
  .header-hamburger {
    display: none;
    @media only screen and (max-width: 767px) {
      display: block !important;
    }
  }
  .nav-icon {
    width: 25px;
    height: 15px;
    position: relative;
    margin: 0px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  .nav-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #ff7703;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  .nav-icon span:nth-child(1) {
    top: 0px;
  }

  .nav-icon span:nth-child(2),
  .nav-icon span:nth-child(3) {
    top: 6px;
  }

  .nav-icon span:nth-child(4) {
    top: 12px;
  }

  .nav-icon:hover span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .nav-icon:hover span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .nav-icon:hover span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .nav-icon:hover span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;
