module.exports = (sequelize, Sequelize) => {
    const WebsiteInfo = sequelize.define("tbl_website_info", {
      websiteName: {
        type: Sequelize.STRING
      },
      websiteImageName: {
        type: Sequelize.STRING
      },
      websiteImage: {
        type: Sequelize.BLOB('long')
      },
      address: {
        type: Sequelize.STRING
      },
      mapLocation: {
        type: Sequelize.TEXT
      }
    });
  
    return WebsiteInfo;
  };