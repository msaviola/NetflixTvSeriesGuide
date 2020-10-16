

module.exports = function (sequelize, DataTypes) {
  var Show = sequelize.define("Show", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    seasons: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    mood: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    },
    length: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    }
    
  },
    {
      timestamps: false
    });

    Show.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Show.hasMany(models.Review, {
        onDelete: "cascade"
      });
    };
  
    return Show;
};
