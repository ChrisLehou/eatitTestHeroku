module.exports = (sequelize, Sequelize) => {
    const Ingredient = sequelize.define("ingredients", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        unit: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });

    return Ingredient;
}