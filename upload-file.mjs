import fetch from "node-fetch";
import fs from "fs";
import FormData from "form-data";

const form = new FormData();
const fileStream = fs.createReadStream('./files/mage.png');
form.append('file', fileStream);


const options = {
  method: 'POST',
  body: form,
  headers: {
    "Authorization": "850bb224-9f93-4602-8f1c-13dd11dbe5bb",
  },
};

fetch("https://api.nftport.xyz/v0/files", options)
  .then(response => {
    return response.json()
  })
  .then(responseJson => {
    // Handle the response
    console.log(responseJson);
  })