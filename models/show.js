

module.exports = function(sequelize, DataTypes) {
    var Show = sequelize.define("Show", {
      show_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
     mood: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    // Show.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Show.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Show;
  };
  