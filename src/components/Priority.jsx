import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { HiPlusSmall } from "react-icons/hi2";
import UserIcon from './icons/UserIcon';
import CardIcon from './icons/CardIcon';
import HeaderIcon from './icons/HeaderIcon';

export const Priority = ({
  tickets,
  users,
}) => {
  const context = useContext(Context);
  const { order } = context;
  const [ans, setAns] = useState([]);

  const priority = ["No priority", "Low", "Medium", "High", "Urgent"];
  const arr = [];

  priority.forEach((stat, index) => {
    arr.push(tickets.filter((ticket) => ticket.priority === index));
  });

  useEffect(() => {
    const newArr = arr.map((val) => {
      if (order === "priority") {
        return val.slice().sort((a, b) => b.priority - a.priority);
      } else {
        return val
          .slice()
          .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          );
      }
    });
    setAns(newArr);
  }, [order]);

  return (
    <div className="flex flex-row bg-gray-100">
      {ans.map((stat, index) => (
        <div key={index} className="w-full md:w-1/3 p-4">
          <div className="flex justify-between items-center p-2">
            <div className="flex items-center">
              <HeaderIcon priority={index} />
              <span className="ml-2 text-base font-medium">
                {priority[index]}
                <span className="ml-2 text-sm text-gray-500">{stat.length}</span>
              </span>
            </div>
            <div className="flex items-center">
              <HiPlusSmall className="text-lg text-gray-600 mr-2" />
              <IoEllipsisHorizontal className="text-lg text-gray-600" />
            </div>
          </div>
          {stat.map((ticket) => (
            <div key={ticket.id} className="flex flex-col border bg-white p-2 mb-2 rounded-md shadow">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">{ticket.id}</p>
                <div className="flex items-center">
                  <UserIcon userName={users.find(user => user.id === ticket.userId).name} isAvailable={users.find(user => user.id === ticket.userId).available} />
                </div>
              </div>
              <div className="flex">
                <CardIcon status={ticket.status} />
                <span className="font-medium text-gray-800">
                  {ticket.title.length > 60
                    ? `${ticket.title.substring(0,81)}.`
                    : ticket.title}
                </span>
              </div>
              <div className="flex items-center mt-2">
                
                <span className="flex items-center ml-2 bg-white text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-gray-300">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mr-2"></div>
                  {ticket.tag}
                </span>

              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
