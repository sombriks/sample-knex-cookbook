
exports.up = function(knex, Promise) {
  return knex("goodies").insert([
    {descriptiongoodies: "banana"},
    {descriptiongoodies: "canned soup"},
    {descriptiongoodies: "bullets"}    
  ]);
};

exports.down = function(knex, Promise) {
  return knex("goodies").del();
};
