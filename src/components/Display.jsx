import React, { useState, useContext } from 'react';
import { IoSettingsSharp, IoChevronDownSharp, IoMoonOutline } from 'react-icons/io5';
import Context from '../context/Context';
import { MdOutlineWbSunny } from "react-icons/md";

const Display = () => {
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);
  const context = useContext(Context);
  const { order, group, setOrder, setGroup } = context;

  const toggleDisplay = () => {
    setIsDisplayOpen(!isDisplayOpen);
  };

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    if (name === 'group') {
      setGroup(value);
      localStorage.setItem('savedGroup', value);
    } else if (name === 'order') {
      setOrder(value);
      localStorage.setItem('savedOrder', value);
    }
    setIsDisplayOpen(false); // Close the Display
  };

  const { isDarkMode, toggleDarkMode } = useContext(Context);

  return (
    <div className="relative inline-block text-left mt-3 ml-3 mb-3">
      <button
        onClick={toggleDisplay}
        className="inline-flex items-center px-6 py-2 bg-white rounded-md shadow text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <IoSettingsSharp className="text-xl" />
        <span className="ml-3">Display</span>
        <IoChevronDownSharp className="text-xl ml-2" />
      </button>

      {isDisplayOpen && (
        <div className="absolute z-10 mt-1 w-60 rounded-md shadow-lg">
          <div className="bg-white">
            <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Grouping
              <select
                name="group"
                value={group}
                onChange={handleOptionChange}
                className="border border-gray-300 rounded py-1 px-2 text-gray-700 shadow-sm bg-white hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Ordering
              <select
                name="order"
                value={order}
                onChange={handleOptionChange}
                className="border border-gray-300 rounded py-1 px-2 text-gray-700 shadow-sm bg-white hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full transition duration-300"
      >
        {isDarkMode ? <MdOutlineWbSunny className="text-yellow-500 text-xl" /> : <IoMoonOutline className="text-gray-700 text-xl" />}
      </button> */}
    </div>
  );
};

export default Display;
