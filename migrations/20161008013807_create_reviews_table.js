
exports.up = function(knex, Promise) {
  return knex.schema.createTable("goodiesreview", function (table){
    table.increments("idgoodiesreview");
    table.text("descriptiongoodiesreview");
    table.integer("idgoodies").notNullable().references("goodies.idgoodies");
    // longer form:
    // table.integer("idgoodies").notNullable().references("idgoodies").inTable("goodies");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("goodiesreview");
};
