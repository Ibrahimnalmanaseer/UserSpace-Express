

const {Selector} = require('../app');
async function homeRouteHandler (request, response){
    
    
    Selector.find({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {  
           
           return  response.send(result);
        }
    })
};

module.exports = homeRouteHandler;