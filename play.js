//const net = require("net");

// establishes a connection with the game server
/*const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542

  }, () => {
    console.log("Hello!")

  });
  const name = 'meeeeeeeeeee';

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: Meeee");
  });

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })


  return conn;
};*/

const { connect } = require('./client');


console.log("Connecting ...");
connect();

