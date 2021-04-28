"use strict";

async function getPersonsData(amount) {
  const apiUrl = `https://randomuser.me/api/?results=${amount}`;
  const response = await fetch(apiUrl);
  const users = await response.json();
  const usersData = users.results;

  const usersList = [];
  for (const data of usersData) {
    const user = {
      userName: data.login.username,
      name: data.name.first,
      lastName: data.name.last,
      gender: data.gender,
      country: data.location.country,
      email: data.email,
      picture: data.picture.large,
    };
    usersList.push(user);
  }
  console.log(usersList);
}

getPersonsData(6);
