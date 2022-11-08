module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users',{
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        diet: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [6, 20]
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        picture: {
            type: Sequelize.STRING
        }
    });

    return User;
    
}