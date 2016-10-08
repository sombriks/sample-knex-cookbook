var knexfile = require("./knexfile")
var knexcfg = process.env.NODE_ENV == "production" ? "production" : "development"
var knex = require("knex")(knexfile[knexcfg])

knex("goodies").select().where("idgoodies",1).then(function(ret){
  console.log(ret[0])
})
