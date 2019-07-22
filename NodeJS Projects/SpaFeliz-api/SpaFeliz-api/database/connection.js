const Sequelize = require('sequelize')

const conn = new Sequelize ('SUkpATMpb8', 'SUkpATMpb8', 'SxyVWtpy52',{
    host: 'remotemysql.com',
    dialect: 'mysql'
})

conn.authenticate()
.then(() => console.log('connection ok with database'))
.catch((err) => console.log('connection erro with database', err))

module.exports = conn;