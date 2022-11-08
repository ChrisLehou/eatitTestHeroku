module.exports = (sequelize, Sequelize) => {
    const Step = sequelize.define("steps", {
        number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Step;
}