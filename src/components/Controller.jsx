import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Context from "../context/Context";
import { Status } from "./Status";
import { Priority } from "./Priority";
import { User } from "./User";


export const Controller = () => {
  const context = useContext(Context);
  const { group } = context;

  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="flex mt-40 text-lg font-medium justify-center items-center">Loading...</p>;
  }

  return (
    <div className="flex flex-row flex-wrap justify-start items-start">
      {/* Conditionally render the components based on the group */}
      {group === "status" && <Status users={users} tickets={tickets} />}
      {group === "priority" && <Priority users={users} tickets={tickets} />}
      {group === "user" && <User users={users} tickets={tickets} />}
    </div>
  );
};

