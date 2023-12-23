import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { HiPlusSmall } from "react-icons/hi2";
import UserIcon from './icons/UserIcon';
import CardIcon from './icons/CardIcon';
import HeaderIcon from './icons/HeaderIcon';

export const User = ({
  tickets,
  users,
}) => {
  const context = useContext(Context);
  const { order } = context;
  const [ans, setAns] = useState([]);

  const mp = users.reduce((acc, val) => {
    acc[val.name] = val.id;
    return acc;
  }, {});

  const arr = [];

  users.forEach((stat) => {
    arr.push(tickets.filter((ticket) => ticket.userId === mp[stat.name]));
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


  const userIconsList = users.map(user => (
    <UserIcon key={user.id} userName={user.name} isAvailable={user.available} />
  ));

  return (
    <div className="flex flex-row bg-gray-100">
      {ans.map((stat, index) => (
        <div key={index} className="w-full md:w-1/3 p-4">
          <div className="flex justify-between items-center p-2">
            <div className="flex items-center">
              {userIconsList[index]}
              <span className="ml-2 text-base font-medium">
                {users[index].name}
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
              <p className="text-sm text-gray-500">{ticket.id}</p>
              
              <div className="flex">
                <CardIcon status={ticket.status} />
                <span className=" font-medium text-gray-800">
                  {ticket.title.length > 60
                    ? `${ticket.title.substring(0, 81)}.`
                    : ticket.title}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <HeaderIcon priority={index} />
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
