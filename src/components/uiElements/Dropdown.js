import React from "react";
import styled from "styled-components";
import { colors } from "../helpers.js";

const SelectDropDown = props => {
  return (
    <Select validate={props.validate}>
      <label>
        <input type="radio" name="option" />
        <span className="placeholder">Choose...</span>
        {props.options.map(option => (
          <label className="option" key={option.key}>
            <input type="radio" name="option" value={option.value} {...props} />
            <span className="title">{option.text}</span>
          </label>
        ))}
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
  max-width: 80px;
  font-size: 1rem;

  .title,
  .placeholder {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0.78571429rem 1rem;
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
      border: 1px solid green;
    }

    &:not(:checked) {
      z-index: 3;
      ~ label.option input:not(:checked) ~ .title {
        display: none !important;
      }
    }
  }

  & label > span.placeholder {
    position: relative;
    z-index: 0;
    display: inline-block;
    width: 80%;
    color: #999;
    border-top: 0px;
  }

  label.option {
    display: block;
    overflow: hidden;
    z-index: 2;
    width: 100%;
    transition: all 1s ease-out;
    span.title {
      position: relative;
      text-align: center;
      z-index: 3;
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
        z-index: 2;
        top: 0px;
        background: ${colors.primary};
        border-top: 0px;
        box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
        color: ${colors.white};
        width: 100%;
        text-align: center;
      }
    }
  }
`;
