
exports.seed = function(knex, Promise) {
  // alter the prices to 2.99
  return knex('goodies').update({
    pricegoodies:2.99  
  });
};
