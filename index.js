var ExpressPeerServer = require('peer').ExpressPeerServer;
var peerExpress = require('express');
var peerApp = peerExpress();
const cors = require("cors");
var peerServer = require('http').createServer(peerApp);
var options = { debug: true }
peerApp.use(cors()); 

peerApp.use('/peerjs', ExpressPeerServer(peerServer, options));
// Mount the Peer server as middleware
peerApp.get("/",async=(req,res)=>{
    res.send("fucking happily")
})
// Start the Express server
const PORT = 3009;
peerServer.listen(PORT, () => {
  console.log(`Peer server listening on port ${PORT}`);
});
