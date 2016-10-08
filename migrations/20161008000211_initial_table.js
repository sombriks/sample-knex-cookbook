
exports.up = function(knex, Promise) {
  return knex.schema.createTable("goodies", function(table) {
    table.increments("idgoodies");
    table.string("descriptiongoodies").notNullable();
    table.decimal("pricegoodies").defaultTo(1.99);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("goodies");
};
