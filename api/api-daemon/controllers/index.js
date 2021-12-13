"use strict";

const checkApi = async (req, res) => {
  try {
    res.status(200).send("Ok");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  checkApi,
};
