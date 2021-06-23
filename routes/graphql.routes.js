const express = require('express')
const router = express.Router()
const graphqlHTTP = require('./../controllers/graphql.controller')

router.use('/graphql', graphqlHTTP)

module.exports = router