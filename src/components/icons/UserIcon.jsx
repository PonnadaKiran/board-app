import React from 'react';
import { FaCircle } from 'react-icons/fa';

const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const getInitials = (name) => name.split(' ').map(n => n[0]).join('');

const UserIcon = ({ userName, isAvailable }) => {
  const colorClass = getRandomColor();
  const initials = getInitials(userName);

  return (
    <div className="relative inline-flex justify-center items-center w-6 h-6 rounded-full text-white" style={{ fontSize: '0.5rem' }}>
      <div className={`flex justify-center items-center w-full h-full ${colorClass} rounded-full`}>
        {initials}
      </div>
      {isAvailable && (
        <span className="absolute bottom-0 right-0">
          <FaCircle className="w-3 h-3 text-yellow-500" />
        </span>
      )}
    </div>
  );
};

export default UserIcon;
