var stream = require('stream');
const db = require("../models");
const beritaModel = db.berita;
var _ = require('lodash');




// API untuk Simpan data
exports.postBerita = async (req, res) => {
	var timeStampFileName = (new Date()).getTime() +'_'+ req.file.originalname;
	var data = {
		title    : req.body.title ,
		news     : req.body.news,
		imageNews: req.file.buffer,
		tags     : req.body.tags,
		likes    : req.body.likes,
		userId   : req.body.userId,
	}
	await beritaModel.create(data).then(file => {
		var sendRespone = file.dataValues; 
		delete sendRespone.imageNews
		sendRespone.status  = "ok"
		sendRespone.message = "Data Saved Successfuly!",
		res.status(200);
		res.json(sendRespone);
	}).catch(err => {
		const result = {
			status: "error",
			error: err
		}
		res.json(result);
	});
}


// API untuk Update
exports.updateBerita =  (req, res) => {
	console.log('req.params ==>',req.params)
    const id = req.params.id;
	if(!id){
		res.status(404).send({
			message: "required id in param"
		});
	}else{
		beritaModel.update(req.body, { where: { id: id }})
		   	.then( num => {
			  if (num == 1) {
				 beritaModel.findOne({
					where:{id:id},
					attributes : { exclude:['imageNews']}
				}).then(data => {	
					data.dataValues.message = "updateBerita was updated successfully."
					res.status(200).send(data)
				})
			  } else {
				  res.send({
					  message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
				  });
			  }
			})
			.catch(err => {
			  res.status(500).send({
				message: "Error updating Tutorial with id=" + id
			  });
		  });
	}
};


// API untuk GET data by id
exports.getByIdBerita = (req, res) => {
    const id = req.params.id;
    beritaModel.findByPk(id, {attributes:{exclude:["imageNews"]}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };


// API untuk GET data
exports.getAllBerita = (req, res) => {
	beritaModel.findAll({attributes:{exclude:["imageNews"]}}).then(files => {
	    res.status(200).send(files);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}


// API untuk get Image by Id
exports.getImageBerita = (req, res) => {
	beritaModel.findByPk(req.params.id).then(file => {
		var fileContents = Buffer.from(file.imageNews, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents);
		res.set('Content-disposition', 'attachment; filename=' + file.name);
		res.set('Content-Type', file.type);
		readStream.pipe(res);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}



exports.deleteBerita = (req, res) => {
    const id = req.params.id;
    beritaModel.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };
