module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        user: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "Anonymous",
            validate: {
              len: [1]
            }
          },
          review: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
              len: [1]
            }
          }
    });
  
    Review.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Review.belongsTo(models.Show, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Review;
  };