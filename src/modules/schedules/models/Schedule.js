const { Model, DataTypes, Sequelize } = require('sequelize');

class Schedule extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        start_time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        end_time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        day_of_week: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        provider_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: { model: 'providers', key: 'id' },
        },
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Provider, {
      foreignKey: 'provider_id',
      as: 'provider',
    });
  }
}

module.exports = { Schedule };
