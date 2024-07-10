const {getCategory,postCategory} = require('../controller/categoryController')
const route = require('express').Router()

route.get('/',getCategory)
route.post('/',postCategory)

module.exports = route

