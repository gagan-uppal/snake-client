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

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};
//console.log("Connecting ...");
connect();

const handleUserInput = function () {
  // your code here
   if (key === '\u0003') {
    process.exit();
  
}
};
