module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }

    };
    let config = {
        tableName: "category",
        timestamps: false,
        underscored: true
    };

    const Category = sequelize.define(alias, cols, config);

    return Category
}