/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import buttonStyles from "./buttonStyles";

const Buttons = styled.a`
  height: ${(props) => props.height};
  width: ${(props) => props.width || "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: ${(props) => props.padding || "36px"};
  padding-top: 0px;
  padding-bottom: 0px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: ${(props) => props.borderRadius || "34px"};
  margin: ${(props) => props.marginAll};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "14px"};
  line-height: 17px;
  color: #ffffff;
  text-align: center;
  // text-transform: Capitalize;

  &.orange {
    background-color: transparent;
    border-color: #d25673;
    color: #d25673;
    font-weight: bold;
  }
  &.primary {
    background-color: #d25673;
    border-color: #d25673;
    font-weight: bold;
  }
`;
const Button = (props) => (
  <Buttons
    fullwidth={props.fullwidth}
    height={props.height}
    width={props.width}
    marginAll={props.marginAll}
    marginRight={props.marginRight}
    marginLeft={props.marginLeft}
    padding={props.padding}
    marginTop={props.marginTop}
    className={props.type}
    style={props.style}
    borderRadius={props.borderRadius}
    fontSize={props.fontSize}
    href={props.href}
  >
    {/* {props.icon && <Icon path={mdiFileChartOutline} size={1} className={props.icon} />} */}
    <span>{props.text}</span>
  </Buttons>
);

// If the Button has a handleRoute prop, we want to render a button
// if (props.handleRoute) {
//   button = (
//     <StyledButton onClick={props.handleRoute}>
//       {Children.toArray(props.children)}
//     </StyledButton>
//   );
// }

Button.propTypes = {
  marginRight: PropTypes.string,
  marginAll: PropTypes.string,
  marginLeft: PropTypes.string,
  marginTop: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  fullwidth: PropTypes.bool,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  fontSize: PropTypes.string,
  href: PropTypes.string,
};
Button.defaultProps = {
  height: "60px",
};
export default Button;
