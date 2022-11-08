
module.exports = (app) => {
    const favorite = require('../controllers/favorite.controller.js');

    //Create a new Favorite
    app.post('/favorites/index', favorite.create);

    //Retrieve all Favorite
    app.get('/favorites/index', favorite.findAll);

    //Retrieve a single Favorite by Pk
    app.get('/favorites/:ingredientId', favorite.findByPk);
     
    //Update a Favorite with Id
    app.put('/favorites/:ingredientId', favorite.update);

    //Delete a Favorite with Id
    app.delete('/favorites/:ingredientId', favorite.delete);
}