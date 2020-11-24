const restify = require('restify')
const mongoose= require('mongoose');
const config = require('./config')

const server = restify.createServer();

//
server.use(restify.plugins.bodyParser());

//Running server
server.listen(config.PORT,() =>{
    mongoose.connect(
        config.MONGO_URI,
        {useNewUrlParser: true,
            useUnifiedTopology: true}
    )
})

const db = mongoose.connection;
db.on('error',(err)=> console.log(err))

db.once('open', ()=>{
    require('./routes/customer')(server)
    console.log('Sever running on PORT 8080')
})