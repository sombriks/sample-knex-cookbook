
exports.up = function(knex, Promise) {
  return knex.schema.table("goodies", function(table){
    table.integer("instockgoodies");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("goodies", function(table){
    table.dropColumn("instockgoodies");
  })
};
