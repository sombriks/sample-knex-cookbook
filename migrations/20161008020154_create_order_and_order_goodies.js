
exports.up = function(knex, Promise) {
  return knex.schema.createTable("order", function(table){
    table.increments("idorder");
    table.timestamp("dtcreationorder").defaultTo(knex.fn.now());
    table.string("detailsorder");
  }).createTable("goodies_order", function (table){
    table.integer("idgoodies").notNullable().references("goodies.idgoodies");
    table.integer("idorder").notNullable().references("order.idorder");
    table.integer("quantitygoodies").defaultTo(1);
    table.primary(["idgoodies","idorder"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("goodies_order")
    .dropTable("order");
};
