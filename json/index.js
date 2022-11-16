// Referencia : https://bobbyhadz.com/blog/javascript-referenceerror-fetch-is-not-defined

import fetch from 'node-fetch';

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    // const response = await fetch('http://127.0.0.1:5500/data.json');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

var dan = await getUser();

console.log(dan);

console.log("======");

console.log(dan.results[0].email);