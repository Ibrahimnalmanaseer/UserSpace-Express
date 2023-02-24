'use strict';

const { UserInfo } = require('../app');

async function addDataRouteHandler(request, response) {
  const { Email, Name, Sector, AgreeToTerms } = request.body;

  
  const existingUserData = await UserInfo.findOne({ Email });

  if (existingUserData) {
    
    response.send(existingUserData);
  } else {
    
    const newUserData = await UserInfo.create({
      Email,
      Name,
      Sector,
      AgreeToTerms
    });

    
    response.send(newUserData);
  }
}

module.exports = addDataRouteHandler;