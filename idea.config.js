'use strict'
const path = require('path')

function resolve (dir) {
	console.log(path.join(__dirname, '.', dir))
  return path.join(__dirname, '.', dir)
}

module.exports = {
    context: path.resolve(__dirname, './'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            '@views': resolve('@/views'),
            '@comp': resolve('@/components'),
        }
    },
}