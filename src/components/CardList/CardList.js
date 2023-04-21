import React, { useEffect, useState } from "react";
import axios from "axios";
import css from "./CardList.module.css";

import { Card } from "../Card/Card";


export const CardList = () => {
  const [users, setUsers] = useState([]);

  axios.defaults.baseURL = "https://6442c0c733997d3ef918c74f.mockapi.io";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/users");
      localStorage.setItem("usersList", JSON.stringify(response.data));
      setUsers(response.data);
    };
    fetchData();
  }, []);

  //   useEffect(() => {
  //     // const fetchData = async () => {
  //     //   const response = await axios.get("/users");

  //       console.log("змінився стейт, треба вичислить і записать в локал");
  //     //   localStorage.setItem("usersList", JSON.stringify(response.data));
  //       localStorage.setItem("usersList", JSON.stringify(users));
  //       //   console.log("response: ", response.data);
  //     //   setUsers(response.data);
  //     // };

  //     // fetchData();
  //   }, [users]);

  const onCardChange = (id, followers, active) => {
    // console.log(
    //   `Змінилась картка з id ${id}, треба вичислить і записать в локал`
    // );

    // console.log("active");

    const updateData = active
      ? { followers: followers - 1, active: "" }
      : { followers: followers + 1, active: "active" };

    const fetchData = async () => {
      const response = await axios.put(`/users/${id}`, {
        ...updateData,
      });

      const userChangeArray = users.map((user) => {
        if (user.id === id) {
          return response.data;
        }
        return user;
      });

      setUsers(userChangeArray);
    };
    fetchData();

    const userChangeArray = users.map((user) => {
      if (user.id === id) {
        user.followers += 1;
      }
      return user;
    });

    // const userChangeArray = users.map((user) => {
    //   if (user.id === id) {
    //     user.followers += 1;
    //   }
    //   return user;
    // });

    // setUsers(userChangeArray);
  };

  return (
    <ul className={css.cardList}>
      {users.length > 0 &&
        users.map((user) => (
          <li key={user.id}>
            <Card user={user} onCardChange={onCardChange} />
          </li>
        ))}
    </ul>
  );
};
