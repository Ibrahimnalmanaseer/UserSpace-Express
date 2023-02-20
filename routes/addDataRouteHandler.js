'use strict';

const { UserInfo } = require('../app');

async function addDataRouteHandler(request, response) {
  const { Email, Name, Sector, AgreeToTerms } = request.body;

  // Search for a user data record with the same email as the request
  const existingUserData = await UserInfo.findOne({ Email });

  if (existingUserData) {
    // If a record with the same email exists, return that record in the response
    response.send(existingUserData);
  } else {
    // If a record with the same email does not exist, create a new record with the provided data
    const newUserData = await UserInfo.create({
      Email,
      Name,
      Sector,
      AgreeToTerms
    });

    // Return the newly created record in the response
    response.send(newUserData);
  }
}

module.exports = addDataRouteHandler;