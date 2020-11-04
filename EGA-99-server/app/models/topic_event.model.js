module.exports = (sequelize, DataTypes) => {
    const TopicEvent = sequelize.define("topicevents", {
      name: {
        type: DataTypes.STRING
      },
      text: {
        type: DataTypes.STRING
      }
    });
  
    return TopicEvent;
  };