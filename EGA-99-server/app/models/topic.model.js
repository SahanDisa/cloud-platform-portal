module.exports = (sequelize, Sequelize) => {
    const Topic = sequelize.define("topics", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      subscription: {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.BOOLEAN
      }
    });
    // created means active/inactive of the topic
    return Topic;
  };