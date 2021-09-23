const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  }, () => {
    console.log("Hello!")

  });
  //const name = 'meeeeeeeeeee';

  // interpret incoming data as text
  conn.setEncoding("utf8");
 
  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: mee");
    conn.write("Move: left");
    conn.write("Move: left");
    conn.write("Move: right");
    conn.write("Move: up");
    conn.write("Move: up");
    conn.write("Say: Hello")


  });

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!");
    console.log(data);
  })


  return conn;
};

module.exports = { connect };
