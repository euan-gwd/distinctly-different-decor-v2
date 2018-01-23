import React from "react";
import styled from "styled-components";
import { colors } from "../helpers.js";
// import "./DropDown.css";

const SelectDropDown = props => {
  return (
    <Select>
      <label>
        {/* <input type="checkbox" name="placeholder" /> */}
        <input type="radio" name="option" />
        <span className="placeholder">Choose...</span>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title">1</span>
        </label>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title">2</span>
        </label>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title">3</span>
        </label>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title">4</span>
        </label>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title">5</span>
        </label>
      </label>
    </Select>
  );
};

export default SelectDropDown;

const Select = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: 0.28571429rem;
  border: 1px solid ${colors.primaryBorder};
  background-color: ${props =>
    props.validate
      ? `${colors.errorBackground}`
      : `${colors.defaultBackground}`};
  color: ${props => (props.validate ? `${colors.error}` : `${colors.black}`)};
  min-height: 1rem;
  font-size: 1rem;
  max-width: 80px;

  .title,
  .placeholder {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0.78571429rem;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  & > label > input {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0;
    cursor: pointer;
    &:checked {
      z-index: 2;
    }
    &:not(:checked) {
      ~ label.option input:not(:checked) ~ .title {
        display: none !important;
      }
    }
  }

  & label > span.placeholder {
    position: relative;
    z-index: 0;
    display: inline-block;
    width: 100%;
    color: #999;
    border-top: 0px;
  }

  label.option {
    display: block;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    transition: all 1s ease-out;
    span.title {
      position: relative;
      z-index: 2;
      transition: background 0.3s ease-out;
      &:hover {
        color: #fff;
        background: ${colors.primaryBorder};
        box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.35) inset;
      }
    }

    input {
      display: none;
      &:checked ~ span.title {
        position: absolute;
        display: block;
        z-index: 1;
        top: 0px;
        background: ${colors.primary};
        border-top: 0px;
        box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
        color: ${colors.white};
        width: 100%;
      }
    }
  }
`;
