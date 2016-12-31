const imageRouter = require('express').Router();
const Image = require('../models/image-model.js');

const getAllImages = (req, res) => {
	Image.findAll()
	.then((images) => {
		res.send(images)
	})
}

const getOneImage = (req, res) => {
	Image.findById(req.params.id)
	.then((image) => {
		res.send(image)
	})
}

const deleteImage = (req, res) => {
	Image.findById(req.params.id)
	.then((image) => {
		Image.destroy()
	})
	.then(() => {
		res.send('Image has been removed from board.')
	})
}

imageRouter.route('/')
	.get(getAllImages)

imageRouter.route('/:id')
	.get(getOneImage)
	.delete(deleteImage)

module.exports = imageRouter;