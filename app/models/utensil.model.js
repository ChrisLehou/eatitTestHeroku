module.exports = (sequelize, Sequelize) => {
    const Utensil = sequelize.define("utensils", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Utensil;
}