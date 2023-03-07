const { connection } = require('mongoose')
const {createPool}= require('mysql')
require('dotenv')
const { promisify }=require('util')


const connected = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306
 })

 connected.getConnection((err, connection)=>{
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has to many connections');
        }
        if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused');
        }
      }
    
      if (connection) connection.release();
      console.log('DB is Connected');
    
      return;
    });
    
    // Promisify Pool Querys
    connected.query = promisify(connected.query);
    
    module.exports = connected;