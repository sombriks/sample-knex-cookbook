
exports.up = function(knex, Promise) {
  return knex.raw("create view vw_order as select * from \"order\" natural join goodies_order natural join goodies");
};

exports.down = function(knex, Promise) {
  return knex.raw("drop view vw_order");
};
