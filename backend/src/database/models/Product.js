module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
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
        },
        price: {
            type: dataTypes.BIGINT(),
            allowNull: false
        },
        color: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        discount_id: {
            type: dataTypes.INTEGER,
            allowNull:false,
            foreignKey:true
        },
        category_id:{
            type: dataTypes.INTEGER,
            allowNull:false,
            foreignKey:true
        }

    };
    let config = {
        tableName: "products",
        timestamps: false,
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config);

    return Product
}