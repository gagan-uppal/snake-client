const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542

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


  });

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })


  return conn;
};

module.exports = { connect };
