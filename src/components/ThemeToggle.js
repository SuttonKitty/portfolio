// /src/components/ThemeToggle.js

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import { LuSunDim } from "react-icons/lu";
import { LuSunMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <LuSunDim /> : <LuSunMoon />}
    </button>
  );
};

export default ThemeToggle;