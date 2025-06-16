const text = require('text')
const trim = require('trim')
module.exports = (name = '(unknown)') => trim(text(name))