const path = require('path')
module.exports={
    entry:{
        index:'./src/index.js',
        about:'./src/about.js'
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].[chunkHash:5].js"
    }
}