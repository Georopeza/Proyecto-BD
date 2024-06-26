const {Pool}= require('pg')
const {database}=require('./config')

const pool=new Pool({
    user:database.user,
    password: database.password,
    host: database.host,
    port: database.port,
    database: database.database
})

module.exports=pool;