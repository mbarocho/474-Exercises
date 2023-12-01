var admin = require("firebase-admin");

var serviceAccount = require("/etc/secrets/fir-test-437e7-firebase-adminsdk-mpdcr-98d8453e41.json");

admin.initializeApp({
  credential: admin.credential.cert("./fir-test-437e7-firebase-adminsdk-mpdcr-98d8453e41.json"),
  databaseURL: "https://fir-test-437e7-default-rtdb.firebaseio.com"
});

// Get a database reference to our blog
const { getDatabase } = require('firebase-admin/database');
const db = getDatabase();
const ref = db.ref('server/saving-data/');
const usersRef = ref.child('users');
usersRef.set({
    alanisawesome: {
        date_of_birth: 'June 23, 1912',
        full_name: 'Alan Turing'
    },
    gracehop: {
        date_of_birth: 'December 9, 1906',
        full_name: 'Grace Hopper'
    }
});


const http = require('http')
const port = 8080
// Create a server object:
const server = http.createServer(function (req, res) {
// Write a response to the client
res.write('Hello World')
// End the response
res.end()
})
// Set up our server so it will listen on the port
server.listen(port, function (error) {
// Checking any error occur while listening on port
if (error) {
console.log('Something went wrong', error);
}
// Else sent message of listening
else {
console.log('Server is listening on port' + port);
}
})