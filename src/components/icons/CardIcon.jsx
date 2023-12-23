import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaSun, FaMoon, FaGalacticSenate } from 'react-icons/fa'; // Sun and Moon icons from Font Awesome
import { MdPublic } from 'react-icons/md'; // Planet icon from Material Design

const CardIcon = ({ status }) => {
  const icons = {
    Backlog: <FaMoon className="text-red-500 text-xl mx-1" />,
    Todo: <FaSun className="text-blue-500 text-xl mx-1" />,
    "In progress": <FaGalacticSenate className="text-orange-500 text-xl mx-1" />,
    Done: <IoCheckmarkCircle className="text-blue-800 text-xl mx-1" />,
    Cancelled: <MdPublic className="text-gray-500 text-xl mx-1" />,
  };

  return icons[status] || null; // Render the corresponding icon or nothing if status is not recognized
};

export default CardIcon;
