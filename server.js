const express = require('express')
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const path = require('path');
const io = require('socket.io')(server)


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs')

app.get('/', async(req,res) => {
    await res.render('pages/index')
})

app.get('/about', async(req,res)=>{
    await res.render('pages/about');
})

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });

server.listen('3000', async() => {
    await console.log('Port started on 3000');
})