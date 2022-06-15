const axios = require("axios");
const { linkValidation } = require("./validation");

async function getVideoFormats(url) {
  if (!linkValidation(url)) {
    return [];
  }

  const res = await axios.get(url);
  const json = res.data.match(`(?<="formats":).+(?=,"adaptiveFormats")`)[0];

  return JSON.parse(json);
}

module.exports = { getVideoFormats };
