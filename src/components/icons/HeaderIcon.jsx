import React from 'react';
import { FaExclamation, FaRegCircle } from 'react-icons/fa'; // Font Awesome icons
import { PiCellSignalLowBold, PiCellSignalHigh } from "react-icons/pi";
import { LuSignalMedium } from "react-icons/lu";
import { CgDanger } from "react-icons/cg";

const HeaderIcon = ({ priority }) => {
  const iconStyles = "text-xl mx-1"; // common styles for all icons

  const icons = {
    0: <FaRegCircle className={`text-gray-500 ${iconStyles}`} />,
    1: <PiCellSignalLowBold className={`text-green-500 ${iconStyles}`} />,
    2: <LuSignalMedium className={`text-yellow-500 ${iconStyles}`} style={{ opacity: 0.6 }} />,
    3: <PiCellSignalHigh className={`text-orange-500 ${iconStyles}`} />,
    4: <CgDanger className={`text-red-500 ${iconStyles}`} />,
  };

  return icons[priority] || <FaExclamation className={`text-gray-500 ${iconStyles}`} />; // Default icon for unrecognized priority
};

export default HeaderIcon;
