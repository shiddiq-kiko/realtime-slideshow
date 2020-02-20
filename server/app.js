const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors')

app.use(cors())

server.listen(3000, () => {
    console.log('Running on port', 3000);
    
})

app.get('/', function (req, res) {
  res.send('Hello world')
});

io.on('connection', function (socket) {
  socket.on('image', function (data) {
    io.emit('nextImage', data)
  })
})