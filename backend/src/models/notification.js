'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate (models) {
      Notification.belongsTo(models.User, {
        foreignKey: 'recipientUserId',
        as: 'Receptionist'
      })
      Notification.belongsTo(models.User, {
        foreignKey: 'senderUserId',
        as: 'Sender'
      })
    }
  }
  Notification.init(
    {
      recipientUserId: DataTypes.INTEGER,
      senderUserId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      viewed: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Notification'
    }
  )
  return Notification
}
