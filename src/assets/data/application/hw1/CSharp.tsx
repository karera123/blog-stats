import React from 'react';
import winform1 from "../../../images/winform-hw1.png";
import { createLink } from '../../../../utils/functions';

const CSharp = () => {
  return (
    <>
      The code is accessible through this {createLink('link', 'https://gitlab.com/homeworks2282541/homework-1/c-sharp')}.<br />
      Here is a screenshot of the application:<br />
      <img src={winform1} alt="Winform Homework 1" />
    </>
  )
}

export default CSharp