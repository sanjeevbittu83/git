if(process.env.NODE_ENV == 'production')    {

    module.exports = require('./env_dev_prod/prod.js')

}   else   {

    module.exports = require('./env_dev_prod/dev.js')

}