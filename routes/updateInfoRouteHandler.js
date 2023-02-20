'use strict';

const { UserInfo } = require('../app');

async function updateInfoRouteHandler(request, response) {
  const { Email, Name, Sector, AgreeToTerms } = request.body;
  console.log(request.body)

  try {
   
    await UserInfo.findOneAndUpdate(
      { Email },
      { Name, Sector, AgreeToTerms },
      
    );

    
   
  } catch (err) {
    
    console.error(err);
    response.status(500).send('Failed to update user data');
  }
}

module.exports = updateInfoRouteHandler;
