module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define('recipes',{
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        video: {
            type: Sequelize.STRING
        },
        preparationTime: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cookingTime: {
            type: Sequelize.STRING
        },
        restTime: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        level: {
            type: Sequelize.STRING,
            allowNull: false
        },
        season: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cost: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        diet: {
            type: Sequelize.STRING,
            allowNull: false
        },
        personCount: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Recipe;
    
}