module.exports = (sequelize, Sequelize) => {
    const BeritaExcl = sequelize.define("tbl_berita_excl", {
      title: {
        type: Sequelize.STRING
      },
      news: {
        type: Sequelize.TEXT
      },
      imageNews: {
        type: Sequelize.BLOB('long')
      },
      groups: {
        type: Sequelize.ENUM,
        values : ['sejarah', 'umum', 'kalender-event','potensi-desa-wisata','daya-tarik','bentang-alam','budaya','papais','cisaat']
      },
      userId: {
        type: Sequelize.INTEGER
      }
    });
  
    return BeritaExcl;
  };